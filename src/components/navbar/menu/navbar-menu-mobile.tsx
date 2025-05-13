import MenuIcon from "@/assets/icons/menu.svg";
import { UiButton } from "@/components/ui/ui-button/ui-button";
import { UiIcon } from "@/components/ui/ui-icon/ui-icon";
import { UiHStack } from "@/components/ui/ui-stack/ui-hstack/ui-hstack";
import { useDisclosure } from "@/utils/hooks/use-disclosure";
import { MenuSidebar } from "./menu-sidebar";

export const NavbarMenuMobile = () => {
  const { isOpen, onClose, toggleOpen } = useDisclosure();

  return (
    <UiHStack className="navbar-menu navbar-menu_mobile" align="center">
      <UiButton variant="clear" onClick={toggleOpen}>
        <UiIcon Svg={MenuIcon} />
      </UiButton>
      <MenuSidebar isOpen={isOpen} onClose={onClose} />
    </UiHStack>
  );
};
