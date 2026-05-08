// // import { Link } from "react-router-dom";

// // export default function Footer() {
// //   return (
// //     <footer
// //       className="bg-slate-900 border-t border-slate-800
// //       px-4 sm:px-6 lg:px-20 py-6
// //       flex flex-col sm:flex-row items-center justify-between gap-4
// //       text-sm text-center sm:text-left"
// //     >
// //       {/* LOGO */}
// //       <Link to="/" className="flex items-center gap-1.5 no-underline">
// //         <span
// //           className="font-extrabold text-lg sm:text-xl tracking-tight text-white"
// //           style={{ fontFamily: "'Sora', sans-serif" }}
// //         >
// //           Task<span className="text-indigo-500">it</span>
// //         </span>
// //       </Link>

// //       {/* COPYRIGHT */}
// //       <p className="text-slate-400">
// //         © 2026 Taskit. All rights reserved.
// //       </p>

// //       {/* LINKS */}
// //       <div className="flex items-center gap-5">
// //         <Link
// //           to="/privacy"
// //           className="text-slate-400 hover:text-indigo-400 transition duration-200"
// //         >
// //           Privacy
// //         </Link>

// //         <Link
// //           to="/terms"
// //           className="text-slate-400 hover:text-indigo-400 transition duration-200"
// //         >
// //           Terms
// //         </Link>
// //       </div>
// //     </footer>
// //   );
// // }
// import { Link } from "react-router-dom";
// import { Github, Twitter, Linkedin } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-slate-900 border-t border-slate-800 px-6 lg:px-20 py-10 text-sm">

//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

//         {/* LOGO + SOCIAL */}
//         <div>
//           <Link to="/" className="flex items-center gap-1.5 no-underline">
//             <span
//               className="font-extrabold text-xl tracking-tight text-white"
//               style={{ fontFamily: "'Sora', sans-serif" }}
//             >
//               Task<span className="text-indigo-500">it</span>
//             </span>
//           </Link>

//           <p className="text-slate-400 mt-3 leading-6">
//             TaskFlow helps you organize tasks and stay productive.
//           </p>

//           {/* SOCIAL ICONS */}
//           <div className="flex items-center gap-4 mt-5">

//             <a
//               href="https://github.com/"
//               target="_blank"
//               rel="noreferrer"
//               className="text-slate-400 hover:text-indigo-400 transition"
//             >
//               <Github size={20} />
//             </a>

//             <a
//               href="https://twitter.com/"
//               target="_blank"
//               rel="noreferrer"
//               className="text-slate-400 hover:text-indigo-400 transition"
//             >
//               <Twitter size={20} />
//             </a>

//             <a
//               href="https://linkedin.com/"
//               target="_blank"
//               rel="noreferrer"
//               className="text-slate-400 hover:text-indigo-400 transition"
//             >
//               <Linkedin size={20} />
//             </a>

//           </div>
//         </div>

//         {/* CONTACT */}
//         <div>
//           <h3 className="text-white font-semibold mb-3">Contact</h3>
//           <p className="text-slate-400">support@taskit.com</p>
//           <p className="text-slate-400 mt-1">+92 300 1234567</p>
//           <p className="text-slate-400 mt-1">Gujranwala, Pakistan</p>
//         </div>

//         {/* LINKS */}
//         <div>
//           <h3 className="text-white font-semibold mb-3">Quick Links</h3>

//           <div className="flex flex-col gap-2">
//             <Link to="/privacy" className="text-slate-400 hover:text-indigo-400 transition">
//               Privacy
//             </Link>

//             <Link to="/terms" className="text-slate-400 hover:text-indigo-400 transition">
//               Terms
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* BOTTOM */}
//       <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500">
//         © 2026 Taskit. Built for productivity.
//       </div>
//     </footer>
//   );
// }
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 px-6 lg:px-20 py-10 text-sm">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* LOGO + SOCIAL */}
        <div>
          <Link to="/" className="flex items-center gap-1.5 no-underline">
            <span className="font-extrabold text-xl tracking-tight text-white">
              Task<span className="text-indigo-500">it</span>
            </span>
          </Link>

          <p className="text-slate-400 mt-3 leading-6 hover:text-indigo-400 transition">
            Taskit helps you organize tasks and stay productive.
          </p>

          <div className="flex items-center gap-4 mt-5">

            <a aria-label="GitHub"
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition"
            >
              <FaGithub size={20} />
            </a>

            <a aria-label="Twitter"
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition"
            >
            <FaTwitter size={20} />
            </a>

            <a aria-label="LinkedIn"
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition"
            >
            <FaLinkedin size={20} />
            </a>

          </div>
        </div>

        {/* CONTACT */}
        <div >
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-slate-400 hover:text-indigo-400 transition">support@taskit.com</p>
          <p className="text-slate-400 mt-1 hover:text-indigo-400 transition">+92 300 1234567</p>
          <p className="text-slate-400 mt-1 hover:text-indigo-400 transition">Gujranwala, Pakistan</p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>

          <div className="flex flex-col gap-2">
            <Link to="/privacy" className="text-slate-400 hover:text-indigo-400 transition">
              Privacy
            </Link>

            <Link to="/terms" className="text-slate-400 hover:text-indigo-400 transition">
              Terms
            </Link>
          </div>
        </div>

      </div>

      <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500">
        © 2026 Taskit. Built for productivity.
      </div>

    </footer>
  );
}