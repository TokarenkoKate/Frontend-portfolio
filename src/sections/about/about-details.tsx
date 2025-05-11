import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/components/ui/ui-text/ui-text";

export const AboutDetails = () => {
  return (
    <UiVStack className="about__details">
      <UiVStack className="about__section-body">
        <UiText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchange
        </UiText>
      </UiVStack>
    </UiVStack>
  );
};
