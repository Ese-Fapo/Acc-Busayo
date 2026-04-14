import { useEffect, useState } from "react";

export default function useScroll(threshold = 12) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);
      setIsScrolled(currentY > threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { scrollY, isScrolled };
}
