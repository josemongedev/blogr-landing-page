import { ReactComponent as IllustrationPhones } from "../../../assets/illustration-phones.svg";
import "./InfrastructureFeature.scss";

const InfrastructureFeatures = () => {
  return (
    <article className="features features__infrastructure ">
      <section className="infrastructure">
        <IllustrationPhones className="infrastructure__phone-svg" />
        <h1 className="features__title infrastructure__title">
          State of the Art Infrastructure
        </h1>
        <p className="features__description infrastucture__description">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </section>
    </article>
  );
};

export default InfrastructureFeatures;
