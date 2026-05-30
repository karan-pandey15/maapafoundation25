export const NGO_NAME = "MAAPA Foundation";
export const NGO_TAGLINE = "Support, Who Can't Afford";
export const NGO_LOGO_PATH = "/image/maapalogo.jpeg";
export const PDF_FILENAME = "MAAPA-Foundation-NGO-Profile-Deck.pdf";

export const ngoIntroduction = {
  vision:
    "A society where no one is left behind due to financial constraints — where every individual has access to food, education, healthcare, dignity, and opportunity.",
  mission:
    "To bridge the gap between privilege and poverty through compassionate action, sustainable community programs, and partnerships that create lasting social impact.",
  about: [
    "MAAPA Foundation was incorporated on June 16, 2022, with a commitment to serve underprivileged communities across India. What began as a dedicated group of volunteers has grown into a multi-city movement touching thousands of lives.",
    "Registered with the Registrar of Companies, Delhi, we operate as a Non-government company focused on hunger relief, education, environmental action, skill development, elder care, inclusive support for Divyang children, disaster response, and healthcare outreach.",
    "Our tagline — Support, Who Can't Afford — reflects our core belief: those who cannot afford basic necessities deserve consistent, dignified support from society.",
  ],
};

export const registrationDetails = [
  { label: "Organization Name", value: "MAAPA Foundation" },
  { label: "Incorporation Date", value: "June 16, 2022" },
  { label: "Registration Authority", value: "Registrar of Companies, Delhi" },
  { label: "Company Type", value: "Non-government Company" },
  { label: "Status", value: "Active" },
  { label: "Registered Address", value: "B-25, Sector 2, Noida, Uttar Pradesh 201301" },
  { label: "Email", value: "support@maapafoundation.org" },
  { label: "Phone", value: "+91  8887796224" },
  { label: "Tax Benefit", value: "Donations eligible under Section 80G (as applicable)" },
];

export const achievements = [
  "10,000+ lives touched through food, education, healthcare, and relief programs",
  "500+ active volunteers mobilized across 15+ cities",
  "50+ institutional and community partners supporting our mission",
  "200+ units of blood collected in life-saving donation camps",
  "1,500+ families supported through hunger relief and emergency food kits",
  "500+ children benefited from education and clothing initiatives",
  "Tree plantation drives contributing to greener, healthier neighbourhoods",
  "Rapid disaster response including flood relief and heatwave water distribution",
];

export const beneficiaries = [
  "Families facing hunger and food insecurity in urban and rural communities",
  "Children from low-income households needing education, supplies, and mentoring",
  "Senior citizens requiring healthcare, nutrition, and companionship",
  "Youth seeking vocational skills and livelihood opportunities",
  "Divyang children and families needing inclusive education and assistive support",
  "Communities affected by floods, heatwaves, and other emergencies",
  "Patients and donors reached through blood donation and medical camps",
  "Local neighbourhoods benefiting from environmental and tree plantation drives",
];

export const futureGoals = [
  "Expand hunger relief to reach 5,000 additional families annually with sustainable food security programs",
  "Establish scholarship and learning centres for 1,000+ underprivileged children",
  "Plant 10,000+ trees through community-led environmental campaigns",
  "Launch skill development hubs in 5 new cities for youth employment readiness",
  "Scale senior citizen care with mobile health units and nutrition support",
  "Build inclusive learning centres for Divyang children with therapy and assistive technology",
  "Strengthen disaster response teams for faster flood and heatwave emergency deployment",
  "Conduct 24+ blood donation and medical camps per year in underserved areas",
];

export const partnershipProposal = {
  intro:
    "MAAPA Foundation invites corporates, institutions, CSR teams, schools, hospitals, and community leaders to partner with us in creating measurable social impact.",
  opportunities: [
    "Corporate CSR partnerships for program sponsorship and employee volunteering",
    "In-kind donations: food grains, clothing, medical supplies, and educational materials",
    "Co-branded campaigns for hunger relief, education, and environmental initiatives",
    "Medical institution partnerships for blood donation and health screening camps",
    "Media and awareness collaborations to amplify community outreach",
    "Long-term funding for skill development and Divyang inclusive education programs",
  ],
  contact:
    "Reach us at support@maapafoundation.org | +91  8887796224 | maapafoundation.org — together we can transform lives.",
};

