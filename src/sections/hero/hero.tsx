import HeroBorder from "@/assets/icons/hero-border.svg";
import HeroImage from "@/assets/images/hero.jpg";
import { UiIcon } from "@/components/ui/ui-icon/ui-icon";
import { UiHStack } from "@/components/ui/ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import { HeroDetails } from "./hero-details";
import { HeroTitles } from "./hero-title";
import "./hero.scss";

export const Hero = () => {
  return (
    <UiVStack className="hero panel" as="section" align="center">
      <div className="hero__content">
        <UiHStack className="hero__content-inner">
          <UiVStack className="hero__content-column">
            <HeroTitles />
            <HeroDetails />
          </UiVStack>
          <div>
            <img src={HeroImage} className="hero__image" />
          </div>
          <UiIcon Svg={HeroBorder} className="hero__icon" />
        </UiHStack>
      </div>
    </UiVStack>
  );
};
