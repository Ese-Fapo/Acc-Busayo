import { lazy, Suspense } from "react";
import accountantImage from "../assets/images/accountant.jpeg";
import accountantAltImage from "../assets/images/accountant3.jpg";
import auditImage from "../assets/images/audit.jpg";
import Container from "../components/ui/Container";
import FloatingStats from "../components/ui/FloatingStats";
import DeferredSection from "../components/ui/DeferredSection";
import { formatText } from "../utils/formatText";

const ServicesSection = lazy(() => import("../components/services/ServicesSection"));
const TestimonialsSection = lazy(() =>
  import("../components/testimonials/TestimonialsSection")
);
const ContactSection = lazy(() => import("../components/contact/ContactSection"));

export default function Home() {
  return (
    <>
      <section id="home" className="hero hero--stunning">
        <Container className="hero__shell">
          <div className="hero__content">
            <div className="hero__intro">
              <p className="hero__eyebrow">
                Lagos, Nigeria • Executive accounting for ambitious businesses
              </p>
              <span className="hero__pill">
                Corporate Accounting • Advisory • Compliance
              </span>
            </div>

            <h1>{formatText("Executive-grade financial clarity for ambitious businesses.")}</h1>

            <p className="hero__lede">
              Acc. Busayo delivers a calm, premium finance experience for
              founders, executives, and growing organisations that need
              accurate records, confident compliance, and strategic financial
              direction.
            </p>

            <div className="hero__actions">
              <a href="#services" className="btn btn--primary">
                Explore Services
              </a>
              <a href="#contact" className="btn btn--ghost">
                Book Consultation
              </a>
            </div>

            <div className="hero__portrait-card">
              <img
                src={accountantAltImage}
                alt="Accounting consultant collaborating with a client"
              />
              <div className="hero__portrait-card-copy">
                <span>Personalised guidance</span>
                <strong>A boutique service experience for growing firms</strong>
              </div>
            </div>

            <div className="hero__feature-list" aria-label="Key value highlights">
              <div className="hero__feature-item">
                <span className="hero__feature-dot" aria-hidden="true" />
                Refined reporting for faster executive decisions
              </div>
              <div className="hero__feature-item">
                <span className="hero__feature-dot" aria-hidden="true" />
                Quietly proactive tax and compliance oversight
              </div>
              <div className="hero__feature-item">
                <span className="hero__feature-dot" aria-hidden="true" />
                Boutique bookkeeping and payroll coordination
              </div>
              <div className="hero__feature-item">
                <span className="hero__feature-dot" aria-hidden="true" />
                Strategic insight designed for sustainable growth
              </div>
            </div>

            <div className="hero__trust-strip" aria-label="Business trust indicators">
              <article className="hero__trust-card">
                <strong>15+ Years</strong>
                <span>Hands-on finance and advisory leadership</span>
              </article>
              <article className="hero__trust-card">
                <strong>Discreet Support</strong>
                <span>Responsive, confidential, and detail-driven service</span>
              </article>
              <article className="hero__trust-card">
                <strong>Boardroom Ready</strong>
                <span>Clear numbers, strong controls, and decisive next steps</span>
              </article>
            </div>
          </div>

          <div className="hero__visual" aria-label="Professional accounting hero imagery">
            <div className="hero__visual-glow hero__visual-glow--blue" aria-hidden="true" />
            <div className="hero__visual-glow hero__visual-glow--green" aria-hidden="true" />
            <div className="hero__visual-grid" aria-hidden="true" />

            <div className="hero__image-card">
              <div className="hero__image-badge">Executive advisory</div>
              <img
                src={accountantImage}
                alt="Accounting professional reviewing client financial information"
              />
              <div className="hero__image-card-caption">
                <span>Financial leadership</span>
                <strong>Calm, confidential, and detail-led financial oversight</strong>
              </div>
            </div>

            <div className="hero__floating-card hero__floating-card--top">
              <p>Private Client Service</p>
              <strong>Responsive, discreet support</strong>
              <span>Clear guidance whenever tax, payroll, or reporting requires attention.</span>
            </div>

            <div className="hero__floating-card hero__floating-card--bottom">
              <p>Boardroom Ready</p>
              <strong>Reporting, tax, payroll &amp; compliance</strong>
            </div>

            <div className="hero__snapshot-card">
              <img src={auditImage} alt="Audit preparation and compliance documentation" />
              <div className="hero__snapshot-copy">
                <span>Audit discipline</span>
                <strong>Prepared records for confident internal and external reviews</strong>
              </div>
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
