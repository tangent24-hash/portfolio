import { contact } from "../../portfolio";
import "./Contact.css";

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <p className="section__title">
        My inbox is always open. Whether you have a question or just want to say
        hi, I’ll try my best to get back to you!
      </p>
      <a href={`mailto:${contact.email}`}>
        <span type="button" className="btn btn--outline">
          Email me
        </span>
      </a>
    </section>
  );
};

export default Contact;
