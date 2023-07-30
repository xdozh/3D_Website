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
  om,
  CRM,
  ERP,
  Network_Monitor,
  Outsourcing,
  people,
  Recruitment,
  TD,
  techmig,
  technical,
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
    image: om,
  },
  {
    name: "Training and Development",
    description: ["At PSSTEC we provide Training and Development for Technology, Governance and Soft Skills via Classroom and Learning Management System."],
    image: TD,
  },
  {
    name: "Technology Migration",
    description: ["Find hassle-free migration solutions with PSSTEC for both on-premises and on-cloud infrastructures. We handle complex migrations in coordinated manner by zero down the risk and challenges of migration with our experts and reliable designed approach. We focus on migrating with the power of innovation and technological expertise of our team at PSSTEC."],
    image: techmig,
  },
  {
    name: "Network and Monitoring Services",
    description: ["With latest in technology, we provide the best managed network services for operations of your organization as well as look after designing and implementing new network architectures. Complete delivery of secure and optimized solution for your business. We also offer 24x7 monitoring services designed with immediate alerts and notifications."],
    image: Network_Monitor,
  },
  {
    name: "Recruitment",
    description: ["We know that a hiring process can be taxing and time consuming. With our experience and multi-level screening we make sure that we help you find the right talent. We help acquire skills that are essential and make sure that there is value add by the talent that’s engaged."],
    image: Recruitment,
  },
  {
    name: "Outsourcing Process",
    description: ["At PSSTEC, we handle complex tasks and load of your work via our outsourcing processes. Not only it can be easily onboard with flexibility on our commitments, but also with our intelligent customisable workflows which increases overall efficiency."],
    image: Outsourcing,
  },
  {
    name: "Enterprise Resource Planning",
    description: ["PSSTEC delivers business and technology innovation by using a cross-functional, workshop-driven methodology to leverage industry best practices and academic research excellence, and has supported large and complex enterprise systems for extended periods by designing efficient, low-risk processes for software support, maintenance and enhancement."],
    image: ERP,
  },
  {
    name: "Technical Capabilities",
    description: ["PSSTEC has an adequate experience of implementing ERP rollouts for many prestigious customers. We have developed mature processes that would minimize the learning curve and communication gaps. It enables us to deliver upon seamless ERP rollouts and upgrades which meet our client’s business and technical requirements."],
    image: technical,
  },
  {
    name: "People Capabilities",
    description: ["PSSTEC has a team of competent professionals to serve its customers. PSSTEC’s professionals have deep experience of developing large and complex enterprise resource planning software solutions in outsource delivery models. Our professionals are certified in the latest tools and technologies including a number of certifications around Microsoft and Cloud platforms."],
    image: people,
  },
  {
    name: "Customer Relationship Management",
    description: ["\n" +
    "Customer Relationship Management\n" +
    "PSSTEC’s strategic consulting, CRM implementation, deployment and training solutions help companies rapidly re-engineer front-office processes and technologies to engage more customers and drive better sales results. PSSTEC has CRM expertise of configuring, implementing, customizing and supporting the leading CRM technologies."],
    image: CRM,
  },
];

export { services, technologies, experiences, testimonials, projects };
