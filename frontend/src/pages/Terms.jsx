import Navbar from "../components/LandingPage/Navbar";
import Footer from "../components/LandingPage/Footer";

export default function Terms() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <div className="min-h-screen bg-slate-50">

        {/* HERO */}
        <section className="bg-gradient-to-br from-indigo-600 to-violet-600 px-6 pt-32 pb-20 text-center">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-indigo-200">
            Legal
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3">
            Terms & Conditions
          </h1>

          <p className="text-indigo-100 mt-4 text-sm sm:text-base max-w-2xl mx-auto leading-7">
            These terms explain how you can use Taskit and what rules apply
            when using our platform.
          </p>
        </section>

        {/* CONTENT */}
        <section className="px-6 lg:px-[10vw] py-20">
          <div className="max-w-5xl mx-auto space-y-12">

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                1. Use of Taskit
              </h2>

              <p className="text-slate-600 leading-8 text-sm">
                Taskit is a productivity tool designed for managing tasks and
                workflows. You agree to use it only for lawful purposes and in a
                way that does not harm the system or other users.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                2. Accounts
              </h2>

              <p className="text-slate-600 leading-8 text-sm">
                You are responsible for your account security. Any activity
                performed under your account is your responsibility.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                3. Data & Privacy
              </h2>

              <p className="text-slate-600 leading-8 text-sm">
                We store user data securely. Your personal task data is not
                shared with others without your permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                4. Service Usage
              </h2>

              <p className="text-slate-600 leading-8 text-sm">
                You must not misuse or attempt to disrupt Taskit services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                5. Updates to Terms
              </h2>

              <p className="text-slate-600 leading-8 text-sm">
                We may update these terms anytime. Continued use means you
                accept the updated version.
              </p>
            </div>

          </div>
        </section>

        {/* FOOT NOTE */}
        <section className="px-6 pb-24 text-center">
          <p className="text-slate-500 text-sm">
            If you have questions, contact Taskit support.
          </p>
        </section>

      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}