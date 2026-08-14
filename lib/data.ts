// ============================================================================
//  Portfolio content — everything here is editable. Change text, add items,
//  reorder things, and the site updates automatically. No component edits needed.
// ============================================================================

export const profile = {
  nickname: "Naveen",
  name: "Naveenkumar S",
  title: "AI/ML Engineer • Full Stack Developer",
  tagline: "Building machine learning and computer vision applications.",
  location: "Coimbatore, Tamil Nadu, India",
  photo: "/profile.jpg.jpeg",
  photoHero: "/WhatsApp Image 2026-01-10 at 6.59.52 PM (2).jpeg",
  photoCaption: "that's me! 👋",
  email: "naveenkumar2k65@gmail.com",
  phone: "+91 9342657704",
  socials: {
    github: "https://github.com/Naveen-Kumar-05",
    linkedin: "https://www.linkedin.com/in/naveen-kumar-s-594779291/",
  },
  // A short, hand-written intro shown near the top of the home page.
  introHome:
    "Hey — I'm Naveenkumar. Motivated B.Tech AI & DS student with hands-on experience building machine learning and computer vision applications through internships and projects.",

  // The intro shown on the About page — separate from introHome so each can be tuned independently.
  introAbout:
    "B.Tech Artificial Intelligence and Data Science student with a passion for building machine learning and computer vision applications. Proficient in Python, Java, MySQL, MongoDB, and web fundamentals. Recognized in a national-level Gen AI hackathon (top 5 of 264 teams). Seeking to apply my technical skills to impactful, real-world solutions.",

  introCircle:"Let's build !",

  // A tighter, professional summary used on the printable resume page.
  resumeSummary:
    "Motivated B.Tech Artificial Intelligence and Data Science student with hands-on experience building ML and computer vision applications. Recognized in a national-level Gen AI hackathon (top 5 of 264 teams). Seeking an entry-level AI-ML role to apply technical skills and contribute to impactful solutions.",
};

// ----------------------------------------------------------------------------
//  Hero section — the home page's opening scrapbook collage. Layout,
//  rotation, and color stay in components/home/Hero.tsx; only the copy lives
//  here so it can be edited without touching JSX.
// ----------------------------------------------------------------------------

export const hero = {
  kicker: "✂️ pasted fresh into the scrapbook —",

  // top-left torn note: crossed-out "old" approaches + the punchline
  oldApproaches: ["manual data entry", "hardcoded rules", "basic scripts"],
  realization: "1 realization: build AI that learns ✨",

  // bottom-right torn note: a hand-written motto
  quote:
    "the best solutions come from combining strong fundamentals with innovative thinking.",

  airmailLabel: "AI & ML",

  stickers: {
    modelTrain: { text: "model.fit()", emoji: "🧠" },
    gpuBrrr: { text: "data prep", emoji: "📊" },
    shipIt: { text: "build it", emoji: "🚀" },
    lossVibes: { text: "accuracy ↑", emoji: "📈" },
    attention: { text: "computer vision", emoji: "👁️" },
  },

  annotations: {
    neurons: "↑ extracting features",
    hiHuman: "hi, recruiter 👋",
    exhibitA: "↑ that's me",
  },
};

// ----------------------------------------------------------------------------
//  Career path — the milestones, drawn out in order (earliest → now).
//  `kind` controls the color/icon: "education" | "work".
// ----------------------------------------------------------------------------

export type Milestone = {
  kind: "education" | "work";
  period: string;
  title: string;
  org: string;
  detail: string;
  highlights?: string[];
};

export const milestones: Milestone[] = [
  {
    kind: "education",
    period: "2020 — 2021",
    title: "SSLC (10th Grade)",
    org: "Sri Ramakrishna Higher Secondary School, Krishnagiri",
    detail: "State Board — Score: 100%. The strong foundation.",
  },
  {
    kind: "education",
    period: "2022 — 2023",
    title: "HSC (12th Grade)",
    org: "Sri Ramakrishna Higher Secondary School, Krishnagiri",
    detail: "State Board — Score: 80%.",
  },
  {
    kind: "education",
    period: "2023 — 2027",
    title: "B.Tech · Artificial Intelligence and Data Science",
    org: "Dr. NGP Institute of Technology, Coimbatore",
    detail: "CGPA: 7.87 / 10.",
  },
  {
    kind: "work",
    period: "Internship",
    title: "AI & Data Science Intern",
    org: "PaceLab Refining Technologies, Kozhikode, Kerala",
    detail: "Hands-on internship in AI and data science.",
    highlights: [
      "Built and evaluated machine learning models working across the full pipeline from raw data to trained model.",
      "Performed data preprocessing, feature preparation, model training, and performance evaluation on real-world datasets.",
      "Strengthened practical skills in AI algorithms, data analytics, and applied data-driven problem solving.",
    ],
  },
];

