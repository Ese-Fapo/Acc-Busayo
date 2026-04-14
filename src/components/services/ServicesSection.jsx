import services from "../../data/services";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ServicesList from "./ServicesList";
import { Link } from "react-router-dom";

export default function ServicesSection() {
  return (
    <section id="services" className="section section--services">
      <Container>
        <SectionTitle
          eyebrow={<Link to="/services">What we do</Link>}
          title="Professional Services for Growth"
          subtitle="From core accounting to strategic advisory, we support businesses and teams across Nigeria."
          align="center"
        />
        <ServicesList services={services} />
      </Container>
    </section>
  );
}
