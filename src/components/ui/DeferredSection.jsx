import { useEffect, useRef, useState } from "react";

export default function DeferredSection({
  children,
  rootMargin = "240px 0px",
  className = "",
}) {
  const [shouldRender, setShouldRender] = useState(false);
  const markerRef = useRef(null);

  useEffect(() => {
    const marker = markerRef.current;
    if (!marker || typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setShouldRender(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(marker);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={markerRef} className={className}>
      {shouldRender ? children : null}
    </div>
  );
}