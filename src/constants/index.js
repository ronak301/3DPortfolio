import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  phonepe,
  sprinklr,
  tigerhall,
  parivaar,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Native",
    icon: mobile,
  },
  {
    title: "Expo",
    icon: web,
  },
  {
    title: "AR/VR",
    icon: backend,
  },
  {
    title: "Animations",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Product Engineer",
    company_name: "Sprinklr",
    icon: sprinklr,
    iconBg: "#383E56",
    date: "Jan 2015 - Feb 2018",
    points: [
      "Developed and maintained projects with objective C.",
      "Initial adopter of react native in side projects and later in main projects. Shared 95% of code in web and mobile in one of our project.",
      "Created more than 5 projects in react native and delivered them successfully. Moreover code was shared with web as well.",
      "Mentored and trained 3 juniors in react native and helped them deliver quality features with clean code, code reviews and best coding practices.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Phonepe",
    icon: phonepe,
    iconBg: "#E6DEDD",
    date: "Feb 2018 - May 2020",
    points: [
      "Single handedly developed and delivered train booking system as one of the micro app in Phonepe Switch Team.",
      "Created React native lite, barebobe react native library needed for our micro apps. It was used by 10+ teams.",
      "Increased performance of train booking system by 30% by optimizing network calls and caching.",
      "Implemented complex animations and transitions in react native.",
      "Discovered and implemented new technologies to maximize development efficiency. I have written small tool to log network requests in react native.",
      "Worked on integrating and maintaining payment gateway in Phonepe Switch Team.",
      "One of the interesting R&D was to embed react native template inside native android/ios page. Owned it right from R&D to delivery and later maintained it.",
    ],
  },
  {
    title: "Mobile Lead Engineer",
    company_name: "Tigerhall",
    icon: tigerhall,
    iconBg: "#383E56",
    date: "June 2020 - Oct 2023",
    points: [
      "Designed and developed tigerhall mobile app and webapp from scratch keeping scalability and performance in mind. (I was first frontend engineer in Tigerhall after VP).",
      "We delivered first cut of mobile app in 3.5 months. Lots of Cross teams coordinations between CS, Business, Product and Tech team to brainstrorm issues/features.",
      "Worked on Automated release pipelines for both IOS and Android (for codepush as well), later linked with JIRA and slack as well.",
      "Mentored and nurtured team of 3 juniors, help them deliver quality features with clean code, code reviews and best coding practices. Introduced lot of quality features over the years like - smooth animations (reanimated3.0), feature flags, livestream, UI tests, sonarcube, module pattern etc",
    ],
  },
  {
    title: "Founder",
    company_name: "Parivaar",
    icon: parivaar,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Present",
    points: [
      "Building a platform for local communities to connect with each other and maintain digital records of their community events and activities.",
      "Built mobile app, webapp, admin panel using react native, expo and react js.",
      "Built out MVP in 2 months and launched it in 3 communities. Currently working on scaling it to 100 communities.",
      "parivaarapp.in",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
