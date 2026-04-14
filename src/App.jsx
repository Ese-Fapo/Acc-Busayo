
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import FloatingWhatsApp from "./components/layout/FloatingWhatsApp";
import Home from "./pages/Home";
import DeferredSection from "./components/ui/DeferredSection";
import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ServiceArticle = lazy(() => import("./pages/ServiceArticle"));

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const scrollToElement = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const raf = requestAnimationFrame(scrollToElement);
    return () => cancelAnimationFrame(raf);
  }, [location.hash, location.pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <DeferredSection>
                <Suspense fallback={null}>
                  <About />
                </Suspense>
              </DeferredSection>
            </>
          }
        />
        <Route
          path="/services"
          element={
            <Suspense fallback={null}>
              <Services />
            </Suspense>
          }
        />
        <Route
          path="/services/:slug"
          element={
            <Suspense fallback={null}>
              <ServiceArticle />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}

export default App;
