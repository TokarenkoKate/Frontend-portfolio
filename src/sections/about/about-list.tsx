import { UiHStack } from "@/components/ui/ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/components/ui/ui-text/ui-text";
import { aboutSectionListItems } from "@/data/general";

export const AboutList = () => {
  return (
    <UiVStack className="about__list" as="ul" align="normal" max>
      {aboutSectionListItems.map((listItem) => (
        <UiHStack
          key={listItem.label}
          justify="between"
          max
          className="about__list-item"
          as="li"
        >
          <UiText variant="body-lg" className="about__list-text">
            {listItem.value}
          </UiText>
          <UiText variant="body-lg" className="about__list-text">
            {listItem.label}
          </UiText>
        </UiHStack>
      ))}
    </UiVStack>
  );
};
