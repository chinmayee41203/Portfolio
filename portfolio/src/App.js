import { useState, useEffect, useRef } from "react";

const COLORS = {
  bg: "#0a0f1a",
  surface: "#0f1825",
  surface2: "#152030",
  border: "#1a2d45",
  border2: "#1e3a5f",
  accent: "#2563eb",
  accent2: "#3b82f6",
  gold: "#f59e0b",
  teal: "#0d9488",
  rose: "#e11d48",
  text: "#e8edf5",
  text2: "#8ba3bc",
  text3: "#3d5a78",
};

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

const SKILLS = {
  "Languages & Libraries": ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Keras", "OpenCV", "SciPy", "NLP", "R"],
  "Visualization & BI": ["Power BI", "Tableau", "Seaborn", "Matplotlib", "Excel", "Google Sheets"],
  "AI & ML": ["Machine Learning", "Supervised Learning", "Unsupervised Learning", "GANs", "Autoencoders", "Classification", "Regression", "Random Forest"],
  "Tools & Platforms": ["SQL", "VS Code", "Jupyter Notebook", "Google Colab", "React", "TypeScript", "TailwindCSS", "Supabase", "Git"],
};

const PROJECTS = [
  {
    id: 1,
    title: "Airbnb Rating Analysis",
    period: "2026",
    tag: "Machine Learning · R · NLP",
    color: COLORS.rose,
    icon: "★",
    desc: "Analyzed 63,586 guest reviews to identify which listing features — host response, amenities, location — most significantly impact Airbnb ratings.",
    bullets: [
      "Trained Linear Regression, Lasso, and Random Forest models",
      "Random Forest achieved best RMSE of 0.640 vs 0.672 baseline",
      "Sentiment NLP on 63K+ reviews with feature-level analysis",
      "Host response rate & amenities ranked as top predictors",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/chinmayee41203/airbnb-rating-analysis" },
      { label: "Report", url: "https://github.com/chinmayee41203/airbnb-rating-analysis/blob/main/airbnb_analysis.html" },
    ],
    stack: ["R", "Random Forest", "Lasso", "NLP", "ggplot2"],
  },
  {
    id: 2,
    title: "Neural Dimensions: GAN & Autoencoder Explorer",
    period: "Apr – May 2025",
    tag: "Deep Learning · React · TypeScript",
    color: COLORS.accent,
    icon: "⬡",
    desc: "Interactive web app to demonstrate GAN style transfer and Autoencoder-based image compression with real-time parameterized visualizations.",
    bullets: [
      "Built with React, TypeScript, and TailwindCSS",
      "Style intensity, compression level, and noise controls",
      "Real-time neural transformation visualizations",
      "Deep learning architectures: GANs & Autoencoders",
    ],
    links: [],
    stack: ["React", "TypeScript", "TailwindCSS", "GANs", "Autoencoders"],
  },
  {
    id: 3,
    title: "Smart Parking System Using AI",
    period: "Jun – Apr 2025",
    tag: "AI · React · NLP · Supabase",
    color: COLORS.teal,
    icon: "◈",
    desc: "AI-powered smart parking platform with real-time slot allocation, bookings, and NLP-based voice commands for optimal slot recommendations.",
    bullets: [
      "Real-time slot allocation and secure digital payments",
      "NLP voice command engine for hands-free parking search",
      "Recommendations based on preferences, vehicle type, history",
      "Built with React, TypeScript, and Supabase backend",
    ],
    links: [],
    stack: ["React", "TypeScript", "Supabase", "NLP", "AI"],
  },
  {
    id: 4,
    title: "Brain Tumor Detection",
    period: "Jan – May 2024",
    tag: "ML · Computer Vision · Python",
    color: COLORS.gold,
    icon: "◎",
    desc: "ML system for brain tumor detection from MRI scans using SVM, KNN, Logistic Regression, Naive Bayes, and MLP achieving up to 83% accuracy.",
    bullets: [
      "Full pipeline: preprocessing → feature extraction → training",
      "5 models: SVM, KNN, LR, Naive Bayes, MLP",
      "Up to ~83% classification accuracy",
      "Evaluated with precision, recall, F1, ROC curves",
    ],
    links: [],
    stack: ["Python", "scikit-learn", "TensorFlow", "OpenCV", "SVM", "MLP"],
  },
  {
    id: 5,
    title: "Blinkit Sales Dashboard",
    period: "Jun – Jul 2025",
    tag: "Power BI · DAX · Data Analytics",
    color: "#10b981",
    icon: "▦",
    desc: "End-to-end Power BI dashboard for Blinkit sales analytics covering $1.2M across 8,523 items — from requirement gathering to actionable insights.",
    bullets: [
      "$1.2M in sales across 8,523 items analyzed",
      "Full lifecycle: requirements → cleaning → modeling → insights",
      "DAX calculations for KPIs: Total Sales, Avg Sales, Ratings",
      "Interactive reports with slicers and Power Query",
    ],
    links: [],
    stack: ["Power BI", "DAX", "Power Query", "Data Modeling"],
  },
];

