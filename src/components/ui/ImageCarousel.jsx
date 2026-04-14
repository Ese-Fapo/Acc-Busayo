import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({
  slides,
  autoPlay = true,
  intervalMs = 4500,
  className = "",
}) {
  const safeSlides = useMemo(
    () => (Array.isArray(slides) ? slides.filter(Boolean) : []),
    [slides]
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (activeIndex >= safeSlides.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, safeSlides.length]);

  useEffect(() => {
    if (!autoPlay || safeSlides.length <= 1) return undefined;

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safeSlides.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [autoPlay, intervalMs, safeSlides.length]);

  if (safeSlides.length === 0) {
    return null;
  }

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % safeSlides.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + safeSlides.length) % safeSlides.length);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 40;

    if (Math.abs(distance) < threshold) return;
    if (distance > 0) goNext();
    else goPrev();
  };

  const previousIndex = (activeIndex - 1 + safeSlides.length) % safeSlides.length;
  const nextIndex = (activeIndex + 1) % safeSlides.length;

  return (
    <div
      className={`carousel ${className}`.trim()}
      aria-label="Image carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carousel__track" role="region" aria-live="polite">
        {safeSlides.map((slide, index) => {
          const shouldRenderImage =
            index === activeIndex || index === previousIndex || index === nextIndex;

          return (
          <figure
            key={`${slide.src}-${index}`}
            className={`carousel__slide ${
              index === activeIndex ? "is-active" : ""
            }`.trim()}
            aria-hidden={index !== activeIndex}
          >
            {shouldRenderImage ? (
              <img
                src={slide.src}
                alt={slide.alt}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
              />
            ) : (
              <div className="carousel__placeholder" aria-hidden="true" />
            )}
            {(slide.badge || slide.headline || slide.subtext) && (
              <figcaption className="carousel__caption">
                {slide.badge ? <span>{slide.badge}</span> : null}
                {slide.headline ? <h3>{slide.headline}</h3> : null}
                {slide.subtext ? <p>{slide.subtext}</p> : null}
                <a href="#contact" className="carousel__cta">
                  Book Consultation
                </a>
              </figcaption>
            )}
          </figure>
          );
        })}
      </div>

      {safeSlides.length > 1 ? (
        <>
          <button
            className="carousel__btn carousel__btn--prev"
            onClick={goPrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            className="carousel__btn carousel__btn--next"
            onClick={goNext}
            aria-label="Next image"
          >
            <ChevronRight size={18} />
          </button>

          <div className="carousel__dots" role="tablist" aria-label="Select slide">
            {safeSlides.map((slide, index) => (
              <button
                key={`${slide.src}-dot-${index}`}
                className={`carousel__dot ${
                  index === activeIndex ? "is-active" : ""
                }`.trim()}
                aria-label={`Show slide ${index + 1}`}
                aria-selected={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
