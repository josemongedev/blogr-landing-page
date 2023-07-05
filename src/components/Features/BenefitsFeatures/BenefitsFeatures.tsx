import { ReactComponent as IllustrationLaptopDesktop } from "../../../assets/illustration-laptop-desktop.svg";
import { ReactComponent as IllustrationLaptopMobile } from "../../../assets/illustration-laptop-mobile.svg";

import "./BenefitsFeatures.scss";

const BenefitsFeatures = () => {
  return (
    <article className="features features__benefits benefits">
      <IllustrationLaptopDesktop className="benefits__laptop-svg-desktop" />
      <IllustrationLaptopMobile className="benefits__laptop-svg-mobile" />
      <section className="benefits__text1">
        <h2 className="features__subtitle benefits__subtitle">
          Free, open, simple
        </h2>
        <p className="features__description benefits__description">
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
      </section>

      <section className="benefits__text2">
        <h2 className="features__subtitle benefits__subtitle">
          Powerful tooling
        </h2>
        <p className="features__description benefits__description">
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </section>
    </article>
  );
};

export default BenefitsFeatures;
