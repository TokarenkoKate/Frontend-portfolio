import Close from "@/assets/icons/close.svg";
import { UiButton } from "@/components/ui/ui-button/ui-button";
import { UiSidebar } from "@/components/ui/ui-sidebar/ui-sidebar";
import { UiHStack } from "@/components/ui/ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/components/ui/ui-text/ui-text";
import { UiIcon } from "@/components/ui/ui-icon/ui-icon";
import { navbarMenuItems } from "@/data/navbar-menu-items";
import { NavbarMenuItem } from "./navbar-menu-item";

interface MenuSidebarProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

export const MenuSidebar = ({ isOpen, onClose }: MenuSidebarProps) => {
  return (
    <UiSidebar
      isOpen={isOpen}
      onClose={onClose}
      renderChildren={(closeSidebar) => {
        return (
          <UiVStack className="menu-sidebar" align="normal">
            <UiHStack
              max
              justify="between"
              align="normal"
              className="menu-sidebar__header"
            >
              <UiText variant="heading-md">Navigation</UiText>
              <UiButton
                onClick={closeSidebar}
                variant="clear"
                round
                className="menu-sidebar__close-btn"
              >
                <UiIcon Svg={Close} />
              </UiButton>
            </UiHStack>
            <UiVStack className="menu-sidebar__list" as="ul">
              {navbarMenuItems.map((menuItem) => (
                <NavbarMenuItem
                  menuItem={menuItem}
                  key={menuItem.label}
                  onClick={closeSidebar}
                />
              ))}
            </UiVStack>
          </UiVStack>
        );
      }}
    />
  );
};
