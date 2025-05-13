import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/components/ui/ui-text/ui-text";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <UiVStack className="footer__content">
        <UiText variant="body-lg">Ekaterina Tokarenko</UiText>
        <UiText tone="secondary">
          © 2025 Ekaterina Tokarenko. All rights reserved.
        </UiText>
      </UiVStack>
    </footer>
  );
};
