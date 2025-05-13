import { UiIcon } from "@/components/ui/ui-icon/ui-icon";
import { UiText } from "@/components/ui/ui-text/ui-text";
import type { NavbarMenuItemType } from "@/types/components/navbar-menu-item";

type NavbarMenuItemProps = {
  menuItem: NavbarMenuItemType;
  onClick?: VoidFunction;
};

export const NavbarMenuItem = ({ menuItem, onClick }: NavbarMenuItemProps) => {
  const { label, path, icon } = menuItem;

  return (
    <li className="navbar-menu__item">
      <a href={path} className="navbar-menu__item-content" onClick={onClick}>
        <UiIcon Svg={icon} />
        <UiText>{label}</UiText>
      </a>
    </li>
  );
};
