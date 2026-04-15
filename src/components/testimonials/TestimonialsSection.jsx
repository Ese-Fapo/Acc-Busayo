import { Star } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import testimonials from "../../data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section section--testimonials">
      <Container>
        <SectionTitle
          eyebrow="Client Reviews"
          title="Trusted by Business Owners Across Nigeria"
          subtitle="Real feedback from clients who use our accounting, compliance, and advisory services."
          align="center"
        />

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <div className="testimonial-card__top">
                <div className="testimonial-card__google" aria-label="Google review">
                  <span>G</span>
                </div>
                <p>{item.timeAgo}</p>
              </div>

              <h3>{item.name}</h3>
              <p className="testimonial-card__company">{item.company}</p>

              <div className="testimonial-card__stars" aria-label={`${item.rating} star review`}>
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star key={`${item.name}-${index}`} size={15} fill="currentColor" />
                ))}
              </div>

              <p className="testimonial-card__text">“{item.text}”</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
