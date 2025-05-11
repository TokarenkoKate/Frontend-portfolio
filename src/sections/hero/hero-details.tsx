import { UiHStack } from "@/components/ui/ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/components/ui/ui-text/ui-text";

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
        <div>Contacts</div>
        <div>Contacts</div>
      </UiHStack>
    </UiVStack>
  );
};
