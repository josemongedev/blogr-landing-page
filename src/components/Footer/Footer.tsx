import { ReactComponent as BlogrLogo } from "../../assets/logo.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <BlogrLogo className="footer__brand" />

      <h3 className="footer__title">Product</h3>
      <ul className="footer__links">
        <li>Overview</li>
        <li>Pricing</li>
        <li>Marketplace</li>
        <li>Features</li>
        <li>Integrations</li>
      </ul>

      <h3 className="footer__title">Company</h3>
      <ul className="footer__links">
        <li>About</li>
        <li>Team</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>

      <h3 className="footer__title">Connect</h3>
      <ul className="footer__links">
        <li>Contact</li>
        <li>Newsletter</li>
        <li>LinkedIn</li>
      </ul>
    </footer>
  );
};

export default Footer;
