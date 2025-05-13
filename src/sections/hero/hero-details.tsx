import { UiHStack } from "@/components/ui/ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/components/ui/ui-text/ui-text";
import { UiButton } from "@/components/ui/ui-button/ui-button";

export const HeroDetails = () => {
  return (
    <UiVStack className="hero__details">
      <div className="hero__description">
        <UiText>
          I’m a Frontend Developer with hands-on experience in building
          production-grade SaaS platforms and mobile applications.
        </UiText>
      </div>
      <UiHStack className="hero__buttons">
        <UiButton variant="outlined" asLink href="#projects" target="_self">
          Projects
        </UiButton>
        <UiButton
          variant="outlined"
          direction="right"
          asLink
          href="#contacts"
          target="_self"
        >
          Contacts
        </UiButton>
      </UiHStack>
    </UiVStack>
  );
};
