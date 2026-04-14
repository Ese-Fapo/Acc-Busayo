export default function SectionTitle({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <div className={`section-title section-title--${align}`}>
      {eyebrow ? <p className="section-title__eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {subtitle ? <p className="section-title__subtitle">{subtitle}</p> : null}
    </div>
  );
}
