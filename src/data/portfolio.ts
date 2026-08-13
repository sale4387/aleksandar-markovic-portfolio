export type NavigationItem = { label: string; href: string };

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  responsibilities: string[];
  capabilities: string[];
};

export type Skill = {
  title: string;
  description: string;
};

export type Education = {
  title: string;
  detail: string;
  description: string;
};

export type Event = {
  title: string;
  year: string;
  focus: "Community & education" | "Execution & organisation";
  description: string;
};

export type ProductStoryStep = {
  label: string;
  input?: string;
  loadingText?: string;
  output?: string;
  meta?: string[];
};

export type ProductStory = {
  animationType: "decision" | "energy" | "cv" | "comparison" | "seo";
  steps: ProductStoryStep[];
};

export type Project = {
  id: string;
  title: string;
  status: "Live project" | "Local demo" | "Work in progress";
  role: string;
  shortDescription: string;
  problem: string;
  workflow: string[];
  outcome: string;
  tags: string[];
  screenshots: string[];
  accent: "blue" | "violet" | "emerald" | "amber" | "rose" | "cyan";
  productStory: ProductStory;
};

export type Hobby = {
  title: string;
  description: string;
  images: string[];
  label: string;
};

export const portfolio = {
  person: {
    name: "Aleksandar Marković",
    location: "Gouda, Netherlands",
    summary:
      "Commercial and product-oriented professional with 13+ years across CPaaS, messaging, mobile payments, connectivity, strategic partnerships, and AI product development.",
    email: "aleksandar.m.markovic@gmail.com",
    linkedIn: "https://linkedin.com/in/aleksandar-sale-markovic-89061062",
  },
  navigation: [
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "AI Projects", href: "#projects" },
    { label: "Events", href: "#events" },
    { label: "Hobbies", href: "#interests" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavigationItem[],
  skills: [
    { title: "Partnerships & Account Management", description: "Building trusted relationships, aligning stakeholders, and supporting long-term customer value." },
    { title: "Procurement & Negotiation", description: "Bringing structure to commercial conversations, supplier relationships, and practical agreements." },
    { title: "Operations & Delivery", description: "Turning priorities into coordinated work that teams and customers can rely on." },
    { title: "Product & Process Improvement", description: "Finding clearer ways of working through feedback, systems thinking, and continuous iteration." },
    { title: "Project Management", description: "Clarifying scope, dependencies, and next steps so cross-functional work keeps moving." },
    { title: "AI-Assisted Building", description: "Using AI tools thoughtfully to explore, prototype, document, and improve everyday workflows." },
  ] satisfies Skill[],
  experience: [
    {
      company: "Bird (formerly MessageBird)",
      role: "Account Manager - Connectivity",
      period: "Apr 2023 - Present",
      summary: "Growing strategic connectivity partnerships across the full commercial and technical lifecycle.",
      responsibilities: [
        "Manage and expand existing partner relationships through cross-selling omnichannel services.",
        "Lead the partner lifecycle: identification, pricing, negotiation, contracting, integration, testing, and go-live.",
        "Work with routing and support teams to tailor services and create smooth partner onboarding.",
        "Contribute market intelligence and product or reporting improvements based on customer and industry needs.",
      ],
      capabilities: ["Account management", "Partnerships", "Commercial negotiation", "Technical onboarding"],
    },
    {
      company: "Twilio",
      role: "Strategic Business Development Manager",
      period: "Jan 2022 - Mar 2023",
      summary: "Led strategic supplier negotiations, pricing, and long-tail provider optimisation across a global wholesale portfolio.",
      responsibilities: [
        "Managed strategic negotiations, supplier agreements, and risk analysis across wholesale partnerships.",
        "Owned sales-pipeline visibility and pricing strategy for commercial decision-making.",
        "Supported team growth through hiring, candidate screening, interviews, and mentoring.",
        "Designed a more cost-effective framework for managing long-tail providers.",
      ],
      capabilities: ["Business development", "Procurement", "Pricing strategy", "Team mentoring"],
    },
    {
      company: "Quiubas Mobile",
      role: "Routing and Product Manager",
      period: "Nov 2018 - Jan 2022",
      summary: "Connected commercial, market, and technical priorities to improve vendor onboarding, pricing, and platform delivery.",
      responsibilities: [
        "Managed end-to-end vendor onboarding from discovery through production readiness and risk management.",
        "Designed tailored commercial and technical solutions, including setup and pricing strategy.",
        "Acted as escalation point for advanced troubleshooting on key customer accounts.",
        "Supported platform development, master-pricing governance, and acquisition due-diligence work.",
      ],
      capabilities: ["Product management", "Routing", "Vendor onboarding", "Pricing"],
    },
    {
      company: "TeleSign",
      role: "Global Compliance & Global Enablement Specialist",
      period: "May 2017 - Nov 2018",
      summary: "Balanced regulatory, risk, product, and customer enablement priorities in a global communications business.",
      responsibilities: [
        "Assessed customer use cases against legal, regulatory, and compliance requirements.",
        "Performed risk-management, content-monitoring, and fraud-prevention activities.",
        "Collaborated with knowledge engineering on an AI-assisted phishing-blocking tool.",
        "Partnered with product and development teams on number-leasing functionality and top-tier client enablement.",
      ],
      capabilities: ["Compliance", "Risk management", "Customer enablement", "Product collaboration"],
    },
    {
      company: "Infobip",
      role: "Mobile Payments / Premium SMS - Partner Onboarding & Growth",
      period: "Mar 2013 - May 2017",
      summary: "Managed merchant launches, commercial growth, and partner relationships across mobile payments.",
      responsibilities: [
        "Managed end-to-end partner onboarding: API integration, testing, launch, and market rollout.",
        "Aligned product setup with carrier rules, local regulators, and communication authorities.",
        "Defined pricing and revenue-share models while balancing compliance, conversion, and commercial performance.",
        "Coordinated sales, technical, legal, and finance teams on payment integrations and merchant growth.",
      ],
      capabilities: ["Mobile payments", "Partner onboarding", "Regulatory alignment", "Cross-functional delivery"],
    },
  ] satisfies Experience[],
  education: [
    { title: "Bachelor — Management", detail: "Academic foundation", description: "Grounding in management principles, organisational thinking, and business practice." },
    { title: "Master — Project Risk Management", detail: "Academic specialisation", description: "Focused study of risk-aware planning, project decisions, and complex delivery environments." },
    { title: "Practical teaching", detail: "Lectures & workshops", description: "MS Project, project planning, business communication case studies, and hands-on work with students." },
  ] satisfies Education[],
  events: [
    { title: "International Youth Day", year: "2010", focus: "Community & education", description: "A community-facing initiative centred on young people, participation, and shared learning." },
    { title: "Language Courses for Students", year: "2011", focus: "Community & education", description: "Student-focused learning activities designed to make language practice more accessible and engaging." },
    { title: "The Belgrade Get Together", year: "2015", focus: "Execution & organisation", description: "Organising people, programme details, and on-the-day coordination to create a cohesive shared experience." },
    { title: "Liftit", year: "2016", focus: "Execution & organisation", description: "A delivery-led event project requiring practical planning, coordination, and attention to the participant experience." },
  ] satisfies Event[],
  languages: [
    { name: "Serbian", level: "Native" },
    { name: "English", level: "Advanced / Professional" },
    { name: "Dutch", level: "Ongoing B1" },
    { name: "Spanish", level: "A2" },
    { name: "German", level: "Basic" },
  ],
  // Edit project text and screenshot paths here. Add assets in the matching
  // public/images/ai-projects/<project>/ folder, then run `npm run build`.
  projects: [
    {
      id: "decision-making",
      title: "Decision Making Tool",
      status: "Live project",
      role: "Coded by me / AI-assisted builder",
      shortDescription: "A structured tool for comparing options, criteria and trade-offs before making a decision.",
      problem: "Important decisions are often made through scattered notes, subjective impressions and undocumented trade-offs.",
      workflow: ["Define the decision", "Add options and criteria", "Compare trade-offs", "Generate structured recommendation", "Review reasoning and final output"],
      outcome: "Demonstrates practical use of AI and structured workflows for clearer decision-making.",
      tags: ["Python", "Streamlit", "AI/LLM", "Decision Support"],
      screenshots: [
        "/images/ai-projects/decision-making/01-main.png",
        "/images/ai-projects/decision-making/02-workflow.png",
        "/images/ai-projects/decision-making/03-output.png",
      ],
      accent: "violet",
      productStory: {
        animationType: "decision",
        steps: [
          { label: "Decision input", input: "Should I eat pizza or burger?" },
          { label: "Criteria", meta: ["Time", "Cost", "Health", "Mood"] },
          { label: "Analysis", loadingText: "Analyzing trade-offs..." },
          { label: "Recommendation", output: "Burger wins for speed. Pizza wins for sharing." },
          { label: "Decision summary", output: "Recommendation depends on whether convenience or social value matters more." },
        ],
      },
    },
    {
      id: "energy-optimizer",
      title: "Energy Usage Optimizer",
      status: "Live project",
      role: "Coded by me / AI-assisted builder",
      shortDescription: "A home energy optimization tool built around household usage patterns and practical recommendations.",
      problem: "Raw energy data is difficult to interpret and rarely tells a household what to do next.",
      workflow: ["Collect household energy inputs", "Analyse consumption patterns", "Compare usage behavior", "Generate practical recommendations", "Track possible improvements"],
      outcome: "Demonstrates how data, automation and AI-assisted analysis can turn household energy usage into actionable advice.",
      tags: ["Python", "FastAPI", "Streamlit", "Docker", "AI/LLM"],
      screenshots: [
        "/images/ai-projects/energy-optimizer/01-main.png",
        "/images/ai-projects/energy-optimizer/02-patterns.png",
        "/images/ai-projects/energy-optimizer/03-recommendations.png",
      ],
      accent: "emerald",
      productStory: {
        animationType: "energy",
        steps: [
          { label: "Story setup", input: "Walkthrough content to be added." },
          { label: "Preview preparation", loadingText: "Preparing product story..." },
          { label: "Story status", output: "A guided workflow will be added here." },
        ],
      },
    },
    {
      id: "cv-optimizer",
      title: "CV Optimizer / Interview Prep",
      status: "Live project",
      role: "Product owner / workflow designer / task reviewer",
      shortDescription: "A structured AI workflow for tailoring a CV to a job description and generating interview preparation materials.",
      problem: "Manual CV tailoring is slow, inconsistent and risky when AI is allowed to invent experience.",
      workflow: ["Upload or provide CV content", "Validate extracted candidate facts", "Compare against job description", "Generate tailored CV output", "Generate interview preparation questions"],
      outcome: "Demonstrates validation-first AI workflow design and controlled use of AI for career tooling.",
      tags: ["Python", "Streamlit", "AI/LLM", "Validation", "PDF"],
      screenshots: [
        "/images/ai-projects/cv-optimizer/01-main.png",
        "/images/ai-projects/cv-optimizer/02-validation.png",
        "/images/ai-projects/cv-optimizer/03-prep.png",
      ],
      accent: "blue",
      productStory: {
        animationType: "cv",
        steps: [
          { label: "Story setup", input: "Walkthrough content to be added." },
          { label: "Preview preparation", loadingText: "Preparing product story..." },
          { label: "Story status", output: "A guided workflow will be added here." },
        ],
      },
    },
    {
      id: "commercial-cv",
      title: "Commercial CV Optimizer",
      status: "Local demo",
      role: "Product owner / system designer / Codex-led implementation",
      shortDescription: "A commercialized version of the CV optimization workflow with secure intake, validation and structured delivery.",
      problem: "Turning a personal AI tool into a reusable commercial workflow requires stricter validation, safer intake and clearer output structure.",
      workflow: ["Validate uploaded CV", "Validate job description", "Run structured AI extraction", "Generate tailored CV", "Validate output and prepare delivery"],
      outcome: "Demonstrates productization of an AI workflow, including security, validation and delivery thinking.",
      tags: ["FastAPI", "Python", "AI/LLM", "PDF", "Validation"],
      screenshots: [
        "/images/ai-projects/commercial-cv/01-main.png",
        "/images/ai-projects/commercial-cv/02-validation.png",
        "/images/ai-projects/commercial-cv/03-delivery.png",
      ],
      accent: "amber",
      productStory: {
        animationType: "cv",
        steps: [
          { label: "Story setup", input: "Walkthrough content to be added." },
          { label: "Preview preparation", loadingText: "Preparing product story..." },
          { label: "Story status", output: "A guided workflow will be added here." },
        ],
      },
    },
    {
      id: "dental-trip-savings",
      title: "Dental Trip Savings",
      status: "Local demo",
      role: "Product owner / system designer / Codex-led implementation",
      shortDescription: "A calculator-style product for estimating potential dental treatment savings across destination options.",
      problem: "People considering dental travel need a simple way to compare estimated treatment, travel and accommodation costs before going deeper.",
      workflow: ["Select departure location", "Select treatment type", "Compare destination options", "Estimate travel and treatment costs", "Generate a short savings report"],
      outcome: "Demonstrates product thinking around comparison workflows, public-facing reports and decision support.",
      tags: ["Next.js", "FastAPI", "Python", "PDF Report", "AI/LLM"],
      screenshots: [
        "/images/ai-projects/dental-trip-savings/01-main.png",
        "/images/ai-projects/dental-trip-savings/02-comparison.png",
        "/images/ai-projects/dental-trip-savings/03-report.png",
      ],
      accent: "rose",
      productStory: {
        animationType: "comparison",
        steps: [
          { label: "Story setup", input: "Walkthrough content to be added." },
          { label: "Preview preparation", loadingText: "Preparing product story..." },
          { label: "Story status", output: "A guided workflow will be added here." },
        ],
      },
    },
    {
      id: "seo-automation",
      title: "SEO Automation Tool",
      status: "Local demo",
      role: "Product owner / workflow designer / Codex-led implementation",
      shortDescription: "A reusable workflow for SEO research, keyword planning, topic strategy and article brief generation.",
      problem: "SEO research becomes repetitive when multiple product ideas require similar keyword and content planning workflows.",
      workflow: ["Define project dataset", "Collect keyword inputs", "Run SERP and topic research", "Generate topic strategy", "Create structured article brief"],
      outcome: "Demonstrates reusable workflow design for content research, SEO planning and AI-assisted brief generation.",
      tags: ["Python", "Google APIs", "SERP Research", "AI/LLM", "Automation"],
      screenshots: [
        "/images/ai-projects/seo-automation/01-main.png",
        "/images/ai-projects/seo-automation/02-research.png",
        "/images/ai-projects/seo-automation/03-brief.png",
      ],
      accent: "cyan",
      productStory: {
        animationType: "seo",
        steps: [
          { label: "Story setup", input: "Walkthrough content to be added." },
          { label: "Preview preparation", loadingText: "Preparing product story..." },
          { label: "Story status", output: "A guided workflow will be added here." },
        ],
      },
    },
  ] satisfies Project[],
  // Add one or more photos to each matching folder. A single image works too.
  hobbies: [
    {
      title: "Diving",
      label: "Below the surface",
      description: "A reset in blue: focus, calm, and the curiosity to keep exploring.",
      images: [
        "/images/hobbies/diving/diving-01.jpg",
        "/images/hobbies/diving/diving-02.jpg",
        "/images/hobbies/diving/diving-03.jpg",
      ],
    },
    {
      title: "DIY & Woodworking",
      label: "Making by hand",
      description: "A practical counterbalance to screen work — planning, building, and refining tangible things.",
      images: [
        "/images/hobbies/woodworking/woodworking-01.jpg",
        "/images/hobbies/woodworking/woodworking-02.jpg",
        "/images/hobbies/woodworking/woodworking-03.jpg",
      ],
    },
  ] satisfies Hobby[],
  footer: "© 2026 Aleksandar Marković.",
};
