import { UiHStack } from "@/components/ui/ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/components/ui/ui-text/ui-text";
import { UiButton } from "@/components/ui/ui-button/ui-button";
import { UiIcon } from "@/components/ui/ui-icon/ui-icon";
import { contactDetails } from "@/data/contacts";
import "./contacts.scss";

export const Contacts = () => {
  return (
    <UiVStack className="contacts" align="center" justify="center">
      <UiVStack className="contacts__body">
        <UiText variant="heading-md">Want to work together?</UiText>
        <UiText>
          Feel free to reach out for collaborations or just a friendly hello
        </UiText>
        <UiText accent>kate.tokarenko8@gmail.com</UiText>
        <UiHStack className="contacts__socials">
          <UiButton variant="outlined">Send and email</UiButton>
          <UiHStack className="contacts__links">
            {contactDetails.map(({ href, icon }) => (
              <UiButton href={href} asLink round>
                <UiIcon Svg={icon} />
              </UiButton>
            ))}
          </UiHStack>
        </UiHStack>
      </UiVStack>
    </UiVStack>
  );
};
