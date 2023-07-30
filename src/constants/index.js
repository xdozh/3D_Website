import {
  mobile,
  creator,
  web,
  aws,
  cisco,
  gold,
  nokia,
  Nutanix1,
  Viavi,
  cygnature,
  sap,
  indus_smart,
  consulting,
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
    description: "PSSTEC is a partners-innovation and talent management company. We provide cutting edge Information and Communication Technology (ICT) solutions and services across industries. To sum up, we provide robust and sustainable solutions.",
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
    name: "AWS",
    icon: aws,
  },
  {
    name: "Cisco",
    icon: cisco,
  },
  {
    name: "Gold",
    icon: gold,
  },
  {
    name: "nokia",
    icon: nokia,
  },
  {
    name: "Nutanix1",
    icon: Nutanix1,
  },
  {
    name: "sap",
    icon: sap,
  },
  {
    name: "Viavi",
    icon: Viavi,
  },
  {
    name: "cygnature",
    icon: cygnature,
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
    image: consulting,
  },
  {
    name: "Industry Smart Solution",
    description: ["Our AI and Predictive analysis tools intelligently identify the real business needs for cloud, IOT, and APP based solution with AI and Predictive Analysis."],
    image: indus_smart,
  },
  {
    name: "Operations Management",
    description: ["At PSSTEC we also manage end-to-end solutions for operations which include Managed Services, Monitoring Audit, Staff Augmentation Warranty and Operations Management."],
    image: consulting,
  },
];

export { services, technologies, experiences, testimonials, projects };
