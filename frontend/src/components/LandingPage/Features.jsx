import useReveal from "../../hooks/useReveal";

const featuresList = [
  {
    icon: "📌",
    title: "Smart Task Management",
    desc: "Create, update, and organize tasks with full CRUD functionality.",
  },
  {
    icon: "🔐",
    title: "Secure Authentication",
    desc: "User-specific task isolation using JWT-based login system.",
  },
  {
    icon: "🎯",
    title: "Priority Control",
    desc: "Manage tasks using low, medium, and high priority levels.",
  },
  {
    icon: "📈",
    title: "Progress Tracking",
    desc: "Visual progress tracking based on completed tasks.",
  },
];

export default function Features() {
  const [ref, visible] = useReveal();

  return (
    <section id="features" className="py-24 px-[6vw] bg-white">
      <div
        ref={ref}
        className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "#4f46e5",
            textTransform: "uppercase",
          }}
        >
          What you get
        </span>
        <h2 className="text-3xl font-bold text-slate-900 mt-2">
          Everything you need
        </h2>
        <p className="text-slate-500 mt-2 text-sm max-w-md mx-auto">
          Built for individuals and teams who want to ship faster and stay
          organised.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {featuresList.map((f, i) => (
          <div
            key={f.title}
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{
              transitionDelay: `${i * 80}ms`,
              background: "#fff",
              borderRadius: "18px",
              padding: "1.6rem 1.4rem",
              border: "1px solid #e2e8f0",
              boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 8px 32px rgba(79,70,229,0.10)";
              e.currentTarget.style.borderColor = "#c7d2fe";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)";
              e.currentTarget.style.borderColor = "#e2e8f0";
            }}
          >
            {/* <div style={{ fontSize: "1.8rem", marginBottom: "0.9rem" }}>{f.icon}</div> */}
            <div
              style={{
                width: "48px",
                height: "48px",
                margin: "0 auto 0.9rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.6rem",
                borderRadius: "12px",
                background: "#eef2ff",
              }}
            >
              {f.icon}
            </div>
            <h3
              style={{
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "#0f172a",
                marginBottom: "0.4rem",
                   display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              {f.title}
            </h3>
            <p
              style={{ fontSize: "0.83rem", color: "#64748b", lineHeight: 1.6 ,}}
            >
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
