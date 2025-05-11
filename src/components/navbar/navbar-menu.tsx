import { navbarMenuItems } from "@/data/navbar-menu-items";
import { NavbarMenuItem } from "./navbar-menu-item";

export const NavbarMenu = () => {
  return (
    <ul className="navbar-menu">
      {navbarMenuItems.map((menuItem) => (
        <NavbarMenuItem menuItem={menuItem} key={menuItem.label} />
      ))}
    </ul>
  );
};
