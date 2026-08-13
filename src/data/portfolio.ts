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
  id: string;
  title: string;
  year: string;
  location: string;
  role: string;
  category: string;
  shortDescription: string;
  context: string;
  contribution: string[];
  outcome: string;
  demonstrates: string[];
  images: string[];
};

export type ProductStoryStep = {
  label: string;
  input?: string;
  loadingText?: string;
  loadingDetail?: string;
  output?: string;
  meta?: string[];
  finalNote?: string;
};

export type ProductStory = {
  animationType: "decision" | "energy" | "cv" | "commercial-cv" | "comparison" | "seo";
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
  coverImage: string;
  coverSupportingImages: [string, string];
  coverSupportingLabels: [string, string];
  coverSupportingDetails: [string, string];
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
    {
      id: "international-youth-day-2010",
      title: "International Youth Day",
      year: "2010",
      location: "Belgrade",
      role: "Contributor / youth event support",
      category: "Youth / Community Initiative",
      shortDescription: "Contributed to youth-focused activities in Belgrade during the International Year of Youth.",
      context: "International Youth Day 2010 took place during the United Nations International Year of Youth, with a broader focus on dialogue, participation and social inclusion.",
      contribution: ["Supported youth-focused public activities in Belgrade", "Contributed as part of the wider organizing effort", "Helped with practical event/community execution"],
      outcome: "A community-oriented youth event experience connected to public participation, coordination and youth engagement.",
      demonstrates: ["Community involvement", "Event support", "Youth-focused programming", "Practical coordination"],
      images: [],
    },
    {
      id: "language-courses-2011",
      title: "Language Courses for Young People",
      year: "2011",
      location: "Belgrade",
      role: "Organizer / project support",
      category: "Education Initiative",
      shortDescription: "Helped organize language courses for young people in cooperation with Equilibrio language school.",
      context: "A youth education initiative focused on practical language learning and access to structured courses.",
      contribution: ["Helped coordinate the course initiative", "Supported cooperation with Equilibrio language school", "Contributed to practical organization and student-facing delivery"],
      outcome: "An education-focused project experience combining youth work, coordination and practical learning.",
      demonstrates: ["Education project coordination", "Partner cooperation", "Youth learning support", "Practical organization"],
      images: [],
    },
    {
      id: "belgrade-get-together-2015",
      title: "The Belgrade Get Together",
      year: "2015",
      location: "Belgrade",
      role: "Lead organizer",
      category: "Independent Event",
      shortDescription: "Led the organization and delivery of a networking-style event in Belgrade.",
      context: "A self-led event project focused on bringing people together through planning, logistics, communication and execution.",
      contribution: ["Led planning and coordination", "Handled practical logistics", "Coordinated people and event flow", "Owned execution from preparation to delivery"],
      outcome: "A hands-on event leadership experience showing end-to-end ownership and delivery.",
      demonstrates: ["Event ownership", "Logistics", "Stakeholder coordination", "Execution under pressure"],
      images: [],
    },
    {
      id: "liftit-2016",
      title: "Liftit",
      year: "2016",
      location: "Belgrade",
      role: "Lead organizer",
      category: "Independent Event",
      shortDescription: "Led the organization and practical delivery of Liftit 2016.",
      context: "A self-led event project requiring planning, coordination, logistics and execution.",
      contribution: ["Owned event preparation", "Managed logistics and coordination", "Handled practical execution details", "Drove the event from concept to delivery"],
      outcome: "A lead-organizer experience demonstrating planning, responsibility and hands-on delivery.",
      demonstrates: ["Leadership", "Planning", "Execution", "Event operations"],
      images: [],
    },
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
      shortDescription: "A structured tool that turns unstructured decision problems into goals, constraints, options, pros and cons, next steps and a quality/category signal.",
      problem: "Important decisions are often made through scattered notes, subjective impressions and undocumented trade-offs.",
      workflow: ["Raw decision input", "Goal extraction", "Constraints", "Options", "Pros & cons", "Next steps + quality/category signal"],
      outcome: "Demonstrates practical use of AI and structured workflows for clearer decision-making.",
      tags: ["Python", "Streamlit", "AI/LLM", "Decision Support"],
      coverImage: "/images/ai-projects/decision-making/cover.svg",
      coverSupportingImages: ["/images/ai-projects/decision-making/workflow.svg", "/images/ai-projects/decision-making/output.svg"],
      coverSupportingLabels: ["Structure the decision", "Options & next steps"],
      coverSupportingDetails: ["Goal, constraints and options", "Pros / cons ready to review"],
      screenshots: [
        "/images/ai-projects/decision-making/01-main.png",
        "/images/ai-projects/decision-making/02-workflow.png",
        "/images/ai-projects/decision-making/03-output.png",
      ],
      accent: "violet",
      productStory: {
        animationType: "decision",
        steps: [
          { label: "Raw decision input", input: "Should I keep my current phone or buy a new one?" },
          { label: "Goal extraction", loadingText: "Extracting the decision goal...", loadingDetail: "Turning the question into a clear outcome to work toward." },
          { label: "Constraints", meta: ["Goal: choose a reliable phone", "Budget-aware", "Avoid a long setup"] },
          { label: "Options", meta: ["Keep current phone", "Buy a new phone"] },
          { label: "Pros & cons", output: "Keep: lower immediate cost. Buy: fresh battery and warranty." },
          { label: "Next steps + quality/category signal", output: "Check battery health and replacement prices. Category: constrained; quality: ready to review.", finalNote: "Synthetic portfolio walkthrough" },
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
      coverImage: "/images/ai-projects/energy-optimizer/cover.svg",
      coverSupportingImages: ["/images/ai-projects/energy-optimizer/workflow.svg", "/images/ai-projects/energy-optimizer/output.svg"],
      coverSupportingLabels: ["Forecast & meter inputs", "Top solar windows"],
      coverSupportingDetails: ["Weather · P1 meter · inverter", "12:00–15:00 · risk low"],
      screenshots: [
        "/images/ai-projects/energy-optimizer/01-main.png",
        "/images/ai-projects/energy-optimizer/02-patterns.png",
        "/images/ai-projects/energy-optimizer/03-recommendations.png",
      ],
      accent: "emerald",
      productStory: {
        animationType: "energy",
        steps: [
          { label: "Weather forecast", input: "Tomorrow: a clear, high-solar midday forecast." },
          { label: "P1 meter reading", meta: ["Grid status: exporting", "Household load: low", "Live reading received"] },
          { label: "Inverter reading", meta: ["Solar production: rising", "Inverter status: available", "Forecast and readings aligned"] },
          { label: "Optimize windows", loadingText: "Scoring productive solar windows...", loadingDetail: "Deterministic logic ranks the top three windows; AI does not control devices." },
          { label: "Top 3 windows", output: "Best times to use flexible appliances: late morning, midday and early afternoon." },
          { label: "AI explanation", output: "Use the strongest window for flexible appliances, then check the forecast before starting." },
          { label: "Daily notification", output: "Tomorrow’s three best solar windows are ready.", meta: ["Gmail · notification ready", "Telegram-style · future / optional"], finalNote: "Synthetic portfolio walkthrough" },
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
      coverImage: "/images/ai-projects/cv-optimizer/cover.svg",
      coverSupportingImages: ["/images/ai-projects/cv-optimizer/workflow.svg", "/images/ai-projects/cv-optimizer/output.svg"],
      coverSupportingLabels: ["CV fit assessment", "Interview & PDF output"],
      coverSupportingDetails: ["Facts stay grounded in the CV", "Evidence-led questions · PDF ready"],
      screenshots: [
        "/images/ai-projects/cv-optimizer/01-main.png",
        "/images/ai-projects/cv-optimizer/02-validation.png",
        "/images/ai-projects/cv-optimizer/03-prep.png",
      ],
      accent: "blue",
      productStory: {
        animationType: "commercial-cv",
        steps: [
          { label: "Candidate CV", input: "Sample profile selected: partnerships and operations." },
          { label: "Job description", input: "Role brief pasted: strategic partnerships manager." },
          { label: "Fit assessment", loadingText: "Checking the role against documented experience...", loadingDetail: "Sample result: solid fit, with one preference to discuss honestly." },
          { label: "CV tailoring", output: "Summary and priorities are refined while every claim stays grounded in the CV." },
          { label: "Company research", output: "Supporting research surfaces market context, recent signals and questions to verify." },
          { label: "Interview prep", meta: ["Likely interviewer questions", "Candidate questions to ask", "Evidence-led talking points"] },
          { label: "PDF output", output: "Accepted CV is prepared as a reviewable PDF.", finalNote: "Synthetic portfolio walkthrough" },
        ],
      },
    },
    {
      id: "commercial-cv",
      title: "CV Optimizer — GTM Prototype",
      status: "Local demo",
      role: "Product owner / system designer / Codex-led implementation",
      shortDescription: "A go-to-market prototype for a validation-led CV tailoring workflow with structured temporary delivery.",
      problem: "Testing a reusable CV workflow requires stricter validation, safer intake and clearer delivery than a personal prototype.",
      workflow: ["Validate uploaded CV", "Validate job description", "Run structured AI extraction", "Generate tailored CV", "Validate output and prepare delivery"],
      outcome: "Demonstrates productization of an AI workflow, including security, validation and delivery thinking.",
      tags: ["FastAPI", "Python", "AI/LLM", "PDF", "Validation"],
      coverImage: "/images/ai-projects/commercial-cv/cover.svg",
      coverSupportingImages: ["/images/ai-projects/commercial-cv/workflow.svg", "/images/ai-projects/commercial-cv/output.svg"],
      coverSupportingLabels: ["Validate CV & role brief", "Grounded PDF delivery"],
      coverSupportingDetails: ["Secure intake before tailoring", "Validation passed · single-use file"],
      screenshots: [
        "/images/ai-projects/commercial-cv/01-main.png",
        "/images/ai-projects/commercial-cv/02-validation.png",
        "/images/ai-projects/commercial-cv/03-delivery.png",
      ],
      accent: "amber",
      productStory: {
        animationType: "cv",
        steps: [
          { label: "Secure CV intake", input: "Sample PDF or DOCX CV uploaded for validation." },
          { label: "Job description check", input: "Pasted role brief passes format and safety checks." },
          { label: "Stage 1: structure", loadingText: "Structuring validated CV facts...", loadingDetail: "The workflow uses temporary, request-scoped source data." },
          { label: "Stage 2: tailor", loadingText: "Tailoring the CV against the role brief...", loadingDetail: "Wording may change, but source facts remain the evidence base." },
          { label: "Grounding check", output: "Output validation passed: claims match the supplied CV evidence." },
          { label: "Temporary PDF", output: "A protected, temporary PDF download is prepared.", finalNote: "Synthetic portfolio walkthrough" },
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
      coverImage: "/images/ai-projects/dental-trip-savings/cover.svg",
      coverSupportingImages: ["/images/ai-projects/dental-trip-savings/workflow.svg", "/images/ai-projects/dental-trip-savings/output.svg"],
      coverSupportingLabels: ["Trip estimate inputs", "Comparison report"],
      coverSupportingDetails: ["JFK · single dental implant", "Cheapest · easiest · best overall"],
      screenshots: [
        "/images/ai-projects/dental-trip-savings/01-main.png",
        "/images/ai-projects/dental-trip-savings/02-comparison.png",
        "/images/ai-projects/dental-trip-savings/03-report.png",
      ],
      accent: "rose",
      productStory: {
        animationType: "comparison",
        steps: [
          { label: "Departure airport", input: "US departure airport selected: New York (JFK)." },
          { label: "Fixed treatment", input: "Treatment: Single dental implant." },
          { label: "Destination options", meta: ["Mexico City", "Budapest", "Belgrade"] },
          { label: "Estimate totals", loadingText: "Combining clinic, cached flight and accommodation estimates...", loadingDetail: "Source-backed estimates are combined; no live booking or medical advice." },
          { label: "Compare options", meta: ["Cheapest estimated trip", "Easiest trip", "Best overall"], output: "See the cheapest estimated trip, easiest trip and best overall option." },
          { label: "Savings report", output: "PDF-style report: estimated total cost from and potential savings from.", finalNote: "Informational synthetic walkthrough — not medical advice" },
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
      coverImage: "/images/ai-projects/seo-automation/cover.svg",
      coverSupportingImages: ["/images/ai-projects/seo-automation/workflow.svg", "/images/ai-projects/seo-automation/output.svg"],
      coverSupportingLabels: ["Keyword & SERP evidence", "Topic strategy output"],
      coverSupportingDetails: ["Seeds · CSV import · SERP research", "Human selected · brief generated"],
      screenshots: [
        "/images/ai-projects/seo-automation/01-main.png",
        "/images/ai-projects/seo-automation/02-research.png",
        "/images/ai-projects/seo-automation/03-brief.png",
      ],
      accent: "cyan",
      productStory: {
        animationType: "seo",
        steps: [
          { label: "Project dataset", input: "Sample project dataset selected: approved public product facts." },
          { label: "Keyword evidence", meta: ["Seed topics prepared", "Keyword Planner CSV imported", "Metrics remain evidence only"] },
          { label: "SERP research", loadingText: "Collecting bounded SERP evidence...", loadingDetail: "Source references and search patterns are gathered before strategy work." },
          { label: "AI topic strategy", meta: ["Evidence reviewed", "Opportunities ranked", "Human review next"], output: "Source-backed topic opportunities are ranked from the available evidence." },
          { label: "Human selection", meta: ["Owner selects one topic", "Brief uses approved evidence", "No automatic publishing"] },
          { label: "Brief & article workflow", meta: ["Selected topic", "SEO brief", "Reviewable draft"], output: "Selected topic becomes an SEO brief and reviewable draft; the workflow stops before publishing.", finalNote: "Synthetic portfolio walkthrough" },
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
