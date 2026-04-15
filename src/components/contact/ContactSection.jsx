import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function ContactSection() {
  return (
    <section id="contact" className="section section--contact">
      <Container>
        <SectionTitle
          eyebrow="Contact us"
          title="Let's talk about your business goals"
          subtitle="Share your needs and our team will reach out with the right accounting and advisory support."
          align="center"
        />

        <div className="contact-grid">
          <article className="contact-card contact-card--info">
            <div className="contact-card__meta">
              <span>Fast response</span>
              <span>Trusted Nationwide</span>
            </div>
            <h3>Get in touch</h3>
            <p>
              We usually respond within one business day. For urgent requests,
              call us directly.
            </p>

            <ul className="contact-list">
              <li>
                <MapPin size={18} />
                <div>
                  <h4>Office</h4>
                  <p>12 Adeola Odeku Street, Victoria Island, Lagos</p>
                </div>
              </li>
              <li>
                <Phone size={18} />
                <div>
                  <h4>Phone</h4>
                  <p>+234 801 234 5678</p>
                </div>
              </li>
              <li>
                <Mail size={18} />
                <div>
                  <h4>Email</h4>
                  <p>hello@accbusayo.com</p>
                </div>
              </li>
              <li>
                <Clock3 size={18} />
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon - Fri: 8:30 AM - 5:30 PM</p>
                </div>
              </li>
            </ul>
          </article>

          <article className="contact-card contact-card--form">
            <div className="contact-card__meta">
              <span>Free consultation</span>
              <span>No obligation</span>
            </div>
            <h3>Request a consultation</h3>
            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <label>
                Full Name
                <input type="text" name="name" placeholder="e.g. Adaeze Nnamdi" />
              </label>
              <label>
                Email Address
                <input type="email" name="email" placeholder="you@example.com" />
              </label>
              <label>
                Service Needed
                <select name="service" defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Accounting Services</option>
                  <option>Book-keeping Services</option>
                  <option>Payroll Management</option>
                  <option>Tax Advisory</option>
                  <option>Audit Services</option>
                  <option>Business Consultancy</option>
                </select>
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your business and what support you need."
                />
              </label>

              <button type="submit" className="btn btn--primary contact-form__submit">
                Send Request
              </button>
            </form>
          </article>
        </div>
      </Container>
    </section>
  );
}
