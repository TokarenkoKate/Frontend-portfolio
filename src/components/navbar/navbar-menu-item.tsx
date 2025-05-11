import type { NavbarMenuItemType } from "@/types/components/navbar-menu-item";
import { UiIcon } from "../ui/ui-icon/ui-icon";
import { UiText } from "../ui/ui-text/ui-text";

type NavbarMenuItemProps = {
  menuItem: NavbarMenuItemType;
};

export const NavbarMenuItem = ({ menuItem }: NavbarMenuItemProps) => {
  const { label, path, icon } = menuItem;

  return (
    <li className="navbar-menu__item">
      <UiIcon Svg={icon} />
      <UiText>{label}</UiText>
      <a href={path} className="navbar-menu__item-link" />
    </li>
  );
};
