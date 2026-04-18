// import useReveal from "../hooks/useReveal";
// import { useState } from "react";
// import { useEffect } from "react"
// import { useRef } from "react"
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom"
// import { Routes, Route } from "react-router-dom"

// export default function CollabSection() {
//   const [ref, visible] = useReveal();

//   return (
//     <section className="py-20 px-[6vw] bg-slate-50">
//       <div
//         ref={ref}
//         className={`grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center transition-all ${
//           visible ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <div>
//           <h2 className=" text-2xl font-bold mb-3 text-center md:text-left">
//             Your team, on one page
//           </h2>
//           <p className="text-slate-500 text-center md:text-left">
//             Collaborate and track everything in one place.
//           </p>
//         </div>

//         <img
//           src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
//           alt="team"
//           className="w-full rounded-xl"
//         />
//       </div>
//     </section>
//   );
// }

import useReveal from "../../hooks/useReveal";

const steps = [
  { num: "01", title: "Create your workspace",   desc: "Sign up in seconds. No credit card needed." },
  { num: "02", title: "Add your tasks",          desc: "Break projects into tasks with priorities and due dates." },
  { num: "03", title: "Track and complete",      desc: "Mark tasks done, monitor progress from your dashboard." },
];

export default function CollabSection() {
  const [ref, visible] = useReveal();

  return (
    <section style={{ background: "#f8fafc", padding: "6rem 6vw" }}>
      <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", color: "#4f46e5", textTransform: "uppercase" }}>How it works</span>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#0f172a", marginTop: "0.5rem" }}>Up and running in minutes</h2>
          <p style={{ color: "#64748b", fontSize: "0.9rem", marginTop: "0.5rem" }}>No complex setup. Just focus on your work.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1.5rem", maxWidth: "860px", margin: "0 auto" }}>
          {steps.map((s, i) => (
            <div key={s.num}
              className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 100}ms`, background: "#fff", borderRadius: "18px", padding: "2rem 1.5rem", border: "1px solid #e2e8f0", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
              <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "#eef2ff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                <span style={{ fontWeight: 800, fontSize: "0.85rem", color: "#4f46e5" }}>{s.num}</span>
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0f172a", marginBottom: "0.4rem" }}>{s.title}</h3>
              <p style={{ fontSize: "0.83rem", color: "#64748b", lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}