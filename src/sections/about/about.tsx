import AboutIcon from "@/assets/icons/about.svg";
import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import { UiHStack } from "@/components/ui/ui-stack/ui-hstack/ui-hstack";
import { SectionHeader } from "@/components/section-header/section-header";
import { AboutList } from "./about-list";
import { AboutSoftSkills } from "./about-soft-skills";
import { AboutPhoto } from "./about-photo";
import { AboutDetailsHeader } from "./about-details-header";
import { AboutDetails } from "./about-details";
import { AboutGit } from "./about-git";
import "./about.scss";

export const About = () => {
  return (
    <UiVStack
      as="section"
      className="about panel"
      align="center"
      justify="center"
      max
    >
      <div className="about__content">
        <SectionHeader
          title="About me"
          icon={AboutIcon}
          className="work__header"
        />

        <div className="about__body">
          <UiVStack className="about__section about__section_first">
            <AboutList />
            <AboutDetailsHeader />
          </UiVStack>
          <UiVStack className="about__section about__section_second">
            <UiHStack>
              <AboutPhoto />
              <AboutSoftSkills />
            </UiHStack>
            <div className="about__empty" />
          </UiVStack>
          <UiHStack className="about__section about__section_third">
            <AboutDetails />
            <AboutGit />
          </UiHStack>
        </div>
      </div>
    </UiVStack>
  );
};