const EXPERIENCE = [
  {
    role: "Intern",
    company: "CODSOFT",
    period: "Jun – Jul 2024",
    color: COLORS.accent,
    desc: "Applied Python ML for classification and regression tasks. Built Credit Card Fraud Detection, Movie Rating Prediction, and Titanic Survival Analysis.",
    stack: ["Python", "scikit-learn", "Pandas", "NumPy"],
  },
];

// ── COMPONENTS ──

function NavBar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      height: 60,
      background: scrolled ? "rgba(10,15,26,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? `1px solid ${COLORS.border}` : "1px solid transparent",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 48px",
      transition: "all 0.3s ease",
    }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: COLORS.text2 }}>
        <span style={{ color: COLORS.accent2 }}>cm</span>
        <span style={{ color: COLORS.text3 }}>.portfolio</span>
      </div>

      <div style={{ display: "flex", gap: 4 }}>
        {NAV_LINKS.map(l => (
          <button key={l} onClick={() => scrollTo(l)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'Manrope', sans-serif", fontSize: "0.82rem",
              fontWeight: 500, color: active === l ? COLORS.accent2 : COLORS.text2,
              padding: "6px 14px", borderRadius: 6,
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.target.style.color = COLORS.text}
            onMouseLeave={e => e.target.style.color = active === l ? COLORS.accent2 : COLORS.text2}
          >{l}</button>
        ))}
      </div>

      <a href="https://github.com/chinmayee41203" target="_blank" rel="noreferrer"
        style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem",
          padding: "7px 16px", background: COLORS.accent,
          color: "white", borderRadius: 6, textDecoration: "none",
          fontWeight: 500, transition: "background 0.2s",
        }}
        onMouseEnter={e => e.target.style.background = COLORS.accent2}
        onMouseLeave={e => e.target.style.background = COLORS.accent}
      >GitHub ↗</a>
    </nav>
  );
}

function Tag({ children, color = COLORS.accent }) {
  return (
    <span style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: "0.65rem", padding: "3px 10px",
      background: color + "18", color,
      border: `1px solid ${color}44`, borderRadius: 20,
      letterSpacing: "0.04em",
    }}>{children}</span>
  );
}

