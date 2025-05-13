import HeroImage from "@/assets/images/hero.jpg";
import { UiHStack } from "@/components/ui/ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import { HeroDetails } from "./hero-details";
import { HeroTitles } from "./hero-title";
import "./hero.scss";

export const Hero = () => {
  return (
    <UiVStack
      className="hero panel"
      as="section"
      align="center"
      justify="center"
    >
      <div className="hero__content">
        <UiHStack className="hero__content-inner" max>
          <UiVStack className="hero__content-column" justify="between">
            <HeroTitles />
            <HeroDetails />
          </UiVStack>
          <div>
            <img src={HeroImage} className="hero__image" />
          </div>
        </UiHStack>
      </div>
    </UiVStack>
  );
};
