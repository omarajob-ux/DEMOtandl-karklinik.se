import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import DemoBanner from "./components/DemoBanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileStickyBar from "./components/MobileStickyBar";
import HomePage from "./pages/HomePage";
import TreatmentPage from "./pages/TreatmentPage";
import LegalPage from "./pages/LegalPage";
import NotFoundPage from "./pages/NotFoundPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <div className="flex min-h-dvh flex-col">
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary-600 focus:px-5 focus:py-3 focus:text-white"
      >
        Hoppa till innehåll
      </a>
      <DemoBanner />
      <Navbar />
      <main id="main-content" className="flex-1 pb-20 lg:pb-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/behandlingar/:slug" element={<TreatmentPage />} />
          <Route path="/integritetspolicy" element={<LegalPage variant="privacy" />} />
          <Route path="/cookies" element={<LegalPage variant="cookies" />} />
          <Route path="/tillganglighet" element={<LegalPage variant="accessibility" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
