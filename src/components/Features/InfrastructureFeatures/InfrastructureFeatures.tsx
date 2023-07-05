import { ReactComponent as IllustrationPhones } from "../../../assets/illustration-phones.svg";
import "./InfrastructureFeature.scss";

const InfrastructureFeatures = () => {
  return (
    <article className="features features__infrastructure ">
      <section className="infrastructure">
        <IllustrationPhones className="infrastructure__phone-svg" />
        <div className="infrastructure__content"></div>
        <section className="infrastructure__text">
          <h1 className="features__title infrastructure__title">
            State of the Art Infrastructure
          </h1>
          <p className="features__description infrastructure__description">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </section>
      </section>
    </article>
  );
};

export default InfrastructureFeatures;
