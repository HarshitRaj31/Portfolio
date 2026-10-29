import toxicguardDashboardImg from './assets/toxicguard.jpg';
import kamuicloudDashboardImg from './assets/kamuicloud.jpg';
import moneypayDashboardImg from './assets/moneypay.jpg';
import cineboxDashboardImg from './assets/cinebox.jpg';

export const portfolioData = {
  personal: {
    brand: "harshit@github:~$",
    name: "Harshit Raj",
    firstName: "Harshit",
    lastName: "Raj",
    roles: ["FULL STACK DEVELOPER", "CSE STUDENT", "OPEN-SOURCE ENTHUSIAST"],
    title: "Full Stack Developer · CSE Student · Open-Source Enthusiast",
    degree: "B.Tech in Computer Science & Engineering (2023–2027)",
    tagline:
      "I build web apps, explore backend systems, and turn ideas into real-world software. Currently exploring cloud infrastructure, distributed systems and the space where engineering meets impact.",
    bioParagraph1:
      "I build web apps, explore backend systems, and turn ideas into real-world software.",
    bioParagraph2:
      "Currently exploring cloud infrastructure, distributed systems and the space where engineering meets impact.",
    terminalPrompts: [
      "always learning...",
      "always building...",
      "always curious..."
    ],
    checklist: [
      { id: "dsa", label: "DSA", checked: true, detail: "Data Structures & Algorithms in C++, Java & Go" },
      { id: "go", label: "GO", checked: true, detail: "Concurrent backend services, CLI tools & HTTP APIs" },
      { id: "sys", label: "SYSTEM DESIGN", checked: true, detail: "Scalable architecture, caching, load balancing & APIs" },
      { id: "cloud", label: "CLOUD", checked: true, detail: "Self-hosted Linux nodes, Docker containers & Kamui Cloud" },
      { id: "code", label: "BETTER CODE", checked: true, detail: "Clean, modular full-stack code & open-source practices" },
      { id: "ideas", label: "BIGGER IDEAS", checked: false, detail: "Next milestone: distributed cloud & impactful production systems" }
    ],
    currentlyExploring: [
      "Go & backend engineering",
      "Docker & containerization",
      "System design & architecture",
      "DSA & problem-solving",
      "Operating systems & Linux",
      "Open-source collaboration"
    ],
    githubStats: {
      username: "HarshitRaj31",
      metrics: [
        { label: "Public Repos", value: "22", highlight: true },
        { label: "Followers", value: "19", highlight: true },
        { label: "Following", value: "15", highlight: true },
        { label: "Contributions", value: "181", highlight: true },
        { label: "Status", value: "Always ongoing...", highlight: false }
      ],
      activityBars: [
        18, 12, 30, 52, 24, 15, 22, 46, 33, 62, 48, 25, 38, 72, 92, 60, 44, 78, 50, 84, 58, 66
      ],
      topLanguages: [
        { name: "JavaScript", percent: 38, color: "#84CC16" },
        { name: "CSS", percent: 32, color: "#A855F7" },
        { name: "Python", percent: 12, color: "#38BDF8" },
        { name: "C", percent: 11, color: "#F97316" },
        { name: "Java", percent: 7, color: "#06B6D4" }
      ]
    },
    location: "India · IST (UTC+5:30)",
    country: "India",
    timezone: "Asia/Kolkata",
    email: "iamharshit106@gmail.com",
    github: "https://github.com/HarshitRaj31",
    linkedin: "https://www.linkedin.com/in/harshit-raj-a76b93329/"
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
      accentColor: "emerald",
      headline: "Open-Source Private Cloud & Self-Hosted Homelab Experiment",
      summary: "Open-source private cloud using everyday laptops.",
      description:
        "Started out of curiosity about how cloud platforms manage servers behind the scenes, Kamui Cloud is my hands-on learning project for systems and cloud engineering. It explores how local Linux machines can run containerized workloads with Docker, communicate over TCP/HTTP using Go services, and display node health metrics on a clean web dashboard.",
      image: "/assets/crops/proj_kamui.png",
      detailedImage: kamuicloudDashboardImg,
      technologies: ["Go", "Docker", "Cloud"],
      fullTechnologies: ["Go", "Docker", "Linux", "Networking Basics", "Shell Scripting"],
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
      accentColor: "purple",
      headline: "AI-Assisted Toxic Speech Detection & Moderation Dashboard",
      summary: "Toxic speech detection for a safer internet.",
      description:
        "ToxicGuard is a project built to explore integrating AI/ML text classification APIs into a modern React interface. Users or moderators can input message streams to detect aggression, insults, hate speech, and profanity, viewing highlighted problem phrases and category score breakdowns in a dark analytical UI.",
      image: "/assets/crops/proj_toxic.png",
      detailedImage: toxicguardDashboardImg,
      technologies: ["React", "Node.js", "AI/ML"],
      fullTechnologies: ["React", "Node.js", "JavaScript (ES6+)", "AI/ML APIs", "CSS Grid"],
      githubUrl: "https://github.com/HarshitRaj31/ToxicGuard",
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
      id: "cinebox",
      num: "03",
      title: "Cinebox",
      filterCategory: "web",
      category: "Frontend Web & UI Project",
      year: "2024",
      role: "Frontend Developer",
      accentColor: "emerald",
      headline: "Movie Discovery & Interactive Theater Seat Booking App",
      summary: "Movie ticket booking with a modern UI.",
      description:
        "Cinebox is a frontend project focused on mastering React state management, client-side routing, and CSS Grid layouts. Visitors can browse featured movies, filter screenings by format (2D, 3D, IMAX), and click seats on an interactive auditorium grid with live ticket price calculation.",
      image: "/assets/crops/proj_cinebox.png",
      detailedImage: cineboxDashboardImg,
      technologies: ["React", "Vite", "CSS"],
      fullTechnologies: ["React", "Vite", "React Router", "REST APIs", "CSS Grid"],
      githubUrl: "https://github.com/HarshitRaj31/cinema",
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
    },
    {
      id: "citylink",
      num: "04",
      title: "CityLink",
      filterCategory: "web",
      category: "Full-Stack Web Application",
      year: "2024",
      role: "Full-Stack Student Developer",
      accentColor: "emerald",
      headline: "Bus Reservation System with Fleet Admin Panel",
      summary: "Bus reservation system with admin panel.",
      description:
        "CityLink is a full-stack intercity bus reservation platform and operator admin panel built with React, Express, and MongoDB. Passengers can search routes, inspect live seat availability, and book tickets while admins manage fleet schedules and pricing.",
      image: "/assets/crops/proj_citylink.png",
      detailedImage: moneypayDashboardImg,
      technologies: ["React", "Express", "MongoDB"],
      fullTechnologies: ["React", "Node.js", "Express", "MongoDB", "JWT Auth"],
      githubUrl: "https://github.com/HarshitRaj31/MoneyPay",
      metrics: [
        { label: "Project Type", value: "Full-Stack Web App" },
        { label: "Core Focus", value: "React · Express · MongoDB" },
        { label: "Key Concept", value: "Admin Panel & REST CRUD" }
      ],
      features: [
        "Built end-to-end route search by origin, destination, and travel date with MongoDB queries",
        "Created an interactive bus deck seat layout for passenger booking and ticket generation",
        "Developed a role-protected Admin Panel to add buses, configure schedules, and view bookings",
        "Implemented user authentication and protected API routes using JSON Web Tokens (JWT)"
      ],
      architectureSteps: [
        {
          step: "01. Route Search & Schedule Query",
          detail: "Queries MongoDB for matching city pairs, departure windows, and available seat counts."
        },
        {
          step: "02. Seat Locking & Reservation",
          detail: "Validates seat availability in Express and atomically updates booked seat arrays."
        },
        {
          step: "03. Operator Admin Dashboard",
          detail: "Provides CRUD controls for bus routes, pricing tiers, departure times, and manifest lists."
        },
        {
          step: "04. Instant UI State Refresh",
          detail: "Generates passenger confirmation details and updates trip history in React."
        }
      ],
      codeSnippet: `// Express route for booking bus seats with atomic check
app.post('/api/routes/:routeId/book', authenticateUser, async (req, res) => {
  const { seats, passengerName } = req.body;
  const route = await BusRoute.findById(req.params.routeId);

  const conflict = seats.some((seatNo) => route.bookedSeats.includes(seatNo));
  if (conflict) {
    return res.status(409).json({ error: 'Selected seat already reserved.' });
  }

  route.bookedSeats.push(...seats);
  await route.save();

  const ticket = await Booking.create({
    userId: req.user.id,
    routeId: route._id,
    passengerName,
    seats,
    totalFare: seats.length * route.farePerSeat,
  });

  res.status(201).json({ status: 'confirmed', ticket });
});`
    }
  ],

  skillsGrouped: [
    {
      id: "languages",
      index: "01",
      category: "Programming Languages",
      desc: "Core programming languages used for DSA, systems programming, scripting, and full-stack development",
      technologies: [
        { name: "C", level: "B.Tech Coursework", context: "Pointers, manual memory management, arrays, structures, and low-level systems fundamentals" },
        { name: "C++", level: "Daily Use", context: "Data Structures & Algorithms (DSA), STL containers, object-oriented programming, and problem solving" },
        { name: "Java", level: "B.Tech Coursework", context: "Object-Oriented Programming (OOP), interfaces, collections framework, and multithreading basics" },
        { name: "Python", level: "Comfortable", context: "Backend scripting, automation, data processing, and AI/ML classification API integration" },
        { name: "JavaScript (ES6+)", level: "Daily Use", context: "Async/await, Fetch API, closures, DOM manipulation, and full-stack React/Node applications" },
        { name: "Go (Golang)", level: "Actively Learning", context: "Writing concurrent backend services, goroutines, HTTP health checkers, and CLI tools for Kamui Cloud" }
      ]
    },
    {
      id: "frontend",
      index: "02",
      category: "Frontend Web Development",
      desc: "Building responsive, accessible user interfaces and single-page React applications",
      technologies: [
        { name: "React", level: "Daily Use", context: "Component architecture, hooks (useState, useEffect), React Router, and interactive state management" },
        { name: "Vite", level: "Daily Use", context: "Fast ES module bundling, hot module replacement, and optimized frontend builds" },
        { name: "Tailwind CSS", level: "Daily Use", context: "Utility-first responsive design systems, dark/light mode themes, and rapid UI prototyping" },
        { name: "HTML5", level: "Daily Use", context: "Semantic markup, web accessibility (ARIA), forms, and structured SEO layouts" },
        { name: "CSS3", level: "Daily Use", context: "CSS Grid, Flexbox, custom properties, keyframe animations, and mobile-first media queries" }
      ]
    },
    {
      id: "backend",
      index: "03",
      category: "Backend & REST APIs",
      desc: "Server-side runtimes, routing, authentication, and API architecture",
      technologies: [
        { name: "Node.js", level: "Working Knowledge", context: "Event-driven server runtime, asynchronous I/O, and backend service orchestration" },
        { name: "Express.js", level: "Working Knowledge", context: "Building REST API endpoints, middleware pipelines, and request handlers (CityLink & MoneyPay)" },
        { name: "RESTful APIs", level: "Comfortable", context: "JSON schema design, CRUD controllers, status codes, and frontend-to-backend integration" },
        { name: "JWT Authentication", level: "Working Knowledge", context: "Stateless user login/signup flows, role-protected routes, and token verification" }
      ]
    },
    {
      id: "systems",
      index: "04",
      category: "Cloud, Linux & DevOps Tools",
      desc: "Self-directed learning in Linux systems, containerization, and developer workflows",
      technologies: [
        { name: "Linux", level: "Actively Learning", context: "Daily Linux CLI usage, file permissions, systemd services, and host resource monitoring" },
        { name: "Docker", level: "Actively Learning", context: "Containerizing web apps, writing Dockerfiles, port mapping, and managing nodes in Kamui Cloud" },
        { name: "Git", level: "Daily Use", context: "Distributed version control, branching strategies, rebasing, and clean commit history" },
        { name: "GitHub", level: "Daily Use", context: "Pull requests, open-source repository management, code reviews, and project documentation" }
      ]
    },
    {
      id: "databases",
      index: "05",
      category: "Databases & Core CS Coursework",
      desc: "Database management systems and undergraduate Computer Science fundamentals",
      technologies: [
        { name: "MongoDB", level: "Working Knowledge", context: "NoSQL document schemas, Mongoose models, and aggregation queries for full-stack apps" },
        { name: "MySQL", level: "B.Tech Coursework", context: "Relational schema design, SQL joins, indexing, normalization, and ACID transactions" },
        { name: "Data Structures & Algorithms", level: "B.Tech Coursework", context: "Arrays, linked lists, stacks, queues, trees, graphs, sorting, and time/space complexity" },
        { name: "OS & Computer Networks", level: "B.Tech Coursework", context: "Process scheduling, virtual memory, TCP/IP stack, HTTP/DNS protocols, and socket programming" }
      ]
    }
  ],

  cloudSection: {
    kicker: "02. Beyond the Classroom — Cloud & Systems Lab",
    headline: "Connecting CS Fundamentals to Real Linux & Cloud Systems.",
    intro:
      "As a Computer Science student, I love seeing how subjects like Operating Systems and Computer Networks work in the real world. Alongside web development, I spend my free time experimenting with Linux, Docker containers, and Go through my student project, Kamui Cloud.",
    kamuiHighlight: {
      title: "Kamui Cloud — Student Homelab Project",
      subtitle: "Learning cloud infrastructure by building a small private cloud from scratch",
      description:
        "Instead of only reading about cloud computing in textbooks, I started Kamui Cloud to learn hands-on how multiple computers can run Docker containers, report system health, and work together on a local Linux network.",
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
      description:
        "Expanding my skills beyond web development into cloud and systems engineering. Building Kamui Cloud as a self-hosted homelab project and creating ToxicGuard to explore AI-powered text moderation.",
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
      description:
        "Moved from static websites to full-stack applications. Built MoneyPay, CityLink, and Cinebox to learn how frontend React components communicate with Node.js/Express REST APIs, JWT authentication, and databases.",
      domain: "Full-Stack Web Learning",
      highlights: [
        "Built MoneyPay & CityLink full-stack interfaces with Node.js & Express",
        "Created Cinebox movie discovery and interactive seat booking app",
        "Practiced Git workflows and collaborative coding on GitHub"
      ]
    },
    {
      year: "2023 — 2024",
      period: "2023",
      phase: "Web Development Foundations",
      title: "Mastering HTML, CSS, JavaScript & React Basics",
      description:
        "Started building interactive web pages from scratch. Focused on responsive layouts with Flexbox and CSS Grid, modern ES6+ JavaScript fundamentals, and component-based UI development.",
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
      description:
        "Currently pursuing my Bachelor of Technology in Computer Science Engineering. Studying core subjects including Data Structures & Algorithms, Operating Systems, Computer Networks, OOP, and Database Management Systems.",
      domain: "Academic Foundation",
      highlights: [
        "Connecting university CS theory with practical software projects",
        "Actively preparing for software and cloud engineering internships"
      ]
    }
  ]
};
