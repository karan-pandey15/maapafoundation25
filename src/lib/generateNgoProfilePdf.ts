import { jsPDF } from "jspdf";
import {
  NGO_NAME,
  NGO_TAGLINE,
  NGO_LOGO_PATH,
  PDF_FILENAME,
  ngoIntroduction,
  registrationDetails,
  achievements,
  beneficiaries,
  futureGoals,
  partnershipProposal,
  ngoPrograms,
} from "./ngoProfileData";

const BRAND = { r: 148, g: 35, b: 30 };
const BRAND_DARK = { r: 107, g: 25, b: 21 };
const MARGIN = 20;
const PAGE_W = 210;
const PAGE_H = 297;
const CONTENT_W = PAGE_W - MARGIN * 2;

async function loadLogoBase64(): Promise<string | null> {
  try {
    const response = await fetch(NGO_LOGO_PATH);
    if (!response.ok) return null;
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

function addHeader(doc: jsPDF, logo: string | null, pageNum?: number) {
  doc.setFillColor(BRAND.r, BRAND.g, BRAND.b);
  doc.rect(0, 0, PAGE_W, 28, "F");

  if (logo) {
    doc.addImage(logo, "JPEG", MARGIN, 5, 18, 18);
  }

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text(NGO_NAME, logo ? MARGIN + 22 : MARGIN, 12);
  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  doc.text(NGO_TAGLINE, logo ? MARGIN + 22 : MARGIN, 18);

  if (pageNum !== undefined) {
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text(`Page ${pageNum}`, PAGE_W - MARGIN, 18, { align: "right" });
  }

  doc.setTextColor(40, 40, 40);
}

function addFooter(doc: jsPDF) {
  doc.setDrawColor(BRAND.r, BRAND.g, BRAND.b);
  doc.setLineWidth(0.3);
  doc.line(MARGIN, PAGE_H - 18, PAGE_W - MARGIN, PAGE_H - 18);
  doc.setFontSize(7);
  doc.setTextColor(100, 100, 100);
  doc.text(
    `${NGO_NAME} | ${NGO_TAGLINE} | support@maapafoundation.org | +91 9999781282`,
    PAGE_W / 2,
    PAGE_H - 12,
    { align: "center" }
  );
}

function addSectionTitle(doc: jsPDF, title: string, y: number): number {
  doc.setFillColor(BRAND.r, BRAND.g, BRAND.b);
  doc.roundedRect(MARGIN, y, CONTENT_W, 10, 2, 2, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text(title, MARGIN + 4, y + 7);
  doc.setTextColor(40, 40, 40);
  return y + 16;
}

function addBodyText(
  doc: jsPDF,
  text: string,
  y: number,
  fontSize = 10,
  maxWidth = CONTENT_W
): number {
  doc.setFontSize(fontSize);
  doc.setFont("helvetica", "normal");
  const lines = doc.splitTextToSize(text, maxWidth);
  doc.text(lines, MARGIN, y);
  return y + lines.length * (fontSize * 0.45) + 4;
}

function addBulletList(doc: jsPDF, items: string[], y: number): number {
  doc.setFontSize(9.5);
  doc.setFont("helvetica", "normal");
  let currentY = y;

  items.forEach((item) => {
    const bullet = "\u2022 ";
    const lines = doc.splitTextToSize(bullet + item, CONTENT_W - 4);
    if (currentY + lines.length * 5 > PAGE_H - 28) return;
    doc.text(lines, MARGIN + 2, currentY);
    currentY += lines.length * 5 + 2;
  });

  return currentY + 4;
}

function newContentPage(doc: jsPDF, logo: string | null, pageNum: number): number {
  doc.addPage();
  addHeader(doc, logo, pageNum);
  addFooter(doc);
  return 38;
}

export async function generateNgoProfilePdf(): Promise<void> {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const logo = await loadLogoBase64();
  let pageNum = 1;

  // --- Page 1: Cover ---
  doc.setFillColor(BRAND_DARK.r, BRAND_DARK.g, BRAND_DARK.b);
  doc.rect(0, 0, PAGE_W, PAGE_H, "F");

  doc.setFillColor(BRAND.r, BRAND.g, BRAND.b);
  doc.rect(0, PAGE_H * 0.62, PAGE_W, PAGE_H * 0.38, "F");

  if (logo) {
    doc.addImage(logo, "JPEG", PAGE_W / 2 - 26, 46, 52, 52);
  }

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  doc.text(NGO_NAME, PAGE_W / 2, 118, { align: "center" });

  doc.setFontSize(14);
  doc.setFont("helvetica", "italic");
  doc.text(NGO_TAGLINE, PAGE_W / 2, 130, { align: "center" });

  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("NGO Profile Deck", PAGE_W / 2, 200, { align: "center" });

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("Professional Overview | Programs | Partnerships", PAGE_W / 2, 212, {
    align: "center",
  });

  doc.setFontSize(9);
  doc.text("Incorporated June 16, 2022 | Registrar of Companies, Delhi", PAGE_W / 2, 248, {
    align: "center",
  });
  doc.text("support@maapafoundation.org | www.maapafoundation.org", PAGE_W / 2, 256, {
    align: "center",
  });

  // --- Page 2: Introduction ---
  let y = newContentPage(doc, logo, ++pageNum);
  y = addSectionTitle(doc, "NGO Introduction", y);

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(BRAND.r, BRAND.g, BRAND.b);
  doc.text("Vision", MARGIN, y);
  y += 6;
  y = addBodyText(doc, ngoIntroduction.vision, y);

  doc.setFont("helvetica", "bold");
  doc.setTextColor(BRAND.r, BRAND.g, BRAND.b);
  doc.text("Mission", MARGIN, y);
  y += 6;
  y = addBodyText(doc, ngoIntroduction.mission, y);

  doc.setFont("helvetica", "bold");
  doc.setTextColor(BRAND.r, BRAND.g, BRAND.b);
  doc.text("About Us", MARGIN, y);
  y += 6;
  ngoIntroduction.about.forEach((para) => {
    y = addBodyText(doc, para, y);
    y += 2;
  });

  // --- Page 3: Registration ---
  y = newContentPage(doc, logo, ++pageNum);
  y = addSectionTitle(doc, "Registration Details", y);

  registrationDetails.forEach((row) => {
    doc.setFillColor(245, 245, 245);
    doc.rect(MARGIN, y - 4, CONTENT_W, 12, "F");
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(BRAND.r, BRAND.g, BRAND.b);
    doc.text(row.label, MARGIN + 3, y + 2);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(50, 50, 50);
    doc.text(row.value, MARGIN + 55, y + 2);
    y += 14;
  });

  // --- Page 4: Programs overview ---
  y = newContentPage(doc, logo, ++pageNum);
  y = addSectionTitle(doc, "Our Programs — Overview", y);
  y = addBodyText(
    doc,
    "MAAPA Foundation runs eight core programs addressing hunger, education, environment, youth skills, senior care, Divyang inclusion, disaster relief, and healthcare outreach.",
    y
  );
  y += 4;

  ngoPrograms.forEach((program) => {
    doc.setFontSize(9.5);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(BRAND.r, BRAND.g, BRAND.b);
    doc.text(`${program.number}. ${program.title}`, MARGIN, y);
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text(`(${program.tagline})`, MARGIN + 3, y + 5);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(60, 60, 60);
    const summaryLines = doc.splitTextToSize(program.summary, CONTENT_W - 6);
    doc.text(summaryLines, MARGIN + 3, y + 10);
    y += 10 + summaryLines.length * 4 + 4;
  });

  // --- Pages 5-6: Programs detail (4 per page) ---
  for (let chunk = 0; chunk < 2; chunk++) {
    y = newContentPage(doc, logo, ++pageNum);
    y = addSectionTitle(doc, `Programs in Detail (${chunk * 4 + 1}–${chunk * 4 + 4})`, y);

    ngoPrograms.slice(chunk * 4, chunk * 4 + 4).forEach((program) => {
      doc.setFillColor(252, 248, 248);
      doc.roundedRect(MARGIN, y, CONTENT_W, 38, 2, 2, "F");

      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(BRAND.r, BRAND.g, BRAND.b);
      doc.text(`${program.number}. ${program.title}`, MARGIN + 3, y + 7);
      doc.setFontSize(8);
      doc.setFont("helvetica", "italic");
      doc.text(program.tagline, MARGIN + 3, y + 12);

      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(50, 50, 50);
      let innerY = y + 17;
      program.activities.forEach((activity) => {
        const lines = doc.splitTextToSize(`\u2022 ${activity}`, CONTENT_W - 10);
        doc.text(lines, MARGIN + 5, innerY);
        innerY += lines.length * 3.8 + 1;
      });

      doc.setFont("helvetica", "bold");
      doc.setTextColor(BRAND.r, BRAND.g, BRAND.b);
      doc.text("Impact: ", MARGIN + 3, y + 34);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(60, 60, 60);
      const impactLines = doc.splitTextToSize(program.impact, CONTENT_W - 22);
      doc.text(impactLines, MARGIN + 18, y + 34);

      y += 44;
    });
  }

  // --- Page 7: Achievements ---
  y = newContentPage(doc, logo, ++pageNum);
  y = addSectionTitle(doc, "Achievements & Impact", y);
  y = addBodyText(
    doc,
    "Through dedicated volunteers, partners, and donors, MAAPA Foundation has created measurable change across communities:",
    y
  );
  y = addBulletList(doc, achievements, y);

  // --- Page 8: Beneficiaries ---
  y = newContentPage(doc, logo, ++pageNum);
  y = addSectionTitle(doc, "Beneficiaries We Serve", y);
  y = addBodyText(
    doc,
    "Our programs are designed for the most vulnerable members of society. Key beneficiary groups include:",
    y
  );
  y = addBulletList(doc, beneficiaries, y);

  // --- Page 9: Future Goals ---
  y = newContentPage(doc, logo, ++pageNum);
  y = addSectionTitle(doc, "Future Goals & Roadmap", y);
  y = addBodyText(
    doc,
    "MAAPA Foundation is committed to scaling impact responsibly. Our strategic goals for the coming years include:",
    y
  );
  y = addBulletList(doc, futureGoals, y);

  // --- Page 10: Partnership ---
  y = newContentPage(doc, logo, ++pageNum);
  y = addSectionTitle(doc, "Partnership Proposal", y);
  y = addBodyText(doc, partnershipProposal.intro, y);
  y += 2;

  doc.setFont("helvetica", "bold");
  doc.setTextColor(BRAND.r, BRAND.g, BRAND.b);
  doc.setFontSize(10);
  doc.text("Collaboration Opportunities", MARGIN, y);
  y += 8;
  y = addBulletList(doc, partnershipProposal.opportunities, y);

  doc.setFillColor(BRAND.r, BRAND.g, BRAND.b);
  doc.roundedRect(MARGIN, y + 4, CONTENT_W, 24, 3, 3, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("Partner With Us Today", PAGE_W / 2, y + 14, { align: "center" });
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  const contactLines = doc.splitTextToSize(partnershipProposal.contact, CONTENT_W - 10);
  doc.text(contactLines, PAGE_W / 2, y + 20, { align: "center" });

  doc.save(PDF_FILENAME);
}
