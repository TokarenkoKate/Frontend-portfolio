import type { NavbarMenuItemType } from "@/types/components/navbar-menu-item";
import MarkerOne from "@/assets/icons/marker-one.svg";
import MarkerTwo from "@/assets/icons/marker-two.svg";
import MarkerThree from "@/assets/icons/marker-three.svg";
import MarkerFour from "@/assets/icons/marker-four.svg";
import MarkerFive from "@/assets/icons/marker-five.svg";

export const navbarMenuItems: NavbarMenuItemType[] = [
  {
    label: "about me",
    path: "#about-me",
    icon: MarkerOne,
  },
  {
    label: "working experience",
    path: "#working-experience",
    icon: MarkerTwo,
  },
  {
    label: "skills",
    path: "#skills",
    icon: MarkerThree,
  },
  {
    label: "featured projects",
    path: "#featured-projects",
    icon: MarkerFour,
  },
];

export const navbarMenuContacts = {
  label: "contacts",
  path: "#contacts",
  icon: MarkerFive,
};
