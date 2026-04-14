import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import services from "../data/services";

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = location.hash.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  return (
    <section className="section section--services-page">
      <Container>
        <SectionTitle
          eyebrow="What we do"
          title="Full Service Breakdown"
          subtitle="Explore how each service supports business growth, compliance, and long-term financial stability in Nigeria."
        />

        <div className="services-details">
          {services.map((service) => (
            <article
              key={service.title}
              id={service.slug}
              className="service-detail-card"
            >
              <img
                src={service.image}
                alt={service.imageAlt ?? service.title}
                className="service-detail-card__image"
                loading="lazy"
                decoding="async"
              />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p>{service.fullExplanation}</p>
              <Link to={`/services/${service.slug}`} className="btn btn--primary service-read-more">
                Read More
              </Link>
            </article>
          ))}
        </div>

        <div className="services-details__actions">
          <Link to="/" className="btn btn--ghost">
            Back to Home
          </Link>
          <a href="/#contact" className="btn btn--primary">
            Book Consultation
          </a>
        </div>
      </Container>
    </section>
  );
}
