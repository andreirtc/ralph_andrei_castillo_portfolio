import { useEffect, useLayoutEffect, useState } from "react";

const EMAIL = "castilloralphandreit@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/ralphcastillo02/";
const GITHUB = "https://github.com/andreirtc";

const skillGroups = [
  {
    title: "Hardware & IT Support",
    description:
      "Practical troubleshooting, diagnostics, upgrades, testing, and system readiness.",
    skills: [
      "Windows installation & troubleshooting",
      "Desktop and laptop repair",
      "PC assembly and upgrades",
      "RAM, SSD, and PSU diagnostics",
      "BIOS and driver checks",
      "Hardware testing and documentation",
    ],
  },
  {
    title: "Embedded & Electronics",
    description:
      "Hands-on hardware integration for microcontroller-based academic projects.",
    skills: [
      "ATmega328P / Arduino",
      "Circuit schematic design",
      "EasyEDA PCB layout",
      "Sensor and actuator integration",
      "Servo and LDR control",
      "Firmware testing and troubleshooting",
    ],
  },
  {
    title: "Networking",
    description:
      "Foundational enterprise networking concepts and Cisco-based project work.",
    skills: [
      "Cisco Packet Tracer",
      "IPv4 addressing and subnetting",
      "VLANs and inter-VLAN routing",
      "OSPF and HSRP",
      "EtherChannel",
      "ACLs and port security",
    ],
  },
  {
    title: "Software Foundations",
    description:
      "Project-based exposure to development tools and programming fundamentals.",
    skills: [
      "Python",
      "Arduino C/C++",
      "HTML, CSS, and JavaScript",
      "React project contribution",
      "Git and GitHub",
      "Google Colab and Linux CLI",
    ],
  },
];

const experiences = [
  {
    period: "Jul 2025 – Sep 2025",
    role: "Technical Engineer Intern",
    company: "Micro Pacific Technologies and Systems Corporation",
    location: "Makati City, Philippines",
    bullets: [
      "Tested and documented 400+ desktops, laptops, all-in-one PCs, mini PCs, and server units for readiness, inventory, and deployment workflows.",
      "Performed RAM and storage upgrades, BIOS validation, Windows and driver checks, compatibility verification, and defect documentation.",
      "Prepared around 30 Ethernet cables, assembled 100+ desktops, supported server RAM upgrades, and contributed to technical reporting.",
    ],
  },
  {
    period: "Mar 2021 – Present",
    role: "Self-Employed Computer Technician",
    company: "Freelance / Referral-Based",
    location: "Caloocan, Metro Manila",
    bullets: [
      "Provide paid technical support for desktop and laptop users with Windows, performance, driver, software, and hardware-related concerns.",
      "Perform Windows installation, RAM, SSD, and PSU upgrades, component diagnostics, and repair recommendations based on client needs and budget.",
      "Handle practical hardware inspection tasks, including BIOS checks, driver troubleshooting, and careful CPU pin assessment when feasible.",
    ],
  },
  {
    period: "Nov 2023 – Jul 2025",
    role: "Academic Tutor",
    company: "Independent",
    location: "Metro Manila",
    bullets: [
      "Created personalized study materials and guided learners from elementary to college level.",
      "Developed the ability to explain technical concepts in clear, step-by-step language.",
    ],
  },
];

