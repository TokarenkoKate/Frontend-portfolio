import { UiHStack } from "@/components/ui/ui-stack/ui-hstack/ui-hstack";
import { UiText } from "@/components/ui/ui-text/ui-text";

export const AboutDetailsHeader = () => {
  return (
    <UiHStack className="about__section-header">
      <UiText variant="heading-xs" accent>
        Details
      </UiText>
    </UiHStack>
  );
};
