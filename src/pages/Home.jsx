import { lazy, Suspense } from "react";
import ImageCarousel from "../components/ui/ImageCarousel";
import accountantImage from "../assets/images/accountant.jpeg";
import accountantAltImage from "../assets/images/accountant3.jpg";
import auditImage from "../assets/images/audit.jpg";
import taxImage from "../assets/images/nigerian-naira-money-bills-tax.webp";
import Container from "../components/ui/Container";
import FloatingStats from "../components/ui/FloatingStats";
import DeferredSection from "../components/ui/DeferredSection";
import { formatText } from "../utils/formatText";

const ServicesSection = lazy(() => import("../components/services/ServicesSection"));
const TestimonialsSection = lazy(() =>
  import("../components/testimonials/TestimonialsSection")
);
const ContactSection = lazy(() => import("../components/contact/ContactSection"));

const heroSlides = [
  {
    src: accountantImage,
    alt: "Accounting professional reviewing financial statements",
    badge: "Accounting Services",
    headline: "Clarity in Your Numbers, Confidence in Your Decisions",
    subtext: "Get accurate reporting and expert support tailored to your business in Nigeria.",
  },
  {
    src: accountantAltImage,
    alt: "Business accounting team collaborating on reports",
    badge: "Business Consultancy",
    headline: "Scale Faster With Financial Strategy That Works",
    subtext: "From planning to execution, we help SMEs unlock smarter growth opportunities.",
  },
  {
    src: auditImage,
    alt: "Audit and compliance documents for corporate review",
    badge: "Audit & Compliance",
    headline: "Stay Compliant, Protected, and Investor-Ready",
    subtext: "Reduce risk with proactive compliance and dependable audit support.",
  },
  {
    src: taxImage,
    alt: "Nigerian naira notes representing tax and payroll management",
    badge: "Tax & Payroll",
    headline: "Never Miss a Deadline Again",
    subtext: "We handle tax and payroll details so you can focus on serving your clients.",
  },
];

export default function Home() {
  return (
    <>
      <section id="home" className="hero hero--carousel">
        <ImageCarousel slides={heroSlides} className="hero-carousel" />

        <Container className="hero__overlay-wrap">
          <div className="hero__overlay">
            <p className="hero__eyebrow">Based in Nigeria</p>
            <h1>{formatText("Accounting and advisory services you can trust")}</h1>
            <p>
              We help startups, SMEs, and growing organizations in Nigeria build
              financial confidence with accurate records, practical insights, and
              compliance support.
            </p>
            <div className="hero__actions">
              <a href="#services" className="btn btn--primary">
                Explore Services
              </a>
              <a href="#about" className="btn btn--ghost">
                Why Choose Us
              </a>
            </div>
          </div>
        </Container>

        <Container>
          <FloatingStats />
        </Container>
      </section>

      <DeferredSection>
        <Suspense fallback={null}>
          <ServicesSection />
        </Suspense>
      </DeferredSection>
      <DeferredSection>
        <Suspense fallback={null}>
          <TestimonialsSection />
        </Suspense>
      </DeferredSection>
      <DeferredSection>
        <Suspense fallback={null}>
          <ContactSection />
        </Suspense>
      </DeferredSection>
    </>
  );
}
