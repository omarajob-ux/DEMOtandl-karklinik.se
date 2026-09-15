import SEO from "../components/SEO";
import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import Treatments from "../components/Treatments";
import About from "../components/About";
import PatientJourney from "../components/PatientJourney";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <SEO path="/" />
      <Hero />
      <TrustSection />
      <Treatments />
      <About />
      <PatientJourney />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