const featuredProjects = [
  {
    id: "solalign",
    title: "SolAlign",
    subtitle: "Dual-Axis Solar Tracking and Monitoring System",
    course: "Microprocessors",
    role: "Project Lead / Embedded Hardware Lead",
    visualLabel: "Prototype • PCB • Firmware",
    className: "visual-solalign",
    coverImage: "/assets/projects/solalign/solalign-cover.webp",
    coverAlt:
      "SolAlign dual-axis solar tracking prototype with a front-facing solar panel and keypad control enclosure.",
    coverNote:
      "Presentation-edited overview based on the actual prototype.",
    challenge:
      "Turn a microcontroller concept into a functioning standalone tracker with sensing, control, monitoring, and user interaction.",
    contribution:
      "Independently designed the complete circuit schematic, co-developed the EasyEDA PCB layout and firmware, and led hardware integration, testing, and troubleshooting.",
    outcome:
      "Integrated LDR-based tracking, servo control, LCD/keypad access, EEPROM authentication, INA219 monitoring, manual positioning, and park/stow operation.",
    technologies: [
      "ATmega328P",
      "Arduino C/C++",
      "EasyEDA",
      "INA219",
      "LCD",
      "Keypad",
      "Servos",
    ],
    evidenceIntro:
      "Real interface, schematic, and PCB documentation from the SolAlign project.",
    evidence: [
      {
        title: "LDR Diagnostic Display",
        description:
          "LCD output showing top-left, top-right, bottom-left, and bottom-right sensor readings used by the tracking logic.",
        src: "/assets/projects/solalign/solalign-lcd-ldr.webp",
        alt: "SolAlign LCD displaying TL, TR, BL, and BR LDR diagnostic readings.",
        kind: "lcd",
      },
      {
        title: "Manual Positioning Mode",
        description:
          "Keypad interface confirming Manual Mode, allowing direct user control of panel positioning.",
        src: "/assets/projects/solalign/solalign-lcd-manual.webp",
        alt: "SolAlign keypad enclosure with LCD displaying Manual Mode.",
        kind: "lcd",
      },
      {
        title: "Park / Stow Mode",
        description:
          "Keypad interface showing Park Mode for returning the panel to its designated safe position.",
        src: "/assets/projects/solalign/solalign-lcd-park.webp",
        alt: "SolAlign keypad enclosure with LCD displaying Park Mode.",
        kind: "lcd",
      },
      {
        title: "Circuit Schematic",
        description:
          "Standalone ATmega328P schematic in EasyEDA, including power rails, INA219 monitoring, I2C LCD, keypad, LDR array, servos, and control buttons.",
        src: "/assets/projects/solalign/solalign-schematic.png",
        alt: "SolAlign EasyEDA circuit schematic.",
        kind: "diagram",
      },
      {
        title: "Custom PCB Routing",
        description:
          "EasyEDA PCB routing co-developed for the standalone controller and interface connections.",
        src: "/assets/projects/solalign/solalign-pcb-layout.png",
        alt: "SolAlign EasyEDA PCB layout.",
        kind: "diagram",
      },
    ],
  },
  {
    id: "network-security",
    title: "Enterprise Network Security and Automation Design",
    subtitle: "Cisco Packet Tracer Enterprise Network",
    course: "Computer Networks and Security",
    role: "Project Lead / Network Designer",
    visualLabel: "Topology • Routing • Security",
    visualCode: "33 ENDPOINTS",
    className: "visual-network-security",
    coverImage: "/assets/projects/network-security/network-security-topology.png",
    coverAlt:
      "Cisco Packet Tracer three-tier enterprise network topology with department, wireless, server, and guest network zones.",
    coverNote:
      "Three-tier topology with department, wireless, server, and guest network zones.",
    challenge:
      "Design an enterprise network that includes segmentation, routing redundancy, security controls, wireless access, and operational monitoring.",
    contribution:
      "Led the project design and implemented or integrated configurations with guidance and learning support during the development process.",
    outcome:
      "Produced a three-tier network with 33 endpoints, VLANs, inter-VLAN routing, OSPF, HSRP, LACP EtherChannel, ACLs, port security, WLC management, and Syslog monitoring.",
    technologies: [
      "Cisco Packet Tracer",
      "VLANs",
      "OSPF",
      "HSRP",
      "EtherChannel",
      "ACLs",
      "WLC",
      "Syslog",
    ],
    evidenceIntro:
      "Actual implementation and validation screenshots from the Cisco Packet Tracer enterprise-network project.",
    evidence: [
      {
        title: "Three-Tier Enterprise Topology",
        description:
          "Full Packet Tracer design showing the core, redundant distribution layer, departmental VLAN zones, servers, wireless access, and guest network segment.",
        src: "/assets/projects/network-security/network-security-topology.png",
        alt: "Full Cisco Packet Tracer three-tier enterprise network topology.",
        kind: "topology",
      },
      {
        title: "End-to-End Connectivity Validation",
        description:
          "Successful PDU tests validate inter-VLAN communication, core routing, internet access, wireless egress, and guest internet reachability.",
        src: "/assets/projects/network-security/network-security-pdu-success.png",
        alt: "Packet Tracer PDU List showing successful ICMP validation tests.",
        kind: "proof",
      },
      {
        title: "Guest ACL Enforcement",
        description:
          "Failed PDU tests show guest devices being blocked from reaching internal VLAN endpoints, validating the access-control policy.",
        src: "/assets/projects/network-security/network-security-acl-blocked.png",
        alt: "Packet Tracer PDU List showing failed guest-to-internal access attempts.",
        kind: "proof",
      },
      {
        title: "HSRP Active Gateway",
        description:
          "Distribution Switch A is the active gateway for the configured VLAN groups, using higher priority and preemption.",
        src: "/assets/projects/network-security/network-security-hsrp-a.png",
        alt: "Dist Switch A show standby brief output showing active HSRP state.",
        kind: "console",
      },
      {
        title: "HSRP Standby Gateway",
        description:
          "Distribution Switch B remains in standby state, ready to take over gateway service if the active switch becomes unavailable.",
        src: "/assets/projects/network-security/network-security-hsrp-b.png",
        alt: "Dist Switch B show standby brief output showing standby HSRP state.",
        kind: "console",
      },
      {
        title: "Syslog Event Monitoring",
        description:
          "Centralized Syslog view receiving configuration and interface-state events from the network device.",
        src: "/assets/projects/network-security/network-security-syslog.png",
        alt: "Cisco Packet Tracer Syslog service showing received device events.",
        kind: "monitor",
      },
      {
        title: "Wireless LAN Configuration",
        description:
          "Wireless controller configuration showing Sales_WiFi with WPA2 authentication and the separate Guest_WiFi WLAN.",
        src: "/assets/projects/network-security/network-security-wlan.png",
        alt: "Cisco wireless controller page showing Sales WiFi and Guest WiFi WLANs.",
        kind: "monitor",
      },
      "Syslog",
    ],
  },
  {
    id: "mri-vgg16",
    title: "MRI Brain Tumor Image Classification Using VGG16",
    subtitle: "Pattern Recognition Project",
    course: "Pattern Recognition",
    role: "Project Lead / Machine Learning Developer",
    visualLabel: "MRI Dataset • VGG16 • Evaluation",
    visualCode: "89.56% ACC.",
    className: "visual-mri",
    coverImage: "/assets/projects/mri-vgg16/mri-cover-samples.png",
    coverAlt:
      "Sample MRI images from the four classes used in the VGG16 brain tumor image-classification project.",
    coverNote:
      "MRI samples across Glioma, Meningioma, No Tumor, and Pituitary classes.",
    challenge:
      "Develop and evaluate an image-classification workflow that can distinguish four brain MRI categories using transfer learning.",
    contribution:
      "Led the project and developed the VGG16 transfer-learning workflow in Python and Google Colab, including preprocessing, augmentation, training, fine-tuning, evaluation, and result visualization.",
    outcome:
      "Evaluated a VGG16-based model using 7,200 MRI images across four classes. Final testing achieved 89.56% accuracy, 89.61% weighted precision, 89.56% weighted recall, and 89.31% weighted F1-score.",
    technologies: [
      "Python",
      "Google Colab",
      "VGG16",
      "TensorFlow",
      "Transfer Learning",
      "Data Augmentation",
      "Model Evaluation",
    ],
    evidenceIntro:
      "Academic machine-learning project documentation showing the dataset structure, training behavior, predictions, and final evaluation. This project is not a clinical diagnostic tool.",
    evidence: [
      {
        title: "Final Performance Metrics",
        description:
          "Final test evaluation: 89.56% accuracy, 89.61% weighted precision, 89.56% weighted recall, 89.31% weighted F1-score, and 0.3630 test loss.",
        src: "/assets/projects/mri-vgg16/mri-performance-metrics.png",
        alt: "Final VGG16 performance metrics table.",
        kind: "mri-metrics",
      },
      {
        title: "Confusion Matrix",
        description:
          "Raw-count and normalized confusion matrices showing class-level performance for Glioma, Meningioma, No Tumor, and Pituitary categories.",
        src: "/assets/projects/mri-vgg16/mri-confusion-matrix.png",
        alt: "VGG16 confusion matrix for four MRI classes.",
        kind: "mri-wide",
      },
      {
        title: "VGG16 Training History",
        description:
          "Training and validation accuracy and loss across the initial training and fine-tuning phases.",
        src: "/assets/projects/mri-vgg16/mri-training-history.png",
        alt: "VGG16 training and validation accuracy and loss history.",
        kind: "mri-wide",
      },
      {
        title: "Sample Predictions",
        description:
          "Twenty sample predictions showing actual labels, predicted labels, confidence scores, and transparent examples of both correct and incorrect classifications.",
        src: "/assets/projects/mri-vgg16/mri-sample-predictions.png",
        alt: "Twenty MRI sample predictions with actual and predicted labels.",
        kind: "mri-wide",
      },
      {
        title: "Dataset Distribution",
        description:
          "Balanced dataset structure: 1,400 training images and 400 testing images per class, for 5,600 training and 1,600 testing images overall.",
        src: "/assets/projects/mri-vgg16/mri-dataset-distribution.png",
        alt: "Dataset distribution chart for the four MRI classes.",
        kind: "mri-half",
      },
      {
        title: "Data Augmentation",
        description:
          "Original MRI image alongside augmented examples including rotation, horizontal flip, zoom, width shift, height shift, brightness adjustment, shear, and combined transformations.",
        src: "/assets/projects/mri-vgg16/mri-data-augmentation.png",
        alt: "MRI data augmentation examples.",
        kind: "mri-half",
      },
    ],
  },
  {
    id: "windsurf",
    title: "Windsurf",
    subtitle: "Interactive Data Structures and Algorithms Learning Platform",
    course: "Data Structures and Algorithms",
    role: "Project Lead / Web Development Contributor",
    visualLabel: "DSA Learning • Graph Visualizer • Team Project",
    visualCode: "6-MEMBER TEAM",
    className: "visual-windsurf",
    coverImage: "/assets/projects/windsurf/windsurf-route-visualizer.png",
    coverAlt:
      "Windsurf Metro Manila Railway Network route visualizer with station selection, route details, and estimated travel time.",
    coverNote:
      "Interactive Metro Manila railway route visualizer using graph concepts.",
    challenge:
      "Create a more approachable way to learn data structures and algorithms through interactive visualizations and practical examples.",
    contribution:
      "Led a six-member team and contributed to project direction, requirements, integration, testing, documentation, and selected web-development features in a collaborative workflow.",
    outcome:
      "Delivered an interactive learning platform with data-structure operations, sorting visualizations, and a Metro Manila rail-route visualizer featuring departure and destination selection, route display, estimated travel time, station progression, and destination voice alerts.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Python",
      "GitHub",
      "Graph Concepts",
    ],
    evidenceIntro:
      "Selected screens from the collaborative Windsurf learning platform. The project combines interactive data-structure and algorithm demonstrations with a graph-based Metro Manila railway route visualizer.",
    evidence: [
      {
        title: "Platform Homepage",
        description:
          "Landing page introducing Windsurf as an interactive platform for exploring data structures and algorithms.",
        src: "/assets/projects/windsurf/windsurf-home.png",
        alt: "Windsurf homepage introducing interactive data structures and algorithms learning.",
        kind: "windsurf-wide",
      },
      {
        title: "Learning Path Selection",
        description:
          "Structured entry point separating Data Structures and Algorithms learning paths.",
        src: "/assets/projects/windsurf/windsurf-learning-paths.png",
        alt: "Windsurf screen with Data Structures and Algorithms learning path choices.",
        kind: "windsurf-half",
      },
      {
        title: "Queue Operations Visualizer",
        description:
          "Interactive queue demonstration with enqueue, dequeue, peek, size, and activity-log features.",
        src: "/assets/projects/windsurf/windsurf-queue-operations.png",
        alt: "Windsurf queue operations visualizer with interactive controls and operation log.",
        kind: "windsurf-half",
      },
    ],
    demoLink: "https://windsurfdsa.up.railway.app",
    demoLabel: "Open live demo",
    link: "https://github.com/andreirtc/Windsurf",
    linkLabel: "View repository",
  },
];

