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
import Form from "@/assets/images/form.png";
import Table from "@/assets/images/table.png";
import Mesto from "@/assets/images/mesto.png";
import Movies from "@/assets/images/movies.png";
import Mobile from "@/assets/images/mobile.png";

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
    title: "Frontend developer",
    company: "Intelogis",
    duration: "Aug 2023 – Apl 2025",
    responsibilities: [
      "Designed modular and reusable components for managing cargo transportation orders, enhancing the efficiency of order processing.",
      "Created complex form components with dynamic validation and conditional rendering, improving data collection efficiency.",
      "Implemented tables with advanced features such as virtualization, column and row grouping, column pinning, dynamic filtering and sorting.",
      "Collaborated with backend developers to ensure seamless API integration, optimizing data visualization and user workflows.",
      "Wrote unit and component tests with Jest and React Testing library, increasing test coverage up to 30%.",
    ],
    icon: WorkMarkerTwo,
  },
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
    title: "Feature-rich tables",
    image: Table,
    description:
      "A dynamic and highly customizable data tables built for complex analytics use cases",
    technologies: [
      "react",
      "typescript",
      "tanstack table",
      "tanstack virtual",
      "local storage",
      "indexeddb",
    ],
    features: [
      "Provides [[various cell types]] including text, numbers, currency, dates, and colors",
      "Inline [[cell editing]] for real-time data updates",
      "Custom [[filtering]], [[sorting]], and [[searching]] tailored to each column's data type",
      "[[Columns reordering]] via drag-and-drop",
      "[[Flexible column width]] via drag-and-drop",
      "Provides options to [[Show/hide]] columns and [[pinning]] them to the start or end of the table",
      "Integrates [[table virtualization]] for efficient rendering of large datasets",
      "[[Persists user settings]] such as table configurations in [[localStorage]]",
      "Saves and loads table data with [[IndexedDB]] for robust client-side storage",
    ],
  },
  {
    title: "Forms with complex logic",
    image: Form,
    description:
      "Dynamic form handling designed for complex user input and optimized performance",
    technologies: ["react", "typescript", "react final form", "yup validation"],
    features: [
      "Handles [[dynamic form field]], such as logistic order creation with multiple loading, unloading points or calculator of managers' salary",
      "Synchronous and asynchronous [[input validation]]",
      "[[Conditional logic]] to dynamically show or hide fields based on other inputs",
      "Optimizes performance by [[preventing unnecessary re-renders]]",
      "[[Multi-step]] forms, f.i. form for creating a vacancy form, where input is collected across several steps",
      "Displays clear [[success notifications]] and detailed [[error messages]]",
    ],
  },
  {
    title: "TravelUp tour Guide App",
    image: Mobile,
    description:
      "An interactive travel companion that helps users discover and follow comprehensive, tailor-made itineraries.",
    technologies: [
      "React native",
      "React-intl",
      "Geolocation API",
      "Google Maps API",
    ],
    features: [
      "[[Displays a list of curated itineraries]] with detailed instructions for each day and hour.",
      "Integrates [[navigation]] and [[directions]] using the Google Maps API.",
      "Enables ticket and accommodation booking through [[third-party service integrations]].",
      "Implements an [[audio guide]] feature for on-the-go touring.",
      "Supports [[subscription plans]] for different user tiers.",
      "Includes [[multi-language]] support for a global user base.",
    ],
  },
  {
    title: "Camping Gear E-Commerce",
    image: ProjectOne,
    description:
      "A personal project showcasing a fully functional e-commerce website for camping gear",
    technologies: [
      "react.js",
      "typescript",
      "nest.js",
      "PostgreSQL",
      "TypeORM",
    ],
    features: [
      "Displays products and blog articles organized by category, with [[advanced filtering]] and [[sorting]] options",
      "Implements [[lazy loading]] for product and article lists using the Intersection Observer API",
      "Shows [[detailed product]] pages with descriptions, specifications, and related product suggestions",
      "[[Shopping cart]] system that supports both guest and authenticated users, including automatic cart merging upon login",
      "Integrates user [[authentication]] and [[authorization]] using JWT",
      "Designed with a fully [[responsive layout]] using media queries, flexible sizing, and fluid typography",
      "Connected a [[PostgreSQL]] database using [[TypeORM]], and created API schemas and resource models.",
    ],
    link: "https://github.com/TokarenkoKate/Camping-Gear-E-Commerce",
  },
  {
    title: "Movies Explorer",
    image: Movies,
    description: "Application to search for movies and save favorite ones",
    technologies: ["javascript", "react.js", "express.js"],
    features: [
      "Displays [[a list of movies]] with a real-time [[search]] field",
      "Enables users to add movies to their [[favorites]] and view saved movies",
      "Allows users to [[update profile]] information",
      "Implements user [[Authentication & Authorization]]",
      "Integrates [[multilingual]] support using react-i18next",
      "Connected to a [[MongoDB]] database",
      "Created API endpoints, schemas, and resource models for movies and users with [[Express.js]]",
    ],
    link: "https://github.com/TokarenkoKate/react-mesto-api-full-gha",
  },
  {
    title: "Mesto Travel",
    image: Mesto,
    description:
      "A social platform that allows users to share their travel photos.",
    technologies: ["javascript", "react.js", "express.js"],
    features: [
      "Enables users to [[upload]] and [[delete]] their travel photos",
      "Allows users to [[like]] their favorite photos",
      "Allows users to [[update profile]] information",
      "Connected to a [[MongoDB]] database",
      "Created API endpoints, schemas, and resource models for movies and users with [[Express.js]]",
    ],
    link: "https://github.com/TokarenkoKate/movies-explorer-frontend",
  },
];
