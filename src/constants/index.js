import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  phonepe,
  sprinklr,
  tigerhall,
  parivaar,
  rnsb,
  rnsh,
  rnec,
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
    name: "React native",
    icon: reactjs,
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
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
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
      "If you're looking for a person who is hardworking, prioritizes user experience, and has great technical skills, Ronak is the one! He is someone who always takes the initiative to optimize processes and prioritize work based on delivering maximum value to the end user. I could count on him to explain technical knowledge in a simple manner for me to understand. A great leader, team player, and friend working with Ronak has been such a wonderful experience!",
    name: "Aishwarya Sriram",
    designation: "Product Manager",
    company: "Tigerhall",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    testimonial: `He led our squad! 
From the very beginning of my onboarding process, Ronak took the initiative to ensure that I had all the necessary information about the products and services we offer. His ability to create a positive and inclusive team culture fosters collaboration and promotes a sense of belonging among team members.
His dedication to helping others, exceptional knowledge, and outstanding leadership qualities make him an invaluable asset to any team`,
    name: "Heena",
    designation: "Frontend Lead",
    company: "Tigerhall",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: `Ronak is an experienced mobile and front-end engineer, and definitely a great guy! He always delivers high-quality work with humility, focus and integrity. He has been an incredible colleague at Tigerhall, a pleasure to work with him, always ready to help others and share his insights, open to give and receive feedback.

Good technical skills can be developed easily, but humility and integrity not. He has it all!`,
    name: "Carlos Fernandez",
    designation: "Frontend Lead",
    company: "Tigerhall",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const projects = [
  {
    name: "React native submit button",
    description:
      "Open Source React Native package to create a submit button with loading and success state.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
    ],
    image: rnsb,
    source_code_link: "https://github.com/ronak301/react-native-submit-button",
  },
  {
    name: "React native Scrollable Header",
    description:
      "React Native Project cloning spotify like scrollable header with animation and parallax effect.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },
    ],
    image: rnsh,
    source_code_link:
      "https://github.com/ronak301/react-native-scrollable-header",
  },
  {
    name: "React native Expanding Collection",
    description:
      "React Native package to create an expanding collection with shared element transition effect.",
    tags: [
      {
        name: "react-native-reanimated",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },
    ],
    image: rnec,
    source_code_link:
      "https://github.com/ronak301/react-native-expanding-collection",
  },
];

export { services, technologies, experiences, testimonials, projects };
