import { useId, useState } from "react";
import "./Submenu.scss";

interface Props {
  name: string;
  options: string[];
}
const Submenu = ({ name, options }: Props) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const id = useId();

  const onMenuToggle: React.MouseEventHandler<HTMLDetailsElement> = (e) => {
    setMenuOpen((open) => !open);
    e.currentTarget.open = menuOpen;
    e.currentTarget.classList.toggle("open_rotate");
  };
  const onMenuOver: React.MouseEventHandler<HTMLDetailsElement> = (e) => {
    e.currentTarget.open = true;
    setMenuOpen(() => true);
    e.currentTarget.classList.add("open_rotate");
  };
  const onMenuLeave: React.MouseEventHandler<HTMLDetailsElement> = (e) => {
    e.currentTarget.open = false;
    setMenuOpen(() => false);
    e.currentTarget.classList.remove("open_rotate");
  };
  return (
    <details
      className="submenu"
      onMouseOver={onMenuOver}
      onMouseLeave={onMenuLeave}
      onClick={onMenuToggle}
    >
      <summary className="submenu__summary">{name}</summary>
      <div className="submenu__content">
        {options.map((opt) => (
          <a className="submenu__link" key={`${id}+${opt}`} href="./">
            {opt}
          </a>
        ))}
      </div>
    </details>
  );
};

export default Submenu;
