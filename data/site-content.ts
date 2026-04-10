export const siteContent = {
  nav: {
    brand: "RECLAIM",
    links: [
      { label: "Outcomes", href: "#outcomes" },
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "ROI", href: "#roi" },
      { label: "About us", href: "#about-us" }
    ],
    primaryCta: { label: "Book a demo", href: "#book-demo" }
  },
  hero: {
    eyebrow: "Built for engineering teams",
    title: "Less busywork. More billable hours.",
    description:
      "Reclaim. helps engineering firms save time on reports, presentations, and project updates so technical teams can focus on client work instead of repetitive document-heavy tasks.",
    primaryCta: { label: "Book a demo", href: "#book-demo" },
    secondaryCta: { label: "See how it works", href: "#how-it-works" },
    proofPoints: [
      "Report reviews in minutes, not hours",
      "Presentations aligned to company style",
      "Cleaner updates across every project"
    ]
  },
  problem: {
    eyebrow: "The bottleneck",
    title: "Engineering teams are losing high-value time to repetitive knowledge work.",
    description:
      "Project delivery slows down when senior people spend too many hours pulling signal out of long documents, rebuilding the same decks, and rewriting updates for different stakeholders.",
    painPoints: [
      "Reading long reports",
      "Building presentations from scratch",
      "Rewriting project updates"
    ]
  },
  outcomes: {
    eyebrow: "The result",
    title: "Sharper output with more capacity back in the week.",
    description:
      "Reclaim. reduces the drag around documentation and communication so firms can move faster without sacrificing consistency.",
    items: [
      {
        title: "Faster report reviews",
        description: "Surface key technical findings, risks, and actions without wading through every page line by line."
      },
      {
        title: "Presentations in company style",
        description: "Turn raw project material into polished deck-ready structure that matches your internal standards."
      },
      {
        title: "Cleaner project communication",
        description: "Keep clients and internal teams aligned with updates that are concise, clear, and consistently formatted."
      },
      {
        title: "More billable capacity",
        description: "Free up experienced engineers for delivery work, cross-project support, and higher-value client conversations."
      }
    ]
  },
  features: {
    eyebrow: "Core products",
    title: "Four focused workflows built around document-heavy engineering work.",
    description:
      "Each workflow is designed to cut repeat effort while keeping outputs technically credible and brand-ready.",
    items: [
      {
        title: "Report Summarizer",
        description: "Condense technical reports into the key decisions, risks, and next steps teams actually need."
      },
      {
        title: "Presentation Generator",
        description: "Turn source material into structured presentations for internal reviews, client updates, and commercial meetings."
      },
      {
        title: "Brand Kit",
        description: "Apply company house style, terminology, tone, and templates so every output looks consistent across teams."
      },
      {
        title: "Project Update Generator",
        description: "Create concise, stakeholder-ready progress updates without rewriting the same project story every week."
      }
    ]
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "Simple inputs. Faster outputs. Consistent delivery.",
    steps: [
      {
        step: "01",
        title: "Upload or paste technical input",
        description: "Bring in reports, notes, raw project material, or draft updates from the tools your team already uses."
      },
      {
        step: "02",
        title: "Reclaim. structures and simplifies it",
        description: "The platform extracts the signal, organizes the content, and prepares it for the task at hand."
      },
      {
        step: "03",
        title: "Teams output faster in their own style",
        description: "Deliver polished summaries, decks, and updates that stay aligned to your company standards."
      }
    ]
  },
  roi: {
    eyebrow: "Business impact",
    title: "Less friction around documentation creates measurable commercial upside.",
    metrics: [
      { value: "Less busywork", label: "Reduce repetitive admin around reports, slides, and updates." },
      { value: "More project capacity", label: "Open up time for more parallel work across teams and clients." },
      { value: "More billable hours", label: "Shift senior time back into revenue-generating delivery." },
      { value: "More consistent output", label: "Raise quality and formatting consistency across every project touchpoint." }
    ]
  },
  aboutUs: {
    eyebrow: "About us",
    title: "Built by engineers, for engineers.",
    description:
      "Reclaim. was founded by a team that spent years inside engineering consultancies watching senior talent burn hours on slide decks, report rewrites, and status updates. We built the tool we wished we had.",
    values: [
      {
        title: "Engineering-first",
        description: "We understand technical work because we've done it. Every feature is designed around real engineering workflows, not generic productivity."
      },
      {
        title: "Output over activity",
        description: "We measure success by the quality of what your team ships, not how many buttons they click. Less noise, more signal."
      },
      {
        title: "Consistency at scale",
        description: "From a five-person studio to a 500-person consultancy, every document should look and read like it came from the same firm."
      }
    ]
  },
  cta: {
    title: "Reclaim. more billable hours.",
    description:
      "Show your team how to cut document-heavy busywork without changing how engineering work gets done.",
    button: { label: "Book a demo", href: "#book-demo" }
  },
  footer: {
    brand: "RECLAIM",
    description: "Less busywork. More billable hours.",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "About us", href: "#about-us" },
      { label: "Book a demo", href: "#book-demo" }
    ]
  }
} as const;
