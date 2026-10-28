import avatarImg from './assets/avatar.jpg';
import toxicguardImg from './assets/toxicguard.jpg';
import kamuicloudImg from './assets/kamuicloud.jpg';
import moneypayImg from './assets/moneypay.jpg';
import cineboxImg from './assets/cinebox.jpg';

export const portfolioData = {
  personal: {
    brand: "HARSHIT.DEV",
    name: "Harshit Raj",
    title: "Creative Developer & Aspiring Cloud Engineer",
    degree: "B.Tech in Computer Science Engineering",
    tagline: "Exploring the intersection of interactive web experiences, software engineering, and cloud infrastructure.",
    heroHeadline: {
      line1: "ENGINEERING",
      line2: "THE NEXT",
      line3: "DIGITAL FRONTIER."
    },
    heroSubtext: "I'm Harshit Raj — a developer exploring the intersection of interactive web experiences, software engineering, and cloud infrastructure.",
    avatar: avatarImg,
    status: {
      available: true,
      label: "AVAILABLE FOR ROLES & COLLABS",
      badge: "Open to Internships & Junior Roles"
    },
    location: "India · IST (UTC+5:30)",
    country: "India",
    timezone: "Asia/Kolkata",
    email: "harshitraj.dev@gmail.com",
    github: "https://github.com/HarshitRaj31",
    linkedin: "https://www.linkedin.com/in/harshit-raj-a76b93329/",
    principles: [
      {
        number: "01",
        title: "Build with purpose.",
        description: "Writing maintainable, scalable code designed to solve genuine friction in user and developer workflows."
      },
      {
        number: "02",
        title: "Learn by experimenting.",
        description: "From low-level Linux systems and Go networking to experimental web aesthetics, curiosity drives mastery."
      },
      {
        number: "03",
        title: "Make technology useful.",
        description: "Bridging visually compelling user interfaces with resilient, self-hosted and cloud-native infrastructure."
      }
    ]
  },

  projects: [
    {
      id: "toxicguard",
      num: "01",
      title: "ToxicGuard",
      category: "AI / ML & Text Moderation",
      year: "2025",
      headline: "AI-Powered Toxic Speech Detection for Safer Digital Spaces",
      summary: "A toxic speech detection system focused on safer digital communication.",
      description: "A sophisticated text-analysis interface featuring real-time natural language sentiment processing, contextual sentence moderation flags, toxicity category breakdowns (aggression, insult, profanity), and an elegant dark analytical console.",
      image: toxicguardImg,
      technologies: ["React", "API Integration", "AI/ML", "JavaScript (ES6+)", "CSS Architecture"],
      accentColor: "#36D9F5",
      githubUrl: "https://github.com/HarshitRaj31",
      demoUrl: "https://github.com/HarshitRaj31",
      demoPlaceholder: true,
      features: [
        "Real-time safety scoring algorithm analyzing toxic speech patterns",
        "Granular toxicity breakdown measuring aggression, insult, hate speech, and profanity",
        "Contextual highlighted text alerts with instant moderation recommendations",
        "High-performance analytical dashboard designed with deep black minimalism"
      ],
      visualAspect: "Dark analytical UI with highlighted text flags & moderation gauges"
    },
    {
      id: "kamui-cloud",
      num: "02",
      title: "Kamui Cloud",
      category: "Cloud Infrastructure & Systems",
      year: "2025",
      headline: "Open-Source Private Cloud & Self-Hosted Topology",
      summary: "An open-source private cloud project exploring self-hosted infrastructure using available hardware.",
      description: "Exploring bare-metal infrastructure orchestration by connecting distributed consumer hardware into a resilient self-hosted private cloud. Includes abstract server topology visualization, interconnected node clusters, live telemetry feeds, and container runtime orchestration.",
      image: kamuicloudImg,
      technologies: ["Go", "Docker", "Linux", "Cloud Infrastructure", "Networking"],
      accentColor: "#477BFF",
      githubUrl: "https://github.com/HarshitRaj31",
      demoUrl: "https://github.com/HarshitRaj31",
      demoPlaceholder: true,
      features: [
        "Distributed node topology mapping with dynamic mesh telemetry",
        "Containerized workload scheduling using custom Go runtime hooks and Docker",
        "Real-time Linux kernel resource metrics (CPU, RAM, disk I/O, network traffic)",
        "Self-healing architecture designed for affordable commodity and hobbyist hardware"
      ],
      visualAspect: "Interconnected server topology nodes, terminal window logs, and kernel metrics"
    },
    {
      id: "moneypay",
      num: "03",
      title: "MoneyPay",
      category: "Fintech & Web Applications",
      year: "2024",
      headline: "Minimalist High-Fidelity Digital Transaction & P2P Engine",
      summary: "A modern payment-oriented web application.",
      description: "An intuitive financial management and peer-to-peer transaction interface. Emphasizes clean cryptographic security cues, real-time balance tracking, cash-flow trend analytics, and a friction-free payment workflow with frosted glass card styling.",
      image: moneypayImg,
      technologies: ["React", "Node.js", "APIs", "Payment Integration", "Modern CSS"],
      accentColor: "#36D9F5",
      githubUrl: "https://github.com/HarshitRaj31",
      demoUrl: "https://github.com/HarshitRaj31",
      demoPlaceholder: true,
      features: [
        "Interactive virtual card presentation with instant freeze and CVV preview states",
        "Real-time cash-flow data visualization and monthly expenditure breakdown",
        "Frictionless P2P quick-transfer modal with recipient validation checks",
        "End-to-end encrypted transaction flow simulation and audit logging"
      ],
      visualAspect: "Minimal transaction interface, translucent card preview, and financial charts"
    },
    {
      id: "cinebox",
      num: "04",
      title: "Cinebox",
      category: "Media Discovery & Entertainment",
      year: "2024",
      headline: "Cinematic Movie Discovery & Interactive Ticket Reservation",
      summary: "A movie discovery and ticket-booking application.",
      description: "An editorial cinema platform celebrating dramatic film art direction. Combines rich movie metadata discovery, dynamic video trailer previews, showtime selectors, and an interactive grid-based auditorium seat reservation interface.",
      image: cineboxImg,
      technologies: ["React", "Vite", "React Router", "REST APIs", "CSS Grid"],
      accentColor: "#477BFF",
      githubUrl: "https://github.com/HarshitRaj31",
      demoUrl: "https://github.com/HarshitRaj31",
      demoPlaceholder: true,
      features: [
        "Curated cinematic catalog with immersive hero previews and high-fidelity poster art",
        "Interactive SVG/Grid theater seating selector with live seat reservation states",
        "Dynamic showtime scheduler with format filters (2D, 3D, Laser)",
        "Fluid client-side navigation powered by React Router and Vite optimization"
      ],
      visualAspect: "Cinematic movie artwork, dramatic typography, and seat reservation grid"
    }
  ],

  skillsGrouped: [
    {
      category: "FRONTEND",
      desc: "User interfaces, responsive systems & client architecture",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "BACKEND",
      desc: "Server-side logic, routing, auth & service APIs",
      technologies: ["Node.js", "Express.js", "REST APIs", "JWT"]
    },
    {
      category: "DATABASES",
      desc: "Data models, document persistence & relational querying",
      technologies: ["MongoDB", "MySQL"]
    },
    {
      category: "INFRASTRUCTURE",
      desc: "Systems, container orchestration & cloud engineering",
      technologies: ["Go", "Docker", "Linux", "Git", "GitHub"]
    }
  ],

  cloudSection: {
    badge: "SYSTEM ARCHITECTURE & OPEN SOURCE",
    headline: "NOT JUST INTERFACES. SYSTEMS THAT POWER THEM.",
    intro: "While I craft thoughtful, polished browser experiences, my deeper engineering passion lives in the layers beneath: self-hosted private clouds, distributed systems, Linux kernel internals, and containerization with Docker and Go.",
    kamuiHighlight: {
      title: "Kamui Cloud — Self-Hosted Infrastructure",
      subtitle: "Reclaiming sovereignty through bare-metal homelab computing",
      description: "Born out of curiosity about how AWS and GCP orchestrate physical machines, Kamui Cloud is an experimental project exploring how standard consumer hardware can be transformed into a cohesive, self-healing private cloud cluster.",
      github: "https://github.com/HarshitRaj31",
      pillars: [
        { title: "Go Networking", desc: "Low-overhead services communicating via custom TCP/HTTP channels." },
        { title: "Container Daemon", desc: "Isolated micro-workloads running via Docker daemon orchestration." },
        { title: "Linux SysAdmin", desc: "Systemd daemon management, iptables firewalling, and kernel telemetry." },
        { title: "Node Resilience", desc: "Automated failover monitoring across interconnected local nodes." }
      ]
    }
  },

  journey: [
    {
      year: "2025 — Present",
      phase: "Cloud Infrastructure & Distributed Systems",
      title: "Exploring Go, Linux, Docker & Cloud Architecture",
      description: "Venturing beyond frontend applications into systems engineering. Building Kamui Cloud, orchestrating containerized microservices, writing concurrent Go routines, and automating Linux server environments.",
      tag: "Systems & Infrastructure"
    },
    {
      year: "2024 — 2025",
      phase: "Full-Stack Development & Open Source",
      title: "Collaborative Software Development & Modern Web",
      description: "Deepened engineering foundation building full-stack web applications like MoneyPay and ToxicGuard. Mastered component lifecycle, state synchronization, RESTful API integrations, and open-source contribution practices.",
      tag: "Full-Stack Engineering"
    },
    {
      year: "2023 — 2024",
      phase: "Frontend Architecture & UI Craft",
      title: "Web Development Projects & Creative Interfaces",
      description: "Built dozens of interactive web interfaces exploring semantic HTML5, modern CSS layouts (Flexbox, Grid, animations), vanilla JavaScript fundamentals, and modern React architectures.",
      tag: "Creative Web"
    },
    {
      year: "2023 — Present",
      phase: "Academic Foundation",
      title: "Computer Science Engineering Studies (B.Tech CSE)",
      description: "Undergraduate Computer Science curriculum focusing on Data Structures & Algorithms, Object-Oriented Programming, Computer Networks, Operating Systems, and Database Management Systems.",
      tag: "B.Tech CSE"
    }
  ]
};
