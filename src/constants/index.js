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

  {
    id: "github",
    title: "Github",
    isExternal: true,
    link: "https://github.com/ronak301",
  },
  {
    id: "resume",
    title: "Resume",
    isExternal: true,
    link: "https://drive.google.com/file/d/1tUccyMuDT2UstFOwLdANRwaD_GSn22DM/view?usp=drive_link",
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

const blogs = [
  {
    title: "First Blog",
    description: "First Blog Description",
    datePublished: "2021-10-10",
  },
  {
    title: "Second Blog",
    description: "Second Blog Description",
    datePublished: "2021-10-10",
  },
];

const experiences = [
  {
    title: "Founder",
    company_name: "Parivaar",
    icon: parivaar,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      `Founded Parivaar, an online community management platform.`,
      `Utilized Expo for rapid Android and iOS app deployment.`,
      `Implemented various modules including self onboarding, directory management, user filtering, community management, dynamic flags.`,
      `Scaled to 10K users, acquired 5 clients in 3 months, enhancing community engagement.`,
    ],
  },

  {
    title: "Mobile Lead Engineer",
    company_name: "Tigerhall",
    icon: tigerhall,
    iconBg: "#383E56",
    date: "August 2020 - June 2023",
    points: [
      "Spearheaded end-to-end development and launch of mobile products with user-centric design",
      "Fostered cross-departmental collaboration, particularly with Customer Support.",
      "Mentored development teams, ensuring proficiency in iOS/Android and agile methodologies while managing project timelines and milestones.",
    ],
  },

  {
    title: "Senior Software Engineer",
    company_name: "Phonepe",
    icon: phonepe,
    iconBg: "#E6DEDD",
    date: "Feb 2018 - May 2020",
    points: [
      "Developed React Native microapps within the PhonePe ecosystem.",
      "Leveraged expertise in React Native and native development to deliver high-quality microapps.",
      "Collaborated closely with native developers to integrate microapps smoothly.",
    ],
  },

  {
    title: "Product Engineer",
    company_name: "Sprinklr",
    icon: sprinklr,
    iconBg: "#383E56",
    date: "Jan 2015 - Feb 2018",
    points: [
      "Began career at Sprinklr maintaining iOS apps in Objective-C.",
      "Leveraged expertise in both Objective-C and React Native to troubleshoot and optimize apps. Played a pivotal role in maintaining and evolving Sprinklr's React Native mobile offerings.",
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

export { services, technologies, experiences, testimonials, projects, blogs };
