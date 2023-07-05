import { ReactComponent as BlogrLogo } from "../../assets/logo.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <BlogrLogo className="footer__brand" />
      <div className="footer__content">
        <section className="footer__category">
          <h3 className="footer__title">Product</h3>
          <ul className="footer__links">
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </section>

        <section className="footer__category">
          <h3 className="footer__title">Company</h3>
          <ul className="footer__links">
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </section>

        <section className="footer__category">
          <h3 className="footer__title">Connect</h3>
          <ul className="footer__links">
            <li>Contact</li>
            <li>Newsletter</li>
            <li>LinkedIn</li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