function Hero() {
  const [typed, setTyped] = useState("");
  const titles = ["Data Scientist", "ML Engineer", "AI Researcher", "Data Analyst"];
  const [ti, setTi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = titles[ti];
    let timeout;
    if (!deleting && typed.length < target.length) {
      timeout = setTimeout(() => setTyped(target.slice(0, typed.length + 1)), 80);
    } else if (!deleting && typed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(typed.slice(0, -1)), 45);
    } else if (deleting && typed.length === 0) {
      setDeleting(false);
      setTi((ti + 1) % titles.length);
    }
    return () => clearTimeout(timeout);
  }, [typed, deleting, ti]);

  return (
    <section id="about" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "80px 80px 60px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `linear-gradient(${COLORS.border}22 1px, transparent 1px), linear-gradient(90deg, ${COLORS.border}22 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
      }} />
      {/* Glow */}
      <div style={{
        position: "absolute", top: "20%", left: "5%",
        width: 500, height: 500,
        background: `radial-gradient(circle, ${COLORS.accent}0d 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "15%",
        width: 350, height: 350,
        background: `radial-gradient(circle, ${COLORS.teal}0a 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 760 }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "6px 14px", marginBottom: 32,
          border: `1px solid ${COLORS.border2}`,
          borderRadius: 20, background: COLORS.surface,
        }}>
          <span style={{
            width: 7, height: 7, background: "#10b981",
            borderRadius: "50%", boxShadow: "0 0 8px #10b981",
            animation: "pulse 2s ease-in-out infinite",
          }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: COLORS.text2 }}>
            Open to opportunities · Stevens Institute of Technology
          </span>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(3rem, 6vw, 5.5rem)",
          fontWeight: 400, lineHeight: 1.05,
          color: COLORS.text, marginBottom: 16,
          letterSpacing: "-0.02em",
        }}>
          Chinmayee<br />
          <span style={{ color: COLORS.accent2 }}>Mayekar</span>
        </h1>

        {/* Typewriter */}
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "clamp(1rem, 2vw, 1.4rem)",
          color: COLORS.text2, marginBottom: 28,
          minHeight: "2rem",
        }}>
          <span style={{ color: COLORS.text3 }}>$ </span>
          <span style={{ color: COLORS.gold }}>{typed}</span>
          <span style={{
            display: "inline-block", width: 3, height: "1.1em",
            background: COLORS.gold, verticalAlign: "middle",
            marginLeft: 2, animation: "blink 1s step-end infinite",
          }} />
        </div>

        {/* Bio */}
        <p style={{
          fontSize: "1rem", color: COLORS.text2,
          lineHeight: 1.8, maxWidth: 580, marginBottom: 40,
          fontWeight: 300,
        }}>
          MS Data Science candidate at{" "}
          <span style={{ color: COLORS.text, fontWeight: 500 }}>Stevens Institute of Technology</span>{" "}
          (May 2027). Building AI systems and data pipelines that turn raw data into
          decisions — from brain tumor detection to Airbnb rating analysis.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
          <a href="https://github.com/chinmayee41203" target="_blank" rel="noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "11px 24px", background: COLORS.accent,
              color: "white", borderRadius: 7, textDecoration: "none",
              fontFamily: "'Manrope', sans-serif", fontSize: "0.85rem", fontWeight: 600,
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = COLORS.accent2; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = COLORS.accent; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <GithubIcon /> GitHub Profile
          </a>
          <a href="https://www.linkedin.com/in/chinmayee-mayekar" target="_blank" rel="noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "11px 24px", background: "transparent",
              color: COLORS.text2, borderRadius: 7, textDecoration: "none",
              fontFamily: "'Manrope', sans-serif", fontSize: "0.85rem", fontWeight: 500,
              border: `1px solid ${COLORS.border2}`, transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.accent2; e.currentTarget.style.color = COLORS.text; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border2; e.currentTarget.style.color = COLORS.text2; }}
          >
            LinkedIn ↗
          </a>
          <a href="mailto:cmayekar@stevens.edu"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "11px 24px", background: "transparent",
              color: COLORS.text2, borderRadius: 7, textDecoration: "none",
              fontFamily: "'Manrope', sans-serif", fontSize: "0.85rem", fontWeight: 500,
              border: `1px solid ${COLORS.border2}`, transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.gold; e.currentTarget.style.color = COLORS.gold; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border2; e.currentTarget.style.color = COLORS.text2; }}
          >
            ✉ Email Me
          </a>
        </div>

        {/* Stats strip */}
        <div style={{
          display: "flex", gap: 0,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 8, overflow: "hidden",
          background: COLORS.surface,
          width: "fit-content",
        }}>
          {[
            { val: "5+", label: "Projects" },
            { val: "MS", label: "Data Science" },
            { val: "83%", label: "Best Model Acc." },
            { val: "63K", label: "Reviews Analyzed" },
          ].map((s, i) => (
            <div key={i} style={{
              padding: "16px 28px",
              borderRight: i < 3 ? `1px solid ${COLORS.border}` : "none",
            }}>
              <div style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "1.6rem", color: COLORS.text, lineHeight: 1,
              }}>{s.val}</div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.62rem", color: COLORS.text3,
                marginTop: 4, textTransform: "uppercase", letterSpacing: "0.08em",
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.3)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" style={{
      padding: "100px 80px",
      background: COLORS.surface,
      borderTop: `1px solid ${COLORS.border}`,
      borderBottom: `1px solid ${COLORS.border}`,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader tag="02 // Skills" title="Tech Stack &" accent="Expertise" />

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16,
        }}>
          {Object.entries(SKILLS).map(([cat, items], i) => (
            <div key={cat} style={{
              background: COLORS.bg, border: `1px solid ${COLORS.border}`,
              borderRadius: 10, padding: 28,
              borderTop: `2px solid ${[COLORS.accent, COLORS.teal, COLORS.gold, COLORS.rose][i]}`,
              transition: "transform 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.68rem", color: COLORS.text3,
                textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16,
              }}>{cat}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {items.map(skill => (
                  <span key={skill} style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.75rem", padding: "5px 12px",
                    background: COLORS.surface2, color: COLORS.text2,
                    border: `1px solid ${COLORS.border2}`,
                    borderRadius: 5, transition: "all 0.15s", cursor: "default",
                  }}
                    onMouseEnter={e => { e.target.style.color = COLORS.text; e.target.style.borderColor = COLORS.accent + "88"; }}
                    onMouseLeave={e => { e.target.style.color = COLORS.text2; e.target.style.borderColor = COLORS.border2; }}
                  >{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div style={{ marginTop: 24, background: COLORS.bg, border: `1px solid ${COLORS.border}`, borderRadius: 10, padding: 28 }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.68rem", color: COLORS.text3,
            textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16,
          }}>Certifications & Workshops</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              "Python Programming Bootcamp",
              "AI-ML Virtual Internship — Google for Developers",
              "Cybersecurity Workshop",
              "Ethical Hacking Workshop",
              "Blockchain Technology Workshop",
            ].map(cert => (
              <span key={cert} style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.78rem", padding: "5px 14px",
                background: COLORS.gold + "12", color: COLORS.gold,
                border: `1px solid ${COLORS.gold}33`, borderRadius: 20,
              }}>{cert}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [active, setActive] = useState(0);
  const proj = PROJECTS[active];

  return (
    <section id="projects" style={{ padding: "100px 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader tag="03 // Projects" title="Selected" accent="Work" />

        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 20 }}>
          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {PROJECTS.map((p, i) => (
              <button key={p.id} onClick={() => setActive(i)}
                style={{
                  background: active === i ? COLORS.surface2 : "transparent",
                  border: `1px solid ${active === i ? p.color + "66" : COLORS.border}`,
                  borderLeft: active === i ? `3px solid ${p.color}` : `3px solid transparent`,
                  borderRadius: 8, padding: "14px 16px",
                  cursor: "pointer", textAlign: "left", transition: "all 0.15s",
                }}
                onMouseEnter={e => { if (active !== i) e.currentTarget.style.borderColor = COLORS.border2; }}
                onMouseLeave={e => { if (active !== i) e.currentTarget.style.borderColor = COLORS.border; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: "1rem", color: p.color }}>{p.icon}</span>
                  <div>
                    <div style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "0.82rem", fontWeight: 600,
                      color: active === i ? COLORS.text : COLORS.text2,
                      lineHeight: 1.3,
                    }}>{p.title}</div>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.62rem", color: COLORS.text3, marginTop: 3,
                    }}>{p.period}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div style={{
            background: COLORS.surface, border: `1px solid ${COLORS.border}`,
            borderTop: `2px solid ${proj.color}`,
            borderRadius: 10, padding: 36,
          }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
              <div>
                <div style={{ marginBottom: 10 }}>
                  <Tag color={proj.color}>{proj.tag}</Tag>
                </div>
                <h3 style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "1.6rem", color: COLORS.text, lineHeight: 1.2,
                }}>{proj.title}</h3>
              </div>
              <span style={{ fontSize: "2rem", color: proj.color, opacity: 0.6 }}>{proj.icon}</span>
            </div>

            <p style={{ fontSize: "0.9rem", color: COLORS.text2, lineHeight: 1.8, marginBottom: 24 }}>{proj.desc}</p>

            <div style={{ marginBottom: 24 }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem", color: COLORS.text3,
                textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12,
              }}>Key Contributions</div>
              {proj.bullets.map((b, i) => (
                <div key={i} style={{
                  display: "flex", gap: 10, alignItems: "flex-start",
                  marginBottom: 8,
                }}>
                  <span style={{ color: proj.color, marginTop: 2, flexShrink: 0 }}>▸</span>
                  <span style={{ fontSize: "0.85rem", color: COLORS.text2, lineHeight: 1.6 }}>{b}</span>
                </div>
              ))}
            </div>

            {/* Stack */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
              {proj.stack.map(s => (
                <span key={s} style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.68rem", padding: "4px 10px",
                  background: COLORS.surface2, color: COLORS.text3,
                  border: `1px solid ${COLORS.border}`, borderRadius: 4,
                }}>{s}</span>
              ))}
            </div>

            {/* Links */}
            {proj.links.length > 0 && (
              <div style={{ display: "flex", gap: 10 }}>
                {proj.links.map(l => (
                  <a key={l.label} href={l.url} target="_blank" rel="noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      padding: "8px 18px", background: proj.color,
                      color: "white", borderRadius: 6, textDecoration: "none",
                      fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", fontWeight: 600,
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                    onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                  >{l.label} ↗</a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" style={{
      padding: "100px 80px",
      background: COLORS.surface,
      borderTop: `1px solid ${COLORS.border}`,
      borderBottom: `1px solid ${COLORS.border}`,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader tag="04 // Experience" title="Education &" accent="Work" />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {/* Education */}
          <div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem", color: COLORS.text3,
              textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16,
            }}>Education</div>
            {[
              {
                degree: "Master of Science in Data Science",
                school: "Stevens Institute of Technology",
                location: "Hoboken, NJ",
                period: "Expected May 2027",
                color: COLORS.accent,
                courses: ["Statistical Methods", "Numerical Linear Algebra for Big Data", "Marketing Analytics"],
              },
              {
                degree: "Bachelor of Engineering in AI & Data Science",
                school: "Datta Meghe College of Engineering",
                location: "Airoli",
                period: "May 2025",
                color: COLORS.teal,
                gpa: "GPA: 3.3",
              },
            ].map((e, i) => (
              <div key={i} style={{
                background: COLORS.bg, border: `1px solid ${COLORS.border}`,
                borderLeft: `3px solid ${e.color}`,
                borderRadius: 8, padding: 24, marginBottom: 12,
              }}>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem", color: e.color,
                  marginBottom: 8, letterSpacing: "0.06em",
                }}>{e.period}</div>
                <div style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "1rem", color: COLORS.text, marginBottom: 4,
                }}>{e.degree}</div>
                <div style={{ fontSize: "0.82rem", color: COLORS.text2, marginBottom: e.courses ? 12 : 0 }}>
                  {e.school} · {e.location} {e.gpa ? `· ${e.gpa}` : ""}
                </div>
                {e.courses && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                    {e.courses.map(c => (
                      <span key={c} style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.62rem", padding: "3px 8px",
                        background: e.color + "14", color: e.color,
                        border: `1px solid ${e.color}33`, borderRadius: 4,
                      }}>{c}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Work + Volunteer */}
          <div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem", color: COLORS.text3,
              textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16,
            }}>Work & Volunteer</div>

            {EXPERIENCE.map((e, i) => (
              <div key={i} style={{
                background: COLORS.bg, border: `1px solid ${COLORS.border}`,
                borderLeft: `3px solid ${e.color}`,
                borderRadius: 8, padding: 24, marginBottom: 12,
              }}>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem", color: e.color, marginBottom: 8,
                }}>{e.period}</div>
                <div style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "1rem", color: COLORS.text, marginBottom: 2,
                }}>{e.role}</div>
                <div style={{ fontSize: "0.82rem", color: COLORS.text2, marginBottom: 10 }}>{e.company}</div>
                <p style={{ fontSize: "0.82rem", color: COLORS.text2, lineHeight: 1.7, marginBottom: 12 }}>{e.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {e.stack.map(s => (
                    <span key={s} style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.62rem", padding: "3px 8px",
                      background: COLORS.surface2, color: COLORS.text3,
                      border: `1px solid ${COLORS.border}`, borderRadius: 4,
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}

            {/* Volunteer */}
            <div style={{
              background: COLORS.bg, border: `1px solid ${COLORS.border}`,
              borderLeft: `3px solid ${COLORS.gold}`,
              borderRadius: 8, padding: 24,
            }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem", color: COLORS.gold, marginBottom: 8,
              }}>Volunteer Activities</div>
              <div style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "1rem", color: COLORS.text, marginBottom: 10,
              }}>CSI — Creative & Social Lead</div>
              <p style={{ fontSize: "0.82rem", color: COLORS.text2, lineHeight: 1.7 }}>
                Graphics Head, Creative Head, Social Media Team Lead at CSI. Nonprofit volunteering and community social work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 80px" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.68rem", color: COLORS.accent,
          textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16,
        }}>05 // Contact</div>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(2rem, 4vw, 3.2rem)",
          color: COLORS.text, lineHeight: 1.15, marginBottom: 20,
        }}>
          Let's <span style={{ color: COLORS.accent2 }}>connect</span>
        </h2>
        <p style={{ fontSize: "0.95rem", color: COLORS.text2, lineHeight: 1.8, marginBottom: 48 }}>
          I'm actively looking for internships and full-time roles in Data Science and ML. Open to research collaborations, project work, and conversations about AI.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
          {[
            { label: "cmayekar@stevens.edu", href: "mailto:cmayekar@stevens.edu", icon: "✉", color: COLORS.gold },
            { label: "github.com/chinmayee41203", href: "https://github.com/chinmayee41203", icon: "⌥", color: COLORS.accent2 },
            { label: "linkedin.com/in/chinmayee-mayekar", href: "https://www.linkedin.com/in/chinmayee-mayekar", icon: "in", color: COLORS.teal },
          ].map(item => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 12,
                padding: "14px 32px", width: "100%", maxWidth: 400,
                background: COLORS.surface, border: `1px solid ${COLORS.border}`,
                borderRadius: 8, textDecoration: "none",
                fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem",
                color: COLORS.text2, transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = item.color; e.currentTarget.style.color = item.color; e.currentTarget.style.background = item.color + "0d"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.color = COLORS.text2; e.currentTarget.style.background = COLORS.surface; }}
            >
              <span style={{ color: item.color, width: 20, textAlign: "center" }}>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      background: COLORS.surface, borderTop: `1px solid ${COLORS.border}`,
      padding: "24px 80px",
      display: "flex", justifyContent: "space-between", alignItems: "center",
    }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.72rem", color: COLORS.text3,
      }}>
        © 2026 <span style={{ color: COLORS.accent2 }}>Chinmayee Mayekar</span> · Built with React · Hosted on Vercel
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        {[
          { label: "GitHub", href: "https://github.com/chinmayee41203" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/chinmayee-mayekar" },
          { label: "Email", href: "mailto:cmayekar@stevens.edu" },
        ].map(l => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.72rem", color: COLORS.text3, textDecoration: "none", transition: "color 0.2s",
            }}
            onMouseEnter={e => e.target.style.color = COLORS.accent2}
            onMouseLeave={e => e.target.style.color = COLORS.text3}
          >{l.label}</a>
        ))}
      </div>
    </footer>
  );
}

function SectionHeader({ tag, title, accent }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.68rem", color: COLORS.accent,
        textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12,
      }}>{tag}</div>
      <h2 style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
        color: COLORS.text, lineHeight: 1.15, fontWeight: 400,
      }}>
        {title} <span style={{ color: COLORS.accent2, fontStyle: "italic" }}>{accent}</span>
      </h2>
    </div>
  );
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

// ── MAIN APP ──
export default function App() {
  const [activeSection, setActiveSection] = useState("About");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(l => ({
        id: l.toLowerCase(),
        el: document.getElementById(l.toLowerCase()),
      })).filter(s => s.el);

      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].el.getBoundingClientRect();
        if (rect.top <= 100) {
          setActiveSection(NAV_LINKS[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ background: COLORS.bg, minHeight: "100vh", fontFamily: "'Manrope', sans-serif" }}>
      <NavBar active={activeSection} />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
