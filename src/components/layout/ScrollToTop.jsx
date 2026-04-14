import { ArrowUp } from "lucide-react";
import useScroll from "../../hooks/useScroll";

export default function ScrollToTop() {
  const { scrollY } = useScroll(350);

  if (scrollY < 350) return null;

  return (
    <button
      className="scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}
