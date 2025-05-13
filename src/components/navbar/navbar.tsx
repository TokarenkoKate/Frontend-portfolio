import { navbarMenuContacts } from "@/data/navbar-menu-items";
import { UiHStack } from "@/components/ui/ui-stack/ui-hstack/ui-hstack";
import { NavbarMenu } from "./menu/navbar-menu";
import { NavbarMenuItem } from "./menu/navbar-menu-item";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <UiHStack className="navbar__content" justify="between" align="center">
        <NavbarMenu />
        <NavbarMenuItem
          menuItem={navbarMenuContacts}
          key={navbarMenuContacts.label}
        />
      </UiHStack>
    </nav>
  );
};
