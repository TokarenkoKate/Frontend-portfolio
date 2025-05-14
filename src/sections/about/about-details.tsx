import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/components/ui/ui-text/ui-text";

export const AboutDetails = () => {
  return (
    <UiVStack className="about__details">
      <UiVStack className="about__section-body">
        <UiText className="about__details-text">
          I'm a frontend developer with experience building web applications
          using React, TypeScript, CSS/SCSS, and modern tooling like Webpack and
          Vite. I’m proficient in state management with Redux, writing
          well-tested code, and optimizing performance. I’ve also developed
          cross-platform mobile apps using React Native.
        </UiText>
      </UiVStack>
    </UiVStack>
  );
};
