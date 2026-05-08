import Navbar from "../components/LandingPage/Navbar";
import Footer from "../components/LandingPage/Footer";

export default function Privacy() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <div className="min-h-screen bg-slate-50">

        {/* HERO */}
        <section className="bg-gradient-to-br from-indigo-600 to-violet-600 px-6 pt-32 pb-20 text-center">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-indigo-200">
            Privacy
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3">
            Privacy Policy
          </h1>

          <p className="text-indigo-100 mt-4 text-sm sm:text-base max-w-2xl mx-auto leading-7">
            Your privacy matters to us. This policy explains how Taskit collects,
            uses, and protects your information.
          </p>
        </section>

        {/* CONTENT */}
        <section className="px-6 lg:px-[10vw] py-20">
          <div className="max-w-5xl mx-auto space-y-12">

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                1. Information We Collect
              </h2>

              <p className="text-slate-600 leading-8 text-sm">
                We may collect your name, email address, and task-related data
                when you use Taskit. This helps us provide and improve our
                services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                2. How We Use Your Data
              </h2>

              <p className="text-slate-600 leading-8 text-sm">
                Your data is used to manage your account, improve platform
                performance, and provide a better productivity experience.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                3. Data Protection
              </h2>

              <p className="text-slate-600 leading-8 text-sm">
                We apply security measures to protect your personal information
                from unauthorized access, misuse, or disclosure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                4. Third-Party Services
              </h2>

              <p className="text-slate-600 leading-8 text-sm">
                Some third-party tools or services may be integrated into
                Taskit. These services may have their own privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                5. Cookies
              </h2>

              <p className="text-slate-600 leading-8 text-sm">
                We may use cookies or similar technologies to improve user
                experience and analyze platform usage.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                6. Policy Updates
              </h2>

              <p className="text-slate-600 leading-8 text-sm">
                We may update this Privacy Policy from time to time. Continued
                use of Taskit means you accept the updated policy.
              </p>
            </div>

          </div>
        </section>

        {/* FOOT NOTE */}
        <section className="px-6 pb-24 text-center">
          <p className="text-slate-500 text-sm">
            For privacy-related concerns, contact Taskit support.
          </p>
        </section>

      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}