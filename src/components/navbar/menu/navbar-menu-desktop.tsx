import { navbarMenuItems } from "@/data/navbar-menu-items";
import { NavbarMenuItem } from "./navbar-menu-item";
import { UiHStack } from "@/components/ui/ui-stack/ui-hstack/ui-hstack";

export const NavbarMenuDesktop = () => {
  return (
    <UiHStack
      className="navbar-menu navbar-menu_desktop"
      as="ul"
      align="center"
    >
      {navbarMenuItems.map((menuItem) => (
        <NavbarMenuItem menuItem={menuItem} key={menuItem.label} />
      ))}
    </UiHStack>
  );
};
