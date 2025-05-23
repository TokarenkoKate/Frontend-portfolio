import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import SoftSkills from "@/assets/images/soft-skills.png";
import { UiHStack } from "@/components/ui/ui-stack/ui-hstack/ui-hstack";
import { UiText } from "@/components/ui/ui-text/ui-text";

export const AboutSoftSkills = () => {
  return (
    <UiVStack max align="normal">
      <UiHStack className="about__section-header">
        <UiText variant="heading-xs" accent>
          Soft skills
        </UiText>
      </UiHStack>
      <UiHStack className="about__section-body" align="center" justify="center">
        <img src={SoftSkills} alt="soft-skills" />
      </UiHStack>
    </UiVStack>
  );
};
