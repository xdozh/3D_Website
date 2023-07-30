import {
  mobile,
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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [

  {
    id: "about",
    title: "About Us",
  },
    {
    id: "work",
    title: "Services",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
];

const services = [
  {
    title: "Sustainable Solutions",
    description: "PSSTEC is a tech-innovation and talent management company. We provide cutting edge Information and Communication Technology (ICT) solutions and services across industries. To sum up, we provide robust and sustainable solutions.",
    icon: web,
  },
  {
    title: "Goal Oriented",
    description: "Our expertise in niche market sectors, project management, and unparalleled design implementation with a vendor-agnostic approach helps build solutions for immediate and long term goals of customer and keep them ahead of competitive world.",
    icon: mobile,
  },
  {
    title: "Customized Design",
    description: "At PSSTEC, we facilitate clients by transforming mechanical business processes into digital systems by deep technology assessment. We at PSSTEC strive to give your business a competitive advantage by creating value with customized design solutions.",
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

];

const experiences = [

  {
    counter: 1,
    title: "Examine the world from your view",
    iconBg: "#FE5D15",
    points: [
      "Our expert expeditiously understands your requisites and represents it to you in a documented format and, makes it easy to understand to all the stakeholders."],
  },
  {
    counter: 2,
    title: "Turn conception into reality",
    iconBg: "#FE5D15",
    points: ["We engender a robust and sustainable solution using the latest technology and trends to keep it open while also accepting all future transmutation in our nimble world."],
  },
  {
    counter: 3,
    title: "Ontime incremental delivery and support",
    iconBg: "#FE5D15",
    points: ["Inspired and focused minds make it possible to build a paradise in record time and to distribute the solutions on time with decent post-engagement support."],
  },
  /*
  {
    counter: 1,
    title: "Examine the world from your view",
    iconBg: "#fff"
    points: [
      "Our expert expeditiously understands your requisites and represents it to you in a documented format and, makes it easy to understand to all the stakeholders."],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  */
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
    name: "Consulting and Advisory",
    description: ["We provide consulting and advisory on Digital Transformation, Technology Transformation, Cyber Security, GRC, TCO Re-engineering, Procurement as Service, and Digital Marketing."],
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
