import toxicguardImg from './assets/toxicguard.jpg';
import kamuicloudImg from './assets/kamuicloud.jpg';
import moneypayImg from './assets/moneypay.jpg';
import cineboxImg from './assets/cinebox.jpg';

export const portfolioData = {
  personal: {
    brand: "HARSHIT.DEV",
    name: "Harshit Raj",
    title: "B.Tech CSE Student · Web Developer & Aspiring Cloud Engineer",
    degree: "B.Tech in Computer Science & Engineering (2023–2027)",
    tagline: "Undergraduate Computer Science student learning by building interactive web applications and exploring Linux, Docker, and cloud infrastructure.",
    heroKicker: "India · IST (UTC+5:30) · B.Tech CSE Undergraduate",
    heroHeadline: "Learning by Building Interactive Web Apps & Exploring Cloud Systems.",
    heroSubtext: "I am Harshit Raj — an undergraduate Computer Science Engineering student passionate about full-stack web development, Linux systems, Docker containerization, and self-hosted cloud experiments.",
    statusLabel: "Open to Software & Cloud Engineering Internships, Hackathons & Entry-Level Roles",
    location: "India · IST (UTC+5:30)",
    country: "India",
    timezone: "Asia/Kolkata",
    email: "harshitraj.dev@gmail.com",
    github: "https://github.com/HarshitRaj31",
    linkedin: "https://www.linkedin.com/in/harshit-raj-a76b93329/",
    metrics: [
      {
        value: "B.Tech CSE",
        unit: "2023–2027",
        label: "Computer Science Undergraduate",
        detail: "Coursework in Data Structures & Algorithms, Operating Systems, Computer Networks & DBMS"
      },
      {
        value: "04",
        unit: "Student Builds",
        label: "Hands-On Software Projects",
        detail: "Self-directed projects spanning homelab cloud experiments, AI text moderation, fintech & web UI"
      },
      {
        value: "Web & APIs",
        unit: "Core Stack",
        label: "React · Node.js · Express · SQL",
        detail: "Building responsive frontend interfaces, RESTful backend APIs, and database schemas"
      },
      {
        value: "Cloud Lab",
        unit: "Exploring",
        label: "Go · Docker · Linux · Git",
        detail: "Practicing containerization, Linux CLI administration, and self-hosted server setups"
      }
    ],
    principles: [
      {
        number: "01",
        title: "Learn by building real projects.",
        description: "Turning textbook computer science concepts—like networking, processes, and databases—into working code and interactive web apps."
      },
      {
        number: "02",
        title: "Look beneath the abstraction.",
        description: "Going beyond high-level frameworks to understand how Linux, Docker containers, HTTP requests, and backend servers actually work."
      },
      {
        number: "03",
        title: "Write clean, thoughtful code.",
        description: "Focusing on readable component structure, responsive layouts, and practical problem-solving that makes technology genuinely useful."
      }
    ],
    studentSnapshot: [
      { label: "Degree & Program", value: "B.Tech in Computer Science & Engineering (2023–2027)" },
      { label: "Core CS Subjects", value: "DSA · Operating Systems · Computer Networks · DBMS · OOP" },
      { label: "Current Learning Focus", value: "Go (Golang) · Docker Containers · Linux · Full-Stack React" },
      { label: "Seeking Opportunities", value: "Software / Cloud Internships · Open Source · Collaborative Builds" }
    ]
  },

  projects: [
    {
      id: "kamui-cloud",
      num: "01",
      title: "Kamui Cloud",
      filterCategory: "cloud",
      category: "Cloud & Systems Learning Project",
      year: "2025",
      role: "Self-Directed Systems Project",
      status: "Ongoing Student Exploration",
      headline: "Open-Source Private Cloud & Self-Hosted Homelab Experiment",
      summary: "An experimental student project exploring how available PC hardware can be connected into a self-hosted private cloud using Go, Docker, and Linux.",
      description: "Started out of curiosity about how cloud platforms manage servers behind the scenes, Kamui Cloud is my hands-on learning project for systems and cloud engineering. It explores how local Linux machines can run containerized workloads with Docker, communicate over TCP/HTTP using Go services, and display node health metrics on a clean web dashboard.",
      image: kamuicloudImg,
      technologies: ["Go", "Docker", "Linux", "Networking Basics", "Shell Scripting"],
      githubUrl: "https://github.com/HarshitRaj31",
      metrics: [
        { label: "Project Type", value: "Self-Hosted Homelab" },
        { label: "Core Focus", value: "Go · Docker · Linux" },
        { label: "Key Concept", value: "Container & Node Health" }
      ],
      features: [
        "Built a lightweight Go service to ping connected local nodes and check their online/offline status",
        "Practiced running and managing isolated application containers using Docker and Linux CLI tools",
        "Collected basic Linux system stats (CPU usage, memory, disk space) to visualize on a dashboard",
        "Applied Computer Networks and Operating Systems coursework to a practical homelab setup"
      ],
      architectureSteps: [
        {
          step: "01. Local Network & Request Routing",
          detail: "Incoming HTTP requests are routed on the local Linux host to the dashboard and API endpoints."
        },
        {
          step: "02. Go Status Checker Service",
          detail: "A concurrent Go program periodically sends health checks to registered local nodes to verify connectivity."
        },
        {
          step: "03. Docker Container Management",
          detail: "Uses Docker to package and run web services in isolated containers with defined port mappings."
        },
        {
          step: "04. Linux Resource Monitoring",
          detail: "Reads basic host metrics from Linux system utilities to display CPU, RAM, and container activity."
        }
      ],
      codeSnippet: `package main

import (
	"fmt"
	"net/http"
	"time"
)

type NodeStatus struct {
	Name    string
	URL     string
	Healthy bool
}

func checkNode(node *NodeStatus) {
	client := http.Client{Timeout: 2 * time.Second}
	resp, err := client.Get(node.URL + "/health")
	if err != nil || resp.StatusCode != http.StatusOK {
		node.Healthy = false
		return
	}
	defer resp.Body.Close()
	node.Healthy = true
}

func main() {
	node := &NodeStatus{Name: "homelab-node-01", URL: "http://localhost:8080"}
	checkNode(node)
	fmt.Printf("Node %s healthy: %v\\n", node.Name, node.Healthy)
}`
    },
    {
      id: "toxicguard",
      num: "02",
      title: "ToxicGuard",
      filterCategory: "ai",
      category: "AI / ML & Web Application",
      year: "2025",
      role: "Student Developer",
      status: "Completed Project",
      headline: "AI-Assisted Toxic Speech Detection & Moderation Dashboard",
      summary: "A web application that analyzes text messages for toxic language patterns to promote safer online communication.",
      description: "ToxicGuard is a project built to explore integrating AI/ML text classification APIs into a modern React interface. Users or moderators can input message streams to detect aggression, insults, hate speech, and profanity, viewing highlighted problem phrases and category score breakdowns in a dark analytical UI.",
      image: toxicguardImg,
      technologies: ["React", "JavaScript (ES6+)", "API Integration", "AI/ML APIs", "CSS Grid"],
      githubUrl: "https://github.com/HarshitRaj31",
      metrics: [
        { label: "Project Type", value: "AI Moderation UI" },
        { label: "Core Focus", value: "React & API Integration" },
        { label: "Key Concept", value: "Sentiment & Safety Scoring" }
      ],
      features: [
        "Integrated text-analysis APIs to evaluate user messages across toxicity categories (insult, aggression, profanity)",
        "Created an interactive dashboard with safety score gauges and category breakdown bars",
        "Implemented inline text highlighting to visually flag specific toxic words or phrases",
        "Practiced asynchronous state management (loading, error handling, and live feed updates) in React"
      ],
      architectureSteps: [
        {
          step: "01. User Text Input & Normalization",
          detail: "Cleans and validates text input from the user interface before sending it for analysis."
        },
        {
          step: "02. Asynchronous API Call",
          detail: "Sends the text payload to the classification endpoint and awaits category confidence scores."
        },
        {
          step: "03. Safety Score Calculation",
          detail: "Computes an overall safety percentage and determines whether the message should be flagged."
        },
        {
          step: "04. Dashboard Visualization",
          detail: "Renders the highlighted text spans, category progress bars, and moderation log entries in React."
        }
      ],
      codeSnippet: `export async function analyzeMessageSafety(text) {
  const cleanedText = text.trim();
  if (!cleanedText) return null;

  const response = await fetch('/api/moderate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: cleanedText }),
  });

  const data = await response.json();
  const maxToxicity = Math.max(
    data.scores.aggression,
    data.scores.insult,
    data.scores.profanity
  );

  return {
    isFlagged: maxToxicity > 0.6,
    safetyScore: Math.round((1 - maxToxicity) * 100),
    categories: data.scores,
  };
}`
    },
    {
      id: "moneypay",
      num: "03",
      title: "MoneyPay",
      filterCategory: "web",
      category: "Full-Stack Web Application",
      year: "2024",
      role: "Full-Stack Student Developer",
      status: "Completed Project",
      headline: "Digital Wallet Interface & Peer-to-Peer Transfer Web App",
      summary: "A full-stack payment web application built to practice authentication, REST APIs, and financial dashboard design.",
      description: "MoneyPay was built to strengthen my full-stack development skills using React, Node.js, and Express. It simulates a clean digital wallet where users can view virtual card details, send peer-to-peer transfers with balance checks, and track monthly incoming and outgoing cash flow.",
      image: moneypayImg,
      technologies: ["React", "Node.js", "Express.js", "REST APIs", "JWT Auth"],
      githubUrl: "https://github.com/HarshitRaj31",
      metrics: [
        { label: "Project Type", value: "Full-Stack Web App" },
        { label: "Core Focus", value: "React · Node · Express" },
        { label: "Key Concept", value: "JWT Auth & REST CRUD" }
      ],
      features: [
        "Designed a clean wallet dashboard with an interactive virtual card preview and balance summary",
        "Built a quick-transfer form with recipient lookup and client/server balance validation",
        "Implemented user authentication and protected API routes using JSON Web Tokens (JWT)",
        "Created cash-flow trend charts and a recent transaction activity history list"
      ],
      architectureSteps: [
        {
          step: "01. JWT Login & Session Protection",
          detail: "Users authenticate via Express endpoints and receive a JWT token to access wallet routes."
        },
        {
          step: "02. Transfer Form Validation",
          detail: "Checks that the transfer amount is valid and does not exceed the user's current balance."
        },
        {
          step: "03. Backend Balance Update",
          detail: "Processes the transfer request on the Node.js server and records the transaction in the database."
        },
        {
          step: "04. Instant UI State Refresh",
          detail: "Updates the displayed account balance and recent activity list in React."
        }
      ],
      codeSnippet: `// Express route handler for peer-to-peer transfer practice
app.post('/api/transfer', verifyJwtToken, async (req, res) => {
  const { recipientEmail, amount } = req.body;
  const numericAmount = Number(amount);

  if (!recipientEmail || numericAmount <= 0) {
    return res.status(400).json({ error: 'Invalid transfer details.' });
  }

  const sender = await User.findById(req.user.id);
  if (sender.balance < numericAmount) {
    return res.status(400).json({ error: 'Insufficient wallet balance.' });
  }

  const recipient = await User.findOne({ email: recipientEmail });
  if (!recipient) {
    return res.status(404).json({ error: 'Recipient user not found.' });
  }

  sender.balance -= numericAmount;
  recipient.balance += numericAmount;
  await sender.save();
  await recipient.save();

  res.json({ status: 'success', newBalance: sender.balance });
});`
    },
    {
      id: "cinebox",
      num: "04",
      title: "Cinebox",
      filterCategory: "web",
      category: "Frontend Web & UI Project",
      year: "2024",
      role: "Frontend Developer",
      status: "Completed Project",
      headline: "Movie Discovery & Interactive Theater Seat Booking App",
      summary: "A responsive React application for browsing movies, filtering showtimes, and selecting theater seats interactively.",
      description: "Cinebox is a frontend project focused on mastering React state management, client-side routing, and CSS Grid layouts. Visitors can browse featured movies, filter screenings by format (2D, 3D, IMAX), and click seats on an interactive auditorium grid with live ticket price calculation.",
      image: cineboxImg,
      technologies: ["React", "Vite", "React Router", "REST APIs", "CSS Grid"],
      githubUrl: "https://github.com/HarshitRaj31",
      metrics: [
        { label: "Project Type", value: "Interactive React SPA" },
        { label: "Core Focus", value: "State & CSS Grid" },
        { label: "Key Concept", value: "Interactive Seat Matrix" }
      ],
      features: [
        "Built an interactive auditorium seat selector grid showing available, selected, and booked seats",
        "Created showtime and format filter tabs (2D, 3D, IMAX) with automatic ticket price totals",
        "Integrated movie catalog data with poster cards, ratings, genres, and trailer hero banners",
        "Used React Router and Vite for smooth, fast single-page navigation across views"
      ],
      architectureSteps: [
        {
          step: "01. Movie Catalog Fetching",
          detail: "Loads movie titles, ratings, genres, and poster artwork into a responsive card grid."
        },
        {
          step: "02. Showtime & Format Selection",
          detail: "Allows users to pick a screening time and theater format (2D or 3D) using interactive buttons."
        },
        {
          step: "03. Interactive Seat Grid State",
          detail: "Tracks selected seat IDs in React state while preventing clicks on already-booked seats."
        },
        {
          step: "04. Booking Summary Calculation",
          detail: "Multiplies selected seat count by ticket price to display the live booking summary."
        }
      ],
      codeSnippet: `export function useSeatSelection(bookedSeats = ['A14', 'B05'], ticketPrice = 16) {
  const [selectedSeats, setSelectedSeats] = useState(['A15']);

  const toggleSeat = (seatId) => {
    if (bookedSeats.includes(seatId)) return;

    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
  };

  return {
    selectedSeats,
    totalPrice: selectedSeats.length * ticketPrice,
    toggleSeat,
  };
}`
    }
  ],

  skillsGrouped: [
    {
      id: "frontend",
      index: "01",
      category: "Frontend Web Development",
      desc: "Building responsive, accessible user interfaces and single-page React applications",
      technologies: [
        { name: "React", level: "Daily Use", context: "Component architecture, hooks (useState, useEffect), React Router, state management" },
        { name: "JavaScript (ES6+)", level: "Daily Use", context: "Async/await, Fetch API, DOM manipulation, array methods, modular JS" },
        { name: "HTML5 & Modern CSS", level: "Daily Use", context: "Semantic markup, CSS Grid, Flexbox, responsive mobile-first layouts" },
        { name: "Tailwind CSS & Bootstrap", level: "Comfortable", context: "Utility-first styling, dark-mode UI systems, rapid component prototyping" }
      ]
    },
    {
      id: "backend",
      index: "02",
      category: "Backend & REST APIs",
      desc: "Server-side JavaScript, routing, authentication, and API integration",
      technologies: [
        { name: "Node.js & Express.js", level: "Working Knowledge", context: "Building REST API endpoints, middleware, request handling (used in MoneyPay)" },
        { name: "RESTful API Design", level: "Comfortable", context: "JSON payloads, CRUD operations, connecting React frontends to backend services" },
        { name: "JWT Authentication", level: "Working Knowledge", context: "User login/signup flows, protected routes, token verification" }
      ]
    },
    {
      id: "systems",
      index: "03",
      category: "Cloud & Systems (Currently Exploring)",
      desc: "Self-directed learning in Linux, containers, and systems programming",
      technologies: [
        { name: "Linux & Bash CLI", level: "Actively Learning", context: "Daily Linux usage, terminal workflows, file permissions, process & service basics" },
        { name: "Docker", level: "Actively Learning", context: "Containerizing web apps, Dockerfiles, managing containers in Kamui Cloud" },
        { name: "Go (Golang)", level: "Actively Learning", context: "Writing concurrent programs, HTTP servers, and CLI tools for cloud experiments" },
        { name: "Git & GitHub", level: "Daily Use", context: "Version control, branching, pull requests, managing open-source project repos" }
      ]
    },
    {
      id: "databases",
      index: "04",
      category: "Databases & Core CS Coursework",
      desc: "Database management systems and undergraduate Computer Science fundamentals",
      technologies: [
        { name: "MongoDB & MySQL", level: "Working Knowledge", context: "Document collections, relational tables, basic SQL joins, and CRUD queries" },
        { name: "Data Structures & Algorithms", level: "B.Tech Coursework", context: "Arrays, linked lists, trees, sorting/searching, and problem-solving practice" },
        { name: "OS & Computer Networks", level: "B.Tech Coursework", context: "Processes, memory management, TCP/IP layers, HTTP/DNS, and socket basics" }
      ]
    }
  ],

  cloudSection: {
    kicker: "02. Beyond the Classroom — Cloud & Systems Lab",
    headline: "Connecting CS Fundamentals to Real Linux & Cloud Systems.",
    intro: "As a Computer Science student, I love seeing how subjects like Operating Systems and Computer Networks work in the real world. Alongside web development, I spend my free time experimenting with Linux, Docker containers, and Go through my student project, Kamui Cloud.",
    kamuiHighlight: {
      title: "Kamui Cloud — Student Homelab Project",
      subtitle: "Learning cloud infrastructure by building a small private cloud from scratch",
      description: "Instead of only reading about cloud computing in textbooks, I started Kamui Cloud to learn hands-on how multiple computers can run Docker containers, report system health, and work together on a local Linux network.",
      github: "https://github.com/HarshitRaj31",
      pillars: [
        {
          index: "01",
          title: "Go Services",
          desc: "Learning Go concurrency (goroutines) by writing lightweight node health-check and API services."
        },
        {
          index: "02",
          title: "Docker Containers",
          desc: "Packaging applications into isolated containers and understanding images, ports, and volumes."
        },
        {
          index: "03",
          title: "Linux CLI & OS",
          desc: "Applying Operating Systems concepts on Linux—monitoring CPU, RAM, processes, and systemd services."
        },
        {
          index: "04",
          title: "Networking Basics",
          desc: "Exploring how local nodes communicate over TCP/HTTP, IP routing, and reverse proxies."
        }
      ]
    }
  },

  journey: [
    {
      year: "2025 — Present",
      period: "2025",
      phase: "Exploring Cloud Infrastructure & Systems",
      title: "Learning Go, Docker, Linux & Building Kamui Cloud",
      description: "Expanding my skills beyond web development into cloud and systems engineering. Building Kamui Cloud as a self-hosted homelab project and creating ToxicGuard to explore AI-powered text moderation.",
      domain: "Cloud & Systems Exploration",
      highlights: [
        "Started learning Go (Golang) and Docker containerization hands-on",
        "Built Kamui Cloud to experiment with self-hosted Linux servers",
        "Developed ToxicGuard AI text moderation dashboard in React"
      ]
    },
    {
      year: "2024 — 2025",
      period: "2024",
      phase: "Full-Stack Web Development Projects",
      title: "Building End-to-End Web Apps with React & Node.js",
      description: "Moved from static websites to full-stack applications. Built MoneyPay and Cinebox to learn how frontend React components communicate with Node.js/Express REST APIs, JWT authentication, and databases.",
      domain: "Full-Stack Web Learning",
      highlights: [
        "Built MoneyPay digital wallet interface with Node.js & Express",
        "Created Cinebox movie discovery and interactive seat booking app",
        "Practiced Git workflows and collaborative coding on GitHub"
      ]
    },
    {
      year: "2023 — 2024",
      period: "2023",
      phase: "Web Development Foundations",
      title: "Mastering HTML, CSS, JavaScript & React Basics",
      description: "Started building interactive web pages from scratch. Focused on responsive layouts with Flexbox and CSS Grid, modern ES6+ JavaScript fundamentals, and component-based UI development.",
      domain: "Frontend Fundamentals",
      highlights: [
        "Built multiple responsive frontend projects and UI prototypes",
        "Transitioned from vanilla JavaScript to React and Tailwind CSS"
      ]
    },
    {
      year: "2023 — 2027",
      period: "B.Tech",
      phase: "Undergraduate Computer Science Degree",
      title: "B.Tech in Computer Science & Engineering",
      description: "Currently pursuing my Bachelor of Technology in Computer Science Engineering. Studying core subjects including Data Structures & Algorithms, Operating Systems, Computer Networks, OOP, and Database Management Systems.",
      domain: "Academic Foundation",
      highlights: [
        "Connecting university CS theory with practical software projects",
        "Actively preparing for software and cloud engineering internships"
      ]
    }
  ]
};
