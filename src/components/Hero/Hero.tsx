import "./Hero.scss";

const Hero = () => {
  return (
    <header className="hero">
      <h1 className="hero__heading">
        A modern <br /> publishing platform
      </h1>
      <p className="hero__text">
        Grow your audience and build your <br /> online brand
      </p>
      <div className="hero__links">
        <a className="button hero__button" href="./">
          Start for Free
        </a>
        <a className="button button__no-bg hero__button" href="./">
          Learn More
        </a>
      </div>
    </header>
  );
};

export default Hero;
