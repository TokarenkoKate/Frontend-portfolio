import WorkMarkerOne from "@/assets/icons/work-marker-one.svg";
import WorkMarkerTwo from "@/assets/icons/work-marker-two.svg";
import SkillsProgramming from "@/assets/icons/skills-programming.svg";

export const aboutSectionListItems = [
  {
    value: "name",
    label: "Ekaterina Tokarenko",
  },
  {
    value: "function",
    label: "front-end developer",
  },
  {
    value: "location",
    label: "haifa, israel",
  },
  {
    value: "working experience",
    label: "2.5 years",
  },
  {
    value: "languages",
    label: "english, russian",
  },
];

export const workExperienceItems = [
  {
    title: "Frontend & mobile application developer",
    company: "TravelUp",
    duration: "Feb 2023 – Aug 2023",
    responsibilities: [
      "Full-stack development of a mobile application with React Native.",
      "Integration of navigation and direction functionalities, facilitating travel route selection and guidance to points of interest.",
      "Incorporation of accommodation links to third-party services like Booking.com and Airbnb, enhancing user convenience in lodging reservations.",
      "Supervised the deployment of the application to the Apple App Store.",
    ],
    icon: WorkMarkerOne,
  },
  {
    title: "Frontend developer",
    company: "Intelogis",
    duration: "Feb 2023 – Aug 2023",
    responsibilities: [
      "Supervised the deployment of the application to the Apple App Store.",
      "Integration of navigation and direction functionalities, facilitating travel route selection and guidance to points of interest.",
      "Full-stack development of a mobile application with React Native.",
      "Incorporation of accommodation links to third-party services like Booking.com and Airbnb, enhancing user convenience in lodging reservations.",
    ],
    icon: WorkMarkerTwo,
  },
];

export const skillsItems = [
  {
    title: "programming languages",
    icon: SkillsProgramming,
    tags: ["javascript", "typescript", "react.js", "next.js", "node.js"],
  },
  {
    title: "skill 2",
    icon: SkillsProgramming,
    tags: ["javascript", "typescript", "react.js", "next.js", "node.js"],
  },
  {
    title: "skill 3",
    icon: SkillsProgramming,
    tags: ["javascript", "typescript", "react.js", "next.js", "node.js"],
  },
  {
    title: "skill 4",
    icon: SkillsProgramming,
    tags: ["javascript", "typescript", "react.js", "next.js", "node.js"],
  },
];
