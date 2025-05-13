import Bug from "@/assets/icons/skills/bug.svg";
import Laptop from "@/assets/icons/skills/laptop.svg";
import Map from "@/assets/icons/skills/map.svg";
import Network from "@/assets/icons/skills/network.svg";
import Paint from "@/assets/icons/skills/paint.svg";
import Piles from "@/assets/icons/skills/piles.svg";
import Programming from "@/assets/icons/skills/programming.svg";
import Rocket from "@/assets/icons/skills/rocket.svg";
import Tooling from "@/assets/icons/skills/tooling.svg";
import WorkMarkerOne from "@/assets/icons/work-marker-one.svg";
import WorkMarkerTwo from "@/assets/icons/work-marker-two.svg";
import ProjectOne from "@/assets/images/project-one.jpg";

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
    title: "Languages & Frameworks",
    icon: Programming,
    tags: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "React Native",
      "Next.js",
      "Node.js",
      "NestJS",
    ],
  },
  {
    title: "State Management",
    icon: Piles,
    tags: [
      "Redux",
      "Redux Toolkit",
      "Redux-Saga",
      "Redux Thunk",
      "Reselect",
      "React Context API",
      "Redux Persist",
    ],
  },
  {
    title: "UI Libraries & Styling",
    icon: Paint,
    tags: ["Chakra UI", "Ant Design", "Tailwind CSS", "SCSS", "CSS Modules"],
  },
  {
    title: "Form Management & Validation",
    icon: Laptop,
    tags: ["React Final Form", "React Hook Form", "Yup (Schema Validation)"],
  },
  {
    title: "API Integration",
    icon: Network,
    tags: ["Fetch API", "Axios", "TanStack Query"],
  },
  {
    title: "Maps",
    icon: Map,
    tags: [
      "Leaflet.js",
      "Google Maps API",
      "Route Building",
      "Markers & Popups",
    ],
  },
  {
    title: "Performance Optimization",
    icon: Rocket,
    tags: [
      "Lazy Loading",
      "Code Splitting",
      "Tree Shaking",
      "Memoization",
      "Virtualization",
      "Intersection Observer API",
    ],
  },
  {
    title: "Testing & UI Kits",
    icon: Bug,
    tags: [
      "Unit Testing",
      "Component Testing",
      "Screenshot Testing",
      "Jest",
      "Vitest",
      "React Testing Library",
      "Storybook",
    ],
  },
  {
    title: "Tooling",
    icon: Tooling,
    tags: ["Webpack", "Vite", "Babel", "ESLint", "Prettier"],
  },
];

export const projectsItems = [
  {
    title: "E-commerce website",
    image: ProjectOne,
    description:
      "E-commerce website E-commerce website E-commerce website E-commerce website",
    technologies: [
      "javascript",
      "typescript",
      "react.js",
      "next.js",
      "node.js",
    ],
    features: [
      "Supervised the deployment of the application to the [[Apple App Store]]",
      "Integration of navigation and direction functionalities, facilitating travel [[route selection]] and guidance to points of interest.",
      "Full-stack development of a mobile application with React Native.",
      "Incorporation of accommodation links to third-party services like Booking.com and Airbnb, enhancing user convenience in lodging reservations.",
    ],
  },
  {
    title: "E-commerce website 2",
    image: ProjectOne,
    description:
      "E-commerce website E-commerce website E-commerce website E-commerce website",
    technologies: [
      "javascript",
      "typescript",
      "react.js",
      "next.js",
      "node.js",
    ],
    features: [
      "Supervised the deployment of the application to the Apple App Store.",
      "Integration of navigation and direction functionalities, facilitating travel route selection and guidance to points of interest.",
      "Full-stack development of a mobile application with React Native.",
      "Incorporation of accommodation links to third-party services like Booking.com and Airbnb, enhancing user convenience in lodging reservations.",
    ],
  },
  {
    title: "E-commerce website 3",
    image: ProjectOne,
    description:
      "E-commerce website E-commerce website E-commerce website E-commerce website",
    technologies: [
      "javascript",
      "typescript",
      "react.js",
      "next.js",
      "node.js",
    ],
    features: [
      "Supervised the deployment of the application to the Apple App Store.",
      "Integration of navigation and direction functionalities, facilitating travel route selection and guidance to points of interest.",
      "Full-stack development of a mobile application with React Native.",
      "Incorporation of accommodation links to third-party services like Booking.com and Airbnb, enhancing user convenience in lodging reservations.",
    ],
  },
  {
    title: "E-commerce website 4",
    image: ProjectOne,
    description:
      "E-commerce website E-commerce website E-commerce website E-commerce website",
    technologies: [
      "javascript",
      "typescript",
      "react.js",
      "next.js",
      "node.js",
    ],
    features: [
      "Supervised the deployment of the application to the [[Apple App Store]]",
      "Integration of navigation and direction functionalities, facilitating travel route selection and guidance to points of interest.",
      "Full-stack development of a mobile application with React Native.",
      "Incorporation of accommodation links to third-party services like Booking.com and Airbnb, enhancing user convenience in lodging reservations.",
    ],
  },
  {
    title: "E-commerce website 5",
    image: ProjectOne,
    description:
      "E-commerce website E-commerce website E-commerce website E-commerce website",
    technologies: [
      "javascript",
      "typescript",
      "react.js",
      "next.js",
      "node.js",
    ],
    features: [
      "Supervised the deployment of the application to the Apple App Store.",
      "Integration of navigation and direction functionalities, facilitating travel route selection and guidance to points of interest.",
      "Full-stack development of a mobile application with React Native.",
      "Incorporation of accommodation links to third-party services like Booking.com and Airbnb, enhancing user convenience in lodging reservations.",
    ],
  },
  {
    title: "E-commerce website 6",
    image: ProjectOne,
    description:
      "E-commerce website E-commerce website E-commerce website E-commerce website",
    technologies: [
      "javascript",
      "typescript",
      "react.js",
      "next.js",
      "node.js",
    ],
    features: [
      "Supervised the deployment of the application to the Apple App Store.",
      "Integration of navigation and direction functionalities, facilitating travel route selection and guidance to points of interest.",
      "Full-stack development of a mobile application with React Native.",
      "Incorporation of accommodation links to third-party services like Booking.com and Airbnb, enhancing user convenience in lodging reservations.",
    ],
  },
  {
    title: "E-commerce website 7",
    image: ProjectOne,
    description:
      "E-commerce website E-commerce website E-commerce website E-commerce website",
    technologies: [
      "javascript",
      "typescript",
      "react.js",
      "next.js",
      "node.js",
    ],
    features: [
      "Supervised the deployment of the application to the Apple App Store.",
      "Integration of navigation and direction functionalities, facilitating travel route selection and guidance to points of interest.",
      "Full-stack development of a mobile application with React Native.",
      "Incorporation of accommodation links to third-party services like Booking.com and Airbnb, enhancing user convenience in lodging reservations.",
    ],
  },
];
