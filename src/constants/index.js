import {
  mobile,
  backend,
  creator,
  web,
  git,
  welth,
  canverro,
  fossip,
  android,
  gdsc,
  bank,
  weather,
  carrent,
  codenexus,
  vibe,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Skills",
    title: "Skills",
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
    title: "App Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Competitive Programmer",
    icon: creator,
  },
];

const technologies = [

  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Flutter Developer",
    company_name: "Canverro",
    icon: canverro,
    iconBg: "#383E56",
    date: "Aug 2023 - Apr 2024",
    points: [
      "Crafted and designed a set of reusable UI components following Flutter best practices. This reduced future designrevisions by an estimated 20% due to positive client feedback.",
      "Developed and tested over 1000 lines of Flutter and Dart code utilizing BLoC and Provider State Managementpatterns; this initiative accelerated deployment timelines while ensuring a seamless user experience on bothiOS and Android.",
      "Implemented robust login and sign-up features, independently overseeing the project from design to deployment.",
      "Streamlined development and deployment processes by leveraging Jira & Agile methodologies."
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Fossip",
    icon: fossip,
    iconBg: "#E6DEDD",
    date: "May 2023 - Aug 2023",
    points: [
      "Reduced app load time by 30% through collaboration with senior developers, optimizing scalability, and improvingcode quality via rigorous code reviews.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Redesigned the app's UI framework, introducing new features and a user-friendly interface, resulting in a 25%increase in user engagement and a 15% improvement in user retention.",
      "Identified and resolved critical bugs, improving app stability and boosting performance, leading to a reduction incrash reports.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "GDSC",
    icon: gdsc,
    iconBg: "#f3f6f4",
    date: "Oct 2023 - Present",
    points: [
      "Developing and maintaining web applications using Flutter and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Android Developer",
    company_name: "Android Club VIT",
    icon: android,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Organized various events and workshops on campus.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Led the redesign of our flagship product, resulting in a 25% increase in user retention.",
    name: "Aditya",
    designation: "CTO",
    company: "Zigy Co",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    testimonial:
      "Exceptionally talented and dedicated individual.",
    name: "Ishaan",
    designation: "COO",
    company: "Foss Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Person of high integrity and reliability.",
    name: "Sharan",
    designation: "CTO",
    company: "Teachafy",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
];

const projects = [
  {
    name: "CodeNexus",
    description:
      "A Next.js & TypeScript-powered interview platform with secure authentication, real-time video calls, screen sharing, recording, and seamless interview management  for scalability and high performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next-js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "blue-text-gradient",
      },
    ],
    image: codenexus,
    source_code_link: "https://codenexus-sandhit.vercel.app/",
  },
  {
    name: "AI Finance Platform",
    description:
      "A Full-Stack AI-powered finance platform featuring secure authentication, transaction management, AI insights, budgeting, and automated workflows for scalability and performance.",
    tags: [
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "blue-text-gradient",
      },

    ],
    image: welth,
    source_code_link: "https://github.com/Sandhit06/AI-Finance-Platform",
  },
  {
    name: "Car Rent",
    description:
      "A Next.js & TypeScript-powered car showcase platform with advanced search, filtering, SSR, API-driven real-time data, responsive design, and SEO optimization for seamless user experience and performance.",
    tags: [
      {
        name: "next-js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "car api",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Sandhit06/Car-Showcase-Using-Next.js",
  },
  {
    name: "Bank App",
    description:
      "Highly scalable, event-driven fintech platform with microservices architecture, real-time transactions, AI-powered risk management, and Kubernetes-based cloud deployment for seamless financial operations.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "express-js",
        color: "green-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/Sandhit06/XNL-21BAI1743-MOBILE-1",
  },
  {
    name: "Vibe Store App",
    description:
      "Vibe Store is an e-commerce app featuring a checkout system, coupon discounts, product search, MVVM architecture, and seamless UI animations, built using Fake Store API for a smooth shopping experience.",
    tags: [
      {
        name: "kotlin",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "blue-text-gradient",
      },

    ],
    image: vibe,
    source_code_link: "https://github.com/Sandhit06/ECommerce-App",
  },
  {
    name: "Weather App",
    description:
      "Flutter Weather App provides real-time weather updates using the Weather API, featuring a sleek UI, geolocation-based forecasts, and dynamic weather animations for an intuitive user experience.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "weather api",
        color: "green-text-gradient",
      },

    ],
    image: weather,
    source_code_link: "https://github.com/Sandhit06/CombinedRepo/tree/Flutter-Login",
  },
];

export { services, technologies, experiences, testimonials, projects };