export interface NgoProgram {
  number: number;
  title: string;
  tagline: string;
  summary: string;
  activities: string[];
  impact: string;
}

export const ngoPrograms: NgoProgram[] = [
  {
    number: 1,
    title: "Hunger Relief",
    tagline: "Food Distribution",
    summary:
      "Nutritious meals and ration support for families facing hunger and food insecurity.",
    activities: [
      "Community food drives and meal distribution",
      "Ration kits for vulnerable households",
      "Nutrition awareness in underserved areas",
    ],
    impact: "Ensuring no family goes to bed hungry in the communities we serve.",
  },
  {
    number: 2,
    title: "Education for Underprivileged Children",
    tagline: "Learning & Opportunity",
    summary:
      "Educational resources and support so children from poor families can stay in school and succeed.",
    activities: [
      "Scholarships and tuition assistance",
      "School supplies, books, and uniforms",
      "Mentoring and learning support sessions",
    ],
    impact: "Building brighter futures through equal access to quality education.",
  },
  {
    number: 3,
    title: "Environment",
    tagline: "Tree Plantation",
    summary:
      "Green initiatives that protect the planet and teach communities environmental stewardship.",
    activities: [
      "Tree plantation drives in schools and neighbourhoods",
      "Environmental awareness workshops",
      "Community clean-up and sustainability campaigns",
    ],
    impact: "Cleaner air, greener spaces, and a sustainable legacy for future generations.",
  },
  {
    number: 4,
    title: "Youth Skill Development",
    tagline: "Livelihood Training",
    summary:
      "Practical skills and training that help young people earn a living and become self-reliant.",
    activities: [
      "Vocational training workshops",
      "Placement and entrepreneurship guidance",
      "Digital and trade skills for marginalized youth",
    ],
    impact: "Empowering youth to break the cycle of poverty through employable skills.",
  },
  {
    number: 5,
    title: "Senior Citizen Support",
    tagline: "Care with Dignity",
    summary:
      "Healthcare, nutrition, and companionship for elders who deserve respect and comfort.",
    activities: [
      "Health check-ups and medicine support",
      "Nutrition and mobility assistance",
      "Companionship and community engagement programs",
    ],
    impact: "Honouring our elders with dignity, care, and belonging in their golden years.",
  },
  {
    number: 6,
    title: "Inclusive Education & Support for Divyang Children",
    tagline: "Empowerment Program",
    summary:
      "Inclusive education, therapy, and assistive support for children with disabilities.",
    activities: [
      "Special education resources and inclusive classrooms",
      "Therapy and rehabilitation support",
      "Assistive aids and family counselling",
    ],
    impact: "Helping Divyang children thrive with confidence, inclusion, and equal opportunity.",
  },
  {
    number: 7,
    title: "Disaster Relief & Emergency Response",
    tagline: "Crisis Support",
    summary:
      "Rapid relief when disasters strike — floods, emergencies, and extreme heat conditions.",
    activities: [
      "Flood relief with food, shelter essentials, and supplies",
      "Emergency food kits for crisis-affected families",
      "Heatwave support: water and sharbat distribution",
    ],
    impact: "Reaching affected families quickly when they need help the most.",
  },
  {
    number: 8,
    title: "Blood Donation & Medical Camps",
    tagline: "Healthcare Outreach",
    summary:
      "Life-saving blood camps and free medical check-ups for communities with limited healthcare access.",
    activities: [
      "Blood donation camps with certified medical teams",
      "Free health screenings and awareness sessions",
      "Medical aid referrals for underprivileged patients",
    ],
    impact: "Saving lives and bringing essential healthcare closer to those who need it.",
  },
];

export const profileDeckSections = [
  { title: "NGO Introduction", description: "Vision, mission, and our story" },
  { title: "Registration Details", description: "Legal and official information" },
  { title: "Programs & Impact", description: "All 8 core categories in detail" },
  { title: "Achievements", description: "Milestones and measurable impact" },
  { title: "Beneficiaries", description: "Communities we serve" },
  { title: "Future Goals", description: "Roadmap for growth and scale" },
  { title: "Partnership Proposal", description: "CSR and collaboration opportunities" },
];
