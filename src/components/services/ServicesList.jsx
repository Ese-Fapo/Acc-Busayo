import ServiceItem from "./ServiceItem";

export default function ServicesList({ services }) {
  return (
    <ul className="services-grid">
      {services.map((service) => (
        <ServiceItem key={service.title} service={service} />
      ))}
    </ul>
  );
}
