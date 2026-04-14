import Container from "../ui/Container";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__inner">
        <div className="footer__brand-block">
          <h3>Acc. Busayo</h3>
          <p>
            Trusted accounting and business advisory partner serving clients
            across Nigeria.
          </p>

          <div className="footer__socials" aria-label="Social media links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
              <FaXTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#about">About</Link>
          <Link to="/#testimonials">Testimonials</Link>
          <Link to="/#contact">Contact</Link>
        </nav>

        <div className="footer__contact">
          <h4>Contact</h4>
          <p>Lagos, Nigeria</p>
          <a href="mailto:hello@accbusayo.com">hello@accbusayo.com</a>
          <a href="tel:+2348012345678">+234 801 234 5678</a>
        </div>
      </Container>
      <p className="footer__copyright">
        © {new Date().getFullYear()} Acc. Busayo. All rights reserved.
      </p>
    </footer>
  );
}
