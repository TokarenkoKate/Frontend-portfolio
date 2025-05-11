import "./navbar.scss";
import { NavbarMenu } from "./navbar-menu";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <NavbarMenu />
      </div>
    </nav>
  );
};
