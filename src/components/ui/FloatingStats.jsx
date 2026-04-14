import { useEffect, useMemo, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 1200, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

const ANIMATION_MS = 1400;

export default function FloatingStats() {
  const containerRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [animatedValues, setAnimatedValues] = useState(() =>
    stats.map(() => 0)
  );

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return undefined;

    const start = performance.now();
    let animationFrame;

    const animate = (timestamp) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / ANIMATION_MS, 1);

      setAnimatedValues(
        stats.map((item) => Math.round(item.value * progress))
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted]);

  const formattedValues = useMemo(
    () =>
      stats.map((item, index) => `${animatedValues[index].toLocaleString()}${item.suffix}`),
    [animatedValues]
  );

  return (
    <div
      ref={containerRef}
      className="floating-stats"
      aria-label="Company statistics"
    >
      <div className="floating-stats__intro">
        <p className="floating-stats__eyebrow">Why businesses trust us</p>
        <h3>Proven Impact, Measurable Results</h3>
        <p>
          These numbers reflect consistent delivery, long-term relationships,
          and practical finance support for businesses across Nigeria.
        </p>
      </div>

      <div className="floating-stats__metrics">
        {stats.map((item, index) => (
          <article key={item.label} className="floating-stats__card">
            <h3>{formattedValues[index]}</h3>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
