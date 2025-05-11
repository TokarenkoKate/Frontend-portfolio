import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/components/ui/ui-text/ui-text";

export const HeroTitles = () => {
  return (
    <UiVStack className="hero__titles">
      <UiText variant="heading-md">Hi, I'm Kate</UiText>
      <UiText variant="heading-md">passionate</UiText>
      <UiText variant="heading-md" accent>
        front-end developer
      </UiText>
    </UiVStack>
  );
};
