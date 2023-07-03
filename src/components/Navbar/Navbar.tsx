import { useState } from "react";
import { ReactComponent as IconClose } from "../../assets/icon-close.svg";
import { ReactComponent as IconHamburger } from "../../assets/icon-hamburger.svg";
import { ReactComponent as BlogrLogo } from "../../assets/logo.svg";
import MenuDialog from "../MenuDialog/MenuDialog";
import "./Navbar.scss";
import Submenu from "./Submenu/Submenu";
import subMenuList from "./Submenu/submenu.json";

const Menu = () => (
  <>
    <div className="menu__submenus">
      {subMenuList.map(({ name, ref }) => (
        <Submenu key={name} name={name} options={ref} />
      ))}
    </div>
    <hr className="menu__separator" />
    <div className="auth menu__auth">
      <a className="auth__login " href="./">
        Login
      </a>
      <a className="auth__signup button button__signup" href="./">
        Sign Up
      </a>
    </div>
  </>
);

const Navbar = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <BlogrLogo className="navbar__brand" />
      <div className="menu menu--desktop">
        <Menu />
      </div>
      <button
        className="navbar__hamburger"
        onClick={() => setDialogOpen((open) => !open)}
      >
        {dialogOpen ? <IconClose /> : <IconHamburger />}
      </button>

      {/* Mobile menu */}
      <MenuDialog
        open={dialogOpen}
        className="menu menu--mobile navbar__dialog"
      >
        <Menu />
      </MenuDialog>
    </nav>
  );
};

export default Navbar;
