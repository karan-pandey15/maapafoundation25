import {
  UtensilsCrossed,
  GraduationCap,
  TreePine,
  Briefcase,
  HeartHandshake,
  Accessibility,
  CloudRain,
  Droplet,
  type LucideIcon,
} from "lucide-react";

export type InitiativeSection = {
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
};

export type Initiative = {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  preview: string;
  image: string;
  imageAlt: string;
  sections: InitiativeSection[];
  highlights: string[];
};

/** Images in public/ (root) */
const img = (name: string) => `/${encodeURIComponent(name)}`;

/** Images in public/homepageimg/ */
const homepageImg = (name: string) =>
  `/homepageimg/${encodeURIComponent(name)}`;

/** Sections inherit the same image as the card / hero for that program */
function withSections(
  initiative: Omit<Initiative, "sections"> & {
    sections: ReadonlyArray<{ heading: string; body: string }>;
  }
): Initiative {
  return {
    ...initiative,
    sections: initiative.sections.map((section) => ({
      ...section,
      image: initiative.image,
      imageAlt: initiative.imageAlt,
    })),
  };
}

export const initiatives: Initiative[] = [
  withSections({
    slug: "hunger-relief",
    icon: UtensilsCrossed,
    title: "Hunger Relief",
    tagline: "Food Distribution",
    preview:
      "We run regular food drives and community kitchens to deliver nutritious meals and ration kits to families facing hunger and food insecurity across our service areas.",
    image: img("freefood.jpeg"),
    imageAlt: "Volunteers distributing food during hunger relief drive",
    highlights: [
      "Weekly community kitchens and meal service",
      "Ration kits with grains pulses and essentials",
      "Priority support for widows seniors and children"
    ],
    sections: [
      {
        heading: "Fighting hunger on the ground",
        body:
          "Hunger Relief is one of our longest running programs. Volunteers pack and deliver food to neighbourhoods where families struggle to afford daily meals. We work with local markets and donors to keep supplies fresh and sufficient for every drive.",
      },
      {
        heading: "Community kitchens that nourish",
        body:
          "Our community kitchens prepare warm meals during festivals heatwaves and cold seasons. Teams coordinate cooking hygiene and fair distribution so no one is turned away. Regular schedules help families plan and reduce daily stress about food.",
      },
      {
        heading: "Sustainable support beyond one day",
        body:
          "We track families who need repeat help and connect them to other MAAPA programs like education and skill training. Hunger relief opens the door to long term dignity and self reliance for every household we serve.",
      }
    ]
  }),
  withSections({
    slug: "education",
    icon: GraduationCap,
    title: "Education for Underprivileged Children",
    tagline: "Learning and Opportunity",
    preview:
      "Scholarships school supplies tuition support and mentoring help children from low income families stay in school and build brighter futures with confidence and hope.",
    image: img("education.jpeg"),
    imageAlt: "Children supported through education program",
    highlights: [
      "School bags books and uniforms for students in need",
      "Tuition help so children do not drop out",
      "Mentoring and career guidance for older students"
    ],
    sections: [
      {
        heading: "Education as a path out of poverty",
        body:
          "Every child deserves a chance to learn. Our education program removes common barriers like fees uniforms and travel costs. Teachers and volunteers visit schools to encourage attendance and celebrate progress throughout the year.",
      },
      {
        heading: "Scholarships and learning materials",
        body:
          "We identify bright students who lack funds and sponsor their studies. Kits include notebooks pens bags and hygiene items. Parent meetings explain how families can support learning at home with simple daily habits.",
      }, 
    ]
  }),
  withSections({
    slug: "environment",
    icon: TreePine,
    title: "Environment",
    tagline: "Tree Plantation",
    preview:
      "Tree plantation drives and green awareness campaigns bring cleaner neighbourhoods teach environmental care and leave a lasting legacy for future generations in every community we touch.",
    image: homepageImg("enviorment.jpeg"),
    imageAlt: "Tree plantation drive for a greener community",
    highlights: [
      "Mass plantation events with schools and volunteers",
      "Awareness on waste reduction and clean surroundings",
      "Care for saplings until they grow strong"
    ],
    sections: [
      {
        heading: "Greening our neighbourhoods",
        body:
          "Our environment program plants native trees in parks schools and open spaces. Volunteers dig plant and water saplings while teaching children why trees matter for air shade and soil. Each drive ends with a pledge to protect local green cover.",
      },
      {
        heading: "Awareness that changes habits",
        body:
          "Street plays posters and school talks explain plastic waste water saving and clean public spaces. We encourage families to keep lanes tidy and recycle where possible. Small daily actions add up to healthier cities for everyone.",
      },
      {
        heading: "A legacy for future generations",
        body:
          "Teams revisit plantation sites to water and protect young trees. Success is measured in shade cleaner air and pride among residents. Environment work at MAAPA Foundation connects nature with community responsibility.",
      }
    ]
  }),
  withSections({
    slug: "youth-skills",
    icon: Briefcase,
    title: "Youth Skill Development",
    tagline: "Livelihood Training",
    preview:
      "Vocational training workshops and placement support equip young people with practical skills to earn a living and become self reliant contributors to society and their families.",
    image: img("youthskill.jpeg"),
    imageAlt: "Youth participating in skill development workshop",
    highlights: [
      "Hands on training in trades and digital basics",
      "Workshops led by skilled volunteers and partners",
      "Guidance for jobs and small business starts"
    ],
    sections: [
      {
        heading: "Skills that create income",
        body:
          "Youth Skill Development focuses on employable abilities. Courses cover tailoring computer basics beauty wellness electrical helper skills and more based on local demand. Trainees practice daily until they feel ready to work independently.",
      },
      {
        heading: "Workshops with real outcomes",
        body:
          "Expert volunteers and partner trainers lead short and long format batches. Certificates and demo sessions help graduates show their ability to employers. We celebrate every person who completes training and secures their first opportunity.",
      },
      {
        heading: "From training to livelihood",
        body:
          "Placement support includes resume help interview practice and connections to local businesses. Some graduates start micro enterprises with starter kits from donors. Skill development turns hope into stable income for young families.",
      }
    ]
  }),
  withSections({
    slug: "senior-support",
    icon: HeartHandshake,
    title: "Senior Citizen Support",
    tagline: "Care with Dignity",
    preview:
      "Healthcare assistance nutrition mobility aid and companionship programs ensure our elders receive respect comfort and steady support in their golden years without feeling alone or forgotten.",
    image: img("old.jpeg"),
    imageAlt: "Senior citizens receiving care and companionship",
    highlights: [
      "Health check ups and medicine support where needed",
      "Nutritious meal kits and warm clothing drives",
      "Friendly visits so elders stay connected"
    ],
    sections: [
      {
        heading: "Honoring our elders",
        body:
          "Senior Citizen Support treats every elder with dignity. Volunteers visit homes and senior gatherings to listen share time and understand medical or mobility needs. We coordinate with families so care is consistent and respectful.",
      },
      {
        heading: "Health nutrition and comfort",
        body:
          "Medical camps offer basic tests and referrals. We distribute walkers blankets and seasonal clothing. Meal kits are tailored for dietary needs common among older adults. Comfort and safety at home remain our top priorities.",
      },
      {
        heading: "Companionship that heals loneliness",
        body:
          "Many seniors lack regular company. Our teams host small events festivals and prayer meets where they can socialize. Phone check ins continue between visits. Care with dignity means presence as well as supplies.",
      }
    ]
  }),
  withSections({
    slug: "divyang-support",
    icon: Accessibility,
    title: "Inclusive Education and Support for Divyang Children",
    tagline: "Empowerment Program",
    preview:
      "Special education resources therapy support assistive aids and inclusive learning spaces help children with disabilities thrive with confidence dignity and equal opportunity alongside their peers.",
    image: img("divyang.jpeg"),
    imageAlt: "Inclusive support for children with disabilities",
    highlights: [
      "Assistive devices and learning tools where possible",
      "Therapy and special educator coordination",
      "Inclusive activities that build confidence"
    ],
    sections: [
      {
        heading: "Every child deserves inclusion",
        body:
          "Our divyang support program believes ability is diverse not lesser. We work with parents schools and therapists to create plans for each child. Goals focus on communication mobility learning and social participation at a comfortable pace.",
      },
      {
        heading: "Tools therapy and school partnership",
        body:
          "We help source wheelchairs hearing support slates and other aids when families cannot afford them. Sessions with therapists and special educators are arranged where available. Teachers receive guidance to welcome divyang students warmly.",
      },
      {
        heading: "Building confidence through community",
        body:
          "Sports days art workshops and group outings let children shine. Parents connect in support circles to share experience and hope. Empowerment means society sees ability first and offers equal respect every day.",
      }
    ]
  }),
  withSections({
    slug: "disaster-relief",
    icon: CloudRain,
    title: "Disaster Relief and Emergency Response",
    tagline: "Crisis Support",
    preview:
      "Flood relief emergency food kits and heatwave response with water and sharbat distribution reach affected families quickly when disaster strikes and communities need urgent help.",
    image: homepageImg("WhatsApp Image 2026-05-23 at 7.55.25 PM (2).jpeg"),
    imageAlt: "Emergency relief team responding to crisis",
    highlights: [
      "Rapid food and water distribution in floods",
      "Heatwave camps with drinking water and sharbat",
      "Coordination with local authorities and volunteers"
    ],
    sections: [
      {
        heading: "Rapid response when crisis hits",
        body:
          "Disaster Relief teams mobilize within hours when floods storms or extreme heat threaten lives. Volunteers pack dry rations water and basic medicine. Priority goes to families stranded without supplies or shelter.",
      },
      {
        heading: "Heatwave and seasonal emergencies",
        body:
          "During severe heat we set up water and sharbat points on busy roads and near labour clusters. Cooling advice and ORS packets are shared with families. Summer drives repeat in high risk weeks until temperatures ease.",
      },
      {
        heading: "Recovery after the first wave",
        body:
          "After immediate relief we assess damaged homes and lost income. Follow up kits and referrals to government schemes help families rebuild. Crisis support at MAAPA Foundation means staying until stability returns.",
      }
    ]
  }),
  withSections({
    slug: "blood-medical",
    icon: Droplet,
    title: "Blood Donation and Medical Camps",
    tagline: "Healthcare Outreach",
    preview:
      "Life saving blood donation camps and free medical check ups bring essential healthcare to communities with limited access to hospitals specialists and regular preventive care.",
    image: img("blooddonation.jpeg"),
    imageAlt: "Medical camp and blood donation outreach",
    highlights: [
      "Blood donation drives with hospital partners",
      "Free check ups for blood pressure sugar and general health",
      "Referrals to hospitals when serious issues are found"
    ],
    sections: [
      {
        heading: "Healthcare closer to home",
        body:
          "Medical camps travel to colonies villages and work sites where doctors are far away. Nurses and volunteer doctors conduct screenings and answer questions in simple language. Early detection saves lives and reduces long term suffering.",
      },
      {
        heading: "Blood donation that saves lives",
        body:
          "We organize blood donation camps with certified blood banks. Donors receive thanks certificates and refreshments. Awareness sessions explain who can donate and how one unit helps multiple patients in emergency surgery and illness.",
      },
      {
        heading: "Follow up and specialist referrals",
        body:
          "When camps find serious conditions we help families reach affordable care. Lists of government schemes and partner hospitals are shared on the spot. Healthcare outreach continues until each person knows their next step clearly.",
      }
    ]
  })
];

export function getInitiativeBySlug(slug: string): Initiative | undefined {
  return initiatives.find((item) => item.slug === slug);
}

export function getAllInitiativeSlugs(): string[] {
  return initiatives.map((item) => item.slug);
}
