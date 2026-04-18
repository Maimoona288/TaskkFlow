import Navbar from "../components/LandingPage/Navbar";
import Hero from "../components/LandingPage/Hero";
import Features from "../components/LandingPage/Features";
import CollabSection from "../components/LandingPage/CollabSection";
import CtaSection from "../components/LandingPage/CtaSection";
import Footer from "../components/LandingPage/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="">
        <Hero />
        <Features />
      <CtaSection />
      <CollabSection />
      </main>
      <Footer />
    </>
  );
}