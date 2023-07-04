import { ReactComponent as IllustrationEditorDesktop } from "../../../assets/illustration-editor-desktop.svg";
import { ReactComponent as IllustrationEditorMobile } from "../../../assets/illustration-editor-mobile.svg";
import "./FutureFeatures.scss";

const FutureFeatures = () => (
  <article className="features features__future ">
    <section className="future">
      <h1 className="features__title future__title">Designed for the future</h1>
      <IllustrationEditorMobile className="future__editor future__editor-svg-mobile" />
      <IllustrationEditorDesktop className="future__editor future__editor-svg-desktop" />
      {/* <img
        src="./src/assets/illustration-editor-desktop.svg"
        className="future__editor future__editor-svg-desktop"
      /> */}

      <div className="features__text future__text-1 future__block">
        <h2 className="features__subtitle future__subtitle">
          Introducing an <br /> extensible editor
        </h2>
        <p className="features__description future__description">
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>
      </div>
      <div className="features__text future__text-2 future__block">
        <h2 className="features__subtitle future__subtitle">
          Robust content <br /> management
        </h2>
        <p className="features__description future__description">
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you’re
          in full control.
        </p>
      </div>
    </section>
  </article>
);
export default FutureFeatures;