// ----------------------------------------------------------------------------
//  Projects — rendered as sticky notes on the board.
//  `color` picks a sticky-note color: yellow | pink | blue | green | orange | purple
// ----------------------------------------------------------------------------

export type Project = {
  name: string;
  date: string;
  blurb: string;
  tags: string[];
  color: "yellow" | "pink" | "blue" | "green" | "orange" | "purple";
  // Replace "#" with the real GitHub URL, e.g. "https://github.com/parkky21/slm"
  repo?: string;
  link?: string;
  // Featured projects show up on the home page (and the resume).
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Agro Smart AI Power-IT",
    date: "Project",
    blurb:
      "Designed an AI-based smart farming platform delivering data-driven insights and recommendations to support informed crop management decisions. Built a crop monitoring feature to analyze crop conditions and flag potential issues.",
    tags: ["AI", "Smart Farming", "Data-driven"],
    color: "green",
    repo: "#",
    featured: true,
  },
  {
    name: "Driver Drowsiness Detection System",
    date: "Project",
    blurb:
      "Developed a real-time AI system using computer vision to monitor facial expressions, eye-blink patterns, and eye-closure duration for accurate drowsiness detection to improve road safety.",
    tags: ["Computer Vision", "Real-time AI", "Python"],
    color: "yellow",
    repo: "#",
    featured: true,
  },
  {
    name: "AI-Based Network Monitoring System",
    date: "Project",
    blurb:
      "Built a network monitoring system to track real-time traffic, upload/download speeds, active connections, and connected devices, with packet-level traffic analysis to flag unusual activity.",
    tags: ["Machine Learning", "Network Monitoring", "Anomaly Detection"],
    color: "blue",
    repo: "#",
    featured: true,
  },
  {
    name: "SmartLink",
    date: "Project",
    blurb:
      "A smart linking solution available on my GitHub. Check out the repository for source code and documentation.",
    tags: ["Open Source", "Project"],
    color: "purple",
    repo: "https://github.com/Naveen-Kumar-05/smartLink",
    featured: true,
  },
];

// ----------------------------------------------------------------------------
//  Skills — grouped, rendered as marker-circled clusters.
// ----------------------------------------------------------------------------

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Python", "Java"],
  },
  {
    label: "Web & Backend",
    items: ["HTML", "CSS", "JavaScript", "REST APIs"],
  },
  {
    label: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    label: "Cloud & Tools",
    items: ["Docker", "GitHub", "VS Code", "Kiro AI", "Antigravity"],
  },
  {
    label: "Soft Skills",
    items: ["Quick learner", "Adaptable", "Team player", "Leadership"],
  },
];

// ----------------------------------------------------------------------------
//  Rule book — the philosophies written across the open book on the home page.
//  First half lands on the left page, second half on the right.
// ----------------------------------------------------------------------------

export const rulebook: string[] = [
  "first you make it work. then you can always make it beautiful.",
  "embrace data-driven problem solving.",
  "fundamentals first — strong roots make learning new tech easier.",
  "teamwork makes the dream work — demonstrated at Gen AI Hackathon.",
  "stay curious and keep exploring emerging technologies.",
  "think before you build; to hesitate after starting is a mistake. (kural 467) -thiruvalluvar",
  "always focus on building impactful, real-world solutions.",
];

// ----------------------------------------------------------------------------
//  Open source + writing
// ----------------------------------------------------------------------------

export const openSource = [
  "Secured 5th place among 264 teams at a 24-hour Gen AI Hackathon (Sri Shakthi Institute of Engineering and Technology) as part of the team behind ImportSense AI.",
  "Human-Computer Interaction — NPTEL (Certified Course, In English)",
];

export const quotes = [
  {
    text: "First you make it work. Then you can always make it beautiful.",
    author: "Naveen",
    sticker: "Process",
    emoji: "💡",
    tint: "yellow" as const,
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    sticker: "Logic",
    emoji: "🧠",
    tint: "blue" as const,
  },
  {
    text: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
    sticker: "Action",
    emoji: "🚀",
    tint: "green" as const,
  },
];
