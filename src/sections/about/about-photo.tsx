import { UiHStack } from "@/components/ui/ui-stack/ui-hstack/ui-hstack";
import AboutPicture from "@/assets/images/about-photo.jpg";

export const AboutPhoto = () => {
  return (
    <UiHStack className="about__section-body" justify="center" align="center">
      <img src={AboutPicture} alt="photo" />
    </UiHStack>
  );
};
