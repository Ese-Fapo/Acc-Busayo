import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "../ui/Container";
import useScroll from "../../hooks/useScroll";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isScrolled } = useScroll(20);
  const location = useLocation();

  const isSectionActive = (hash) =>
    location.pathname === "/" && location.hash === hash;

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`.trim()}>
      <Container className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          Acc. Busayo
        </Link>

        <button
          className="navbar__toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`navbar__links ${open ? "is-open" : ""}`.trim()}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  "navbar__link",
                  isActive ||
                  isSectionActive(link.to.includes("#") ? link.to.slice(1) : "")
                    ? "is-active"
                    : "",
                ]
                  .join(" ")
                  .trim()
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          <a href="/#contact" className="btn btn--primary navbar__cta" onClick={() => setOpen(false)}>
            Book Consultation
          </a>
        </nav>
      </Container>
    </header>
  );
}
