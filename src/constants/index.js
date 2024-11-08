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
  starbucks,
  ymslii,
  carrent,
  jobit,
  tripguide,
  threejs,
  pureEV,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Angular Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "MongoDB",
    icon: mongodb,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "PureEV",
    icon: pureEV,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jun 2022",
    points: [
      "Implemented responsive design principles to ensure seamless user experience across various devices.",
      "Ensured cross-platform functionality and resolved UI/UX issues through consistent testing and feedback loops.",
      "Participated in code reviews, offering constructive feedback to peers and improving code quality.",
      "Contributed to the design and enhancement of the front-end architecture for better maintainability.",
    ],
  },
  {
    title: "Graduate Engineer Trainee",
    company_name: "Yamaha Motor Solutions India Ltd. (YMSLI)",
    icon: ymslii,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Jun 2023",
    points: [
      "Collaborated as part of a 15-member team to develop a Learning and Development System (LDS) using Angular, Spring Boot, and PostgreSQL.",
      "Assisted in building user interfaces and implementing client-side logic using Angular.",
      "Worked closely with senior developers to ensure seamless integration between the frontend and backend services.",
      "Engaged in testing and debugging to enhance the functionality and reliability of the LDS project.",
      "Contributed to discussions on best practices for scalable and maintainable code.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Yamaha Motor Solutions India Ltd. (YMSLI)",
    icon: ymslii,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Aug 2024",
    points: [
      "Led the development of the Andon project, handling the complete lifecycle from design to deployment using Spring Boot, Angular, and Kafka.",
"Spearheaded front-end development tasks to create user-friendly, real-time operation panels.",
"Worked on the Dealer Management System (DMS) to enhance and maintain key functionalities for improved user interaction.",
"Developed and maintained robust back-end services using Java and PostgreSQL, ensuring high performance and scalability.",
"Provided mentorship and support to junior developers, fostering a collaborative and efficient work environment.",
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
