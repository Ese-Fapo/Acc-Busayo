import heroImage from "../assets/images/audit.jpg";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="section section--about">
      <Container className="about__grid">
        <div>
          <SectionTitle
            eyebrow="About us"
            title="Your Reliable Finance Partner in Nigeria"
            subtitle="We combine accounting accuracy with practical business support to help clients make better decisions every day."
          />
          <p>
            Our team supports businesses across Nigeria with accounting,
            compliance, payroll, tax, and strategic advisory. We focus on
            clear communication, fast turnaround, and solutions that match your
            growth stage.
          </p>
        </div>

        <div className="about__image-wrap">
          <img
            src={heroImage}
            alt="Business consultancy and accounting team"
            loading="lazy"
            decoding="async"
          />
        </div>
      </Container>
    </section>
  );
}
