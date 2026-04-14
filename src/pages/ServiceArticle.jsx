import { Link, useParams } from "react-router-dom";
import Container from "../components/ui/Container";
import services from "../data/services";

export default function ServiceArticle() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <section className="section section--services-page">
        <Container>
          <h2>Service not found</h2>
          <p>We couldn’t find that service article.</p>
          <Link to="/services" className="btn btn--primary">
            Back to Services
          </Link>
        </Container>
      </section>
    );
  }

  return (
    <article className="section section--service-article">
      <Container className="service-article">
        <p className="section-title__eyebrow">Service Article</p>
        <h1>{service.title}</h1>

        <img
          src={service.image}
          alt={service.imageAlt ?? service.title}
          className="service-article__image"
        />

        <p className="service-article__lead">{service.description}</p>
        <p>{service.fullExplanation}</p>

        <div className="service-article__actions">
          <Link to={`/services#${service.slug}`} className="btn btn--ghost">
            Back to full list
          </Link>
          <a href="/#contact" className="btn btn--primary">
            Book Consultation
          </a>
        </div>
      </Container>
    </article>
  );
}