const supportingProjects = [
  {
    id: "network-infrastructure",
    title: "Enterprise Network Infrastructure Design",
    subtitle: "Two-Storey Physical Network Architecture",
    course: "Data & Digital Communications",
    role: "Project Lead / Physical Network Designer",
    description:
      "Led the physical infrastructure design for a two-storey facility supporting 60+ endpoints. Planned device and rack placement, MDF/IDF structure, Wi-Fi coverage, structured cabling routes, and a redundant fiber-backbone concept.",
    scopeNote:
      "This project focused on physical network design. I did not personally build the Packet Tracer logical configuration.",
    tags: ["Network Design", "MDF / IDF", "Fiber Backbone", "Wi-Fi Planning"],
    coverImage:
      "/assets/projects/network-infrastructure/network-infrastructure-physical-topology.png",
    coverAlt:
      "Two-storey enterprise physical network topology showing the MDF, IDF, network racks, departments, endpoint counts, and fiber backbone.",
    evidenceIntro:
      "Physical infrastructure planning materials showing endpoint placement, Wi-Fi coverage, structured cabling, and inter-floor backbone routing.",
    evidence: [
      {
        title: "Network Device Placement and Layout",
        description:
          "Two-storey floor layout showing endpoint allocation, access points, printers, cameras, IP phones, and rack locations across departments.",
        src:
          "/assets/projects/network-infrastructure/network-infrastructure-device-placement.png",
        alt: "Two-storey floor plan showing network device placement and Wi-Fi access-point locations.",
      },
      {
        title: "Structured Cabling and Wiring Route Plan",
        description:
          "Cable-route plan showing CAT6 data runs, PoE cabling, the fiber-optic backbone, and the cable-riser connection between floors.",
        src:
          "/assets/projects/network-infrastructure/network-infrastructure-cabling-plan.png",
        alt: "Two-storey structured cabling plan showing CAT6, PoE, fiber backbone, and cable riser routes.",
      },
    ],
  },
  {
    title: "ActiveCampus Go",
    role: "UI and Visual Asset Contributor",
    description:
      "Contributed pixel-art visual assets and interface ideas for a gamified, location-based campus fitness platform during the PUP Technology Festival 2025 Hackathon.",
    tags: ["UI Contribution", "Pixel Art", "Hackathon", "Team Repository"],
    link: "https://github.com/aidantiu/ActiveCAMPUS-Go",
    linkLabel: "View team repository",
  },
];

function ExternalArrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 5h5v5" />
      <path d="M19 5 10 14" />
      <path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 14.1A8.5 8.5 0 0 1 9.9 3.5 8.5 8.5 0 1 0 20.5 14.1Z" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="8" y="8" width="11" height="11" rx="2" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") || "light";
    } catch {
      return "light";
    }
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The site still works even when browser storage is unavailable.
    }
  }, [theme]);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const motionTargets = Array.from(
      document.querySelectorAll(
        ".hero-copy, .profile-card, .proof-card, .section-heading, .about-content, .experience-card, .project-card, .supporting-project-card, .skill-card, .credential-card, .resource-card, .contact-card"
      )
    );

    motionTargets.forEach((target, index) => {
      target.classList.add("reveal");
      target.style.setProperty("--reveal-delay", `${(index % 4) * 110}ms`);
    });

    if (prefersReducedMotion) {
      motionTargets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -36px 0px",
      }
    );

    motionTargets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);

      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Go to top">
            <span className="brand-mark">RC</span>

            <span className="brand-text">
              Ralph Castillo
              <small>Computer Engineering</small>
            </span>
          </a>

          <nav className="main-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </header>

      <main id="main-content">
        <section id="top" className="hero section-space">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Open to internship opportunities</p>

              <h1>
                Hands-on computer engineering for systems that need{" "}
                <span>to work.</span>
              </h1>

              <p className="hero-description">
                I am Ralph Andrei T. Castillo, a third-year BS Computer
                Engineering student at Polytechnic University of the Philippines
                – Sta. Mesa. I bring practical experience in technical
                troubleshooting, hardware integration, network design, and
                project leadership.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore projects
                </a>

                <a
                  className="button button-secondary"
                  href={`mailto:${EMAIL}?subject=Internship%20Opportunity%20for%20Ralph%20Castillo`}
                >
                  Email me
                  <ExternalArrow />
                </a>
              </div>

              <div className="hero-availability">
                <span className="availability-dot" />
                Seeking internships in IT support, hardware, embedded systems,
                networking, and entry-level software development.
              </div>
            </div>

            <aside className="profile-card" aria-label="Professional profile">
              <div className="profile-photo-placeholder">
                <div className="photo-grid" />
                <div className="profile-monogram">RC</div>
                <p>Professional photo will be added here</p>
              </div>

              <div className="profile-card-info">
                <div>
                  <p className="profile-name">Ralph Andrei T. Castillo</p>
                  <p className="profile-role">Computer Engineering Student</p>
                </div>

                <span className="profile-location">Metro Manila, PH</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="proof-section">
          <div className="container proof-grid">
            <article className="proof-card">
              <p className="proof-number">400+</p>
              <p className="proof-label">
                desktops, laptops, all-in-one PCs, mini PCs, and server units
                tested and documented
              </p>
            </article>

            <article className="proof-card">
              <p className="proof-number">100+</p>
              <p className="proof-label">
                desktops assembled during technical internship work
              </p>
            </article>

            <article className="proof-card">
              <p className="proof-number">2021</p>
              <p className="proof-label">
                started paid referral-based computer repair and technical support
              </p>
            </article>
          </div>
        </section>

        <section id="about" className="section-space">
          <div className="container about-grid">
            <SectionHeading
              eyebrow="About"
              title="Practical first. Curious always."
              description="I am most effective where troubleshooting, testing, documentation, and system integration meet."
            />

            <div className="about-content">
              <p>
                My strongest work is grounded in hands-on technical problem
                solving: diagnosing PCs, upgrading components, validating
                system readiness, documenting defects, and integrating embedded
                hardware into complete prototypes.
              </p>

              <p>
                I also have academic experience in networking, machine learning,
                and web projects. I approach these areas honestly as growing
                skills, with emphasis on requirements, collaboration,
                integration, testing, and clear technical documentation.
              </p>

              <div className="focus-list">
                <div>
                  <span>01</span>
                  <p>Hardware troubleshooting and upgrade work</p>
                </div>
                <div>
                  <span>02</span>
                  <p>Embedded-system integration and testing</p>
                </div>
                <div>
                  <span>03</span>
                  <p>Networking design and technical documentation</p>
                </div>
                <div>
                  <span>04</span>
                  <p>Project leadership and collaborative delivery</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section-space section-tinted">
          <div className="container">
            <SectionHeading
              eyebrow="Experience"
              title="Built through real technical work."
              description="Experience across enterprise hardware workflows, referral-based repair work, and technical communication."
            />

            <div className="experience-list">
              {experiences.map((experience) => (
                <article className="experience-card" key={experience.role}>
                  <div className="experience-meta">
                    <p>{experience.period}</p>
                    <span>{experience.location}</span>
                  </div>

                  <div className="experience-details">
                    <h3>{experience.role}</h3>
                    <p className="experience-company">{experience.company}</p>

                    <ul>
                      {experience.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-space">
          <div className="container">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Projects with technical depth and clear ownership."
              description="Each project highlights my specific role, contribution, and outcome without overstating individual ownership."
            />

            <div className="featured-project-grid">
              {featuredProjects.map((project) => (
                <article className="project-card" key={project.id}>
                  <div
                    className={`project-visual ${project.className} ${
                      project.coverImage ? "has-cover" : ""
                    }`}
                  >
                    {project.coverImage && (
                      <img
                        className="project-cover-image"
                        src={project.coverImage}
                        alt={project.coverAlt}
                      />
                    )}

                    <div className="project-visual-top">
                      <span>{project.visualLabel}</span>
                      <span>
                        {project.coverImage ? "Prototype overview" : "Portfolio evidence"}
                      </span>
                    </div>

                    {!project.coverImage && (
                      <p className="project-visual-code">{project.visualCode}</p>
                    )}

                    <p className="project-visual-bottom">
                      {project.coverImage
                        ? project.coverNote
                        : "Project visual will be added after documentation is ready."}
                    </p>
                  </div>

                  <div className="project-content">
                    <div className="project-heading">
                      <div>
                        <p className="project-course">{project.course}</p>
                        <h3>{project.title}</h3>
                        <p className="project-subtitle">{project.subtitle}</p>
                      </div>
                    </div>

                    <p className="project-role">{project.role}</p>

                    <div className="project-detail">
                      <span>Challenge</span>
                      <p>{project.challenge}</p>
                    </div>

                    <div className="project-detail">
                      <span>Contribution</span>
                      <p>{project.contribution}</p>
                    </div>

                    <div className="project-detail">
                      <span>Outcome</span>
                      <p>{project.outcome}</p>
                    </div>

                    <div className="tag-list">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    {project.evidence && (
                      <details className="evidence-details">
                        <summary>
                          <span>Explore technical evidence</span>
                          <span className="evidence-summary-meta">
                            {project.evidence.length} items
                          </span>
                          <span className="evidence-summary-icon">+</span>
                        </summary>

                        <div className="evidence-panel">
                          <p className="evidence-intro">{project.evidenceIntro}</p>

                          <div className="evidence-gallery">
                            {project.evidence.map((item) => (
                              <figure
                                className={`evidence-item evidence-item--${item.kind}`}
                                key={item.title}
                              >
                                <a
                                  className="evidence-media"
                                  href={item.src}
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label={`Open ${item.title} in full size`}
                                >
                                  <img
                                    src={item.src}
                                    alt={item.alt}
                                    loading="lazy"
                                  />
                                  <span className="evidence-open">
                                    Open image
                                    <ExternalArrow />
                                  </span>
                                </a>

                                <figcaption>
                                  <strong>{item.title}</strong>
                                  <span>{item.description}</span>
                                </figcaption>
                              </figure>
                            ))}
                          </div>
                        </div>
                      </details>
                    )}

                    {(project.demoLink || project.link) && (
                      <div className="project-actions">
                        {project.demoLink && (
                          <a
                            className="project-link project-link-demo"
                            href={project.demoLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {project.demoLabel}
                            <ExternalArrow />
                          </a>
                        )}

                        {project.link && (
                          <a
                            className="project-link"
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {project.linkLabel}
                            <ExternalArrow />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="supporting-projects">
              {supportingProjects.map((project) => (
                <article
                  className={`supporting-project-card ${
                    project.coverImage ? "supporting-project-card--visual" : ""
                  }`}
                  key={project.id || project.title}
                >
                  {project.coverImage && (
                    <div className="supporting-project-cover">
                      <img src={project.coverImage} alt={project.coverAlt} />
                      <div className="supporting-project-cover-label">
                        <span>{project.course}</span>
                        <span>Physical infrastructure design</span>
                      </div>
                    </div>
                  )}

                  <div className="supporting-project-body">
                    <p className="project-course">Supporting project</p>
                    <h3>{project.title}</h3>
                    {project.subtitle && (
                      <p className="project-subtitle">{project.subtitle}</p>
                    )}
                    <p className="project-role">{project.role}</p>
                    <p className="supporting-project-description">
                      {project.description}
                    </p>
                    {project.scopeNote && (
                      <p className="supporting-project-note">
                        <strong>Scope:</strong> {project.scopeNote}
                      </p>
                    )}

                    <div className="tag-list">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    {project.evidence && (
                      <details className="supporting-evidence">
                        <summary>
                          <span>Explore design evidence</span>
                          <span>{project.evidence.length} items</span>
                          <span className="evidence-summary-icon">+</span>
                        </summary>

                        <div className="supporting-evidence-panel">
                          <p>{project.evidenceIntro}</p>

                          <div className="supporting-evidence-gallery">
                            {project.evidence.map((item) => (
                              <figure key={item.title}>
                                <a
                                  href={item.src}
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label={`Open ${item.title} in full size`}
                                >
                                  <img
                                    src={item.src}
                                    alt={item.alt}
                                    loading="lazy"
                                  />
                                </a>

                                <figcaption>
                                  <strong>{item.title}</strong>
                                  <span>{item.description}</span>
                                </figcaption>
                              </figure>
                            ))}
                          </div>
                        </div>
                      </details>
                    )}

                    {project.link && (
                      <a
                        className="project-link"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.linkLabel}
                        <ExternalArrow />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section-space section-tinted">
          <div className="container">
            <SectionHeading
              eyebrow="Skills & Tools"
              title="A focused toolkit, not inflated labels."
              description="These are areas I have used in real work or project settings. My strongest depth is in hardware, technical support, embedded integration, and documentation."
            />

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>

                  <div className="tag-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container credentials-grid">
            <div>
              <SectionHeading
                eyebrow="Education"
                title="Computer Engineering at PUP."
                description="Academic work supported by hands-on projects, technical leadership, and multiple semesters as a President’s and Dean’s Lister."
              />
            </div>

            <div className="credential-card">
              <p className="credential-label">
                Bachelor of Science in Computer Engineering
              </p>
              <h3>Polytechnic University of the Philippines – Sta. Mesa</h3>
              <p>September 2023 – Present</p>
              <p>Expected graduation: September 2027</p>

              <hr />

              <p className="credential-label">Cisco Networking Academy</p>
              <ul>
                <li>CCNA 1: Introduction to Networks</li>
                <li>CCNA 2: Switching, Routing, and Wireless Essentials</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="resume" className="section-space section-tinted">
          <div className="container resource-grid">
            <article className="resource-card">
              <p className="eyebrow">Resume</p>
              <h2>Updated resume PDF coming next.</h2>
              <p>
                Once you finish updating your resume with this portfolio link,
                we will add the downloadable file here as{" "}
                <strong>Ralph-Andrei-Castillo-Resume.pdf</strong>.
              </p>

              <a className="text-link" href="#contact">
                Request a resume by email
                <ExternalArrow />
              </a>
            </article>

            <article className="resource-card">
              <p className="eyebrow">GitHub & LinkedIn</p>
              <h2>See my work and professional profile.</h2>
              <p>
                GitHub will show selected repositories and project files as they
                are documented. LinkedIn remains the best place to view my
                current academic and internship background.
              </p>

              <div className="resource-links">
                <a href={GITHUB} target="_blank" rel="noreferrer">
                  GitHub profile
                  <ExternalArrow />
                </a>

                <a href={LINKEDIN} target="_blank" rel="noreferrer">
                  LinkedIn profile
                  <ExternalArrow />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s discuss an internship opportunity.</h2>
              <p>
                I am open to opportunities in general computer engineering, IT
                support, hardware and technical support, embedded systems,
                networking, and entry-level software or web development.
              </p>
            </div>

            <div className="contact-card">
              <p className="contact-label">Email</p>
              <a className="contact-email" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>

              <div className="contact-actions">
                <a
                  className="button button-primary"
                  href={`mailto:${EMAIL}?subject=Internship%20Opportunity%20for%20Ralph%20Castillo`}
                >
                  Start an email
                </a>

                <button
                  className="button button-secondary"
                  type="button"
                  onClick={handleCopyEmail}
                >
                  <CopyIcon />
                  {copied ? "Copied" : "Copy email"}
                </button>
              </div>

              <div className="contact-meta">
                <span>Caloocan, Metro Manila, Philippines</span>
                <a href={LINKEDIN} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={GITHUB} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Ralph Andrei T. Castillo</p>
          <p>Built with React, CSS, and attention to technical detail.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;