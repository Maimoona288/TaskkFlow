import { Link } from "react-router-dom";
import useReveal from "../../hooks/useReveal";

export default function CtaSection() {
  const [ref, visible] = useReveal();

  return (
    <section style={{ background: "linear-gradient(135deg,#4f46e5 0%,#7c3aed 100%)", padding: "6rem 1.5rem", textAlign: "center" }}>
      <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", color: "#c7d2fe", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
          Get started for free
        </span>
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#fff", lineHeight: 1.2, marginBottom: "1rem" }}>
          Stop managing chaos.<br />Start shipping work.
        </h2>
        <p style={{ color: "#c7d2fe", fontSize: "0.95rem", maxWidth: "420px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
          Join thousands of teams already using TaskFlow Pro to stay on top of their goals.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/signup"
            style={{ background: "#fff", color: "#4f46e5", padding: "0.8rem 2rem", borderRadius: "12px", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", display: "inline-block" }}>
            Start for free
          </Link>
          <Link to="/login"
            style={{ background: "transparent", color: "#fff", padding: "0.8rem 2rem", borderRadius: "12px", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.4)", display: "inline-block" }}>
            Sign in
          </Link>
        </div>
      </div>
    </section>
  );
}