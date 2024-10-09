import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServerLine } from "react-icons/ri";
import TYPING from "../assets/typing.png";
import DESIGN from "../assets/design.png";
import OPTIMIZATION from "../assets/optimization.png";
import IMG1 from "../assets/portfolio1.jpg";
import IMG2 from "../assets/portfolio2.jpg";
import IMG3 from "../assets/portfolio3.jpg";
import IMG4 from "../assets/portfolio4.jpg";
import IMG5 from "../assets/portfolio5.jpg";
import IMG6 from "../assets/portfolio6.jpg";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import client4 from "../assets/client4.jpg";
import client5 from "../assets/client5.jpg";
import client6 from "../assets/client6.jpg";

export const navTabs = [
  {
    icon: <AiOutlineHome />,
    id: "",
  },
  {
    icon: <AiOutlineUser />,
    id: "about",
  },
  {
    icon: <BiBook />,
    id: "experience",
  },
  {
    icon: <RiServerLine />,
    id: "services",
  },
  {
    icon: <BiMessageSquareDetail />,
    id: "contact",
  },
];
export const services = [
  {
    title: "Custom Web Development",
    image: TYPING,
    description: `Build fully customized, responsive websites tailored to your business needs with modern tech stacks.`,
  },
  {
    title: "Full-Stack Application Development",
    image: DESIGN,
    description: `Develop scalable, feature-rich web applications, including front-end, back-end, and API integrations.`,
  },
  {
    title: "Website Maintenance & Optimization",
    image: OPTIMIZATION,
    description: `Ensure smooth performance with regular updates, security checks, and speed optimization.`,
  },
];

export const portfolio = [
  {
    image: IMG1,
    title: "A fullstack web developer's portfolio",
    description: `A personal portfolio showcasing expertise in full-stack web development, highlighting proficiency in both frontend and backend technologies through dynamic, responsive, and feature-rich web applications.`,
    github: "https://github.com/",
    demo: "#",
  },
  {
    image: IMG2,
    title: "Web developer's portfolio",
    description: `A sleek, modern portfolio designed to display a web developer's skills, projects, and experience. Built with cutting-edge tools and technologies, this site offers a seamless user experience with a focus on clean design.`,
    github: "https://github.com/",
    demo: "#",
  },
  {
    image: IMG3,
    title: "Animated construction company's website",
    description: `A visually captivating construction company website using React and GSAP for smooth animations and interactions, offering clients an engaging way to explore services and previous projects.`,
    github: "https://github.com/",
    demo: "#",
  },
  {
    image: IMG4,
    title: "Digital agency web application",
    description: `A feature-packed web application for a digital agency, providing a streamlined platform to manage projects, collaborate with clients, and deliver creative services efficiently.`,
    github: "https://github.com/",
    demo: "#",
  },
  {
    image: IMG5,
    title: "Real estate web application dashboard",
    description: `A powerful dashboard application for real estate management, offering users access to property listings, analytics, and administrative tools in a user-friendly interface.`,
    github: "https://github.com/",
    demo: "#",
  },
  {
    image: IMG6,
    title: "AI powered web application",
    description: `A cutting-edge AI-driven web application designed to leverage machine learning algorithms for smarter decision-making and automation, delivering personalized user experiences and efficient workflows.`,
    github: "https://github.com/",
    demo: "#",
  },
];

export const testimonials = [
  {
    profile: client1,
    name: "Jessica Harper",
    position: "Product Manager",
    company: "echNova Solutions",
    content: `Emmanuel transformed our website’s user experience! His attention to detail and ability to translate our vision into a seamless interface was exceptional. We saw an immediate improvement in user engagement.`,
  },
  {
    profile: client2,
    name: "Mark Thompson",
    position: "CEO",
    company: "Dynamic Designs",
    content: `Working with Emmanuel was a breeze! He’s fast, communicative, and his code is always clean and efficient. Our website looks and performs better than ever.`,
  },
  {
    profile: client3,
    name: "Clara Mensah",
    position: "Marketing Director",
    company: "BrightPath Agency",
    content: `Emmanuel’s frontend skills took our branding to the next level. He was able to bring our design concepts to life with stunning accuracy and creativity. I highly recommend him!`,
  },
  {
    profile: client4,
    name: "Samuel Okwuosa",
    position: "CTO",
    company: "Greenline Tech",
    content: `Emmanuel is hands-down one of the best frontend developers I've worked with. His expertise made our site not only look great but perform flawlessly across all devices.`,
  },
  {
    profile: client5,
    name: "Linda Ruiz",
    position: "Co-Founder",
    company: "PixelSpark Creative Studio",
    content: `Emmanuel is incredibly talented. He consistently delivers pixel-perfect designs and smooth user experiences. I appreciate his dedication to excellence and innovation."`,
  },
  {
    profile: client6,
    name: "Tunde Adebayo",
    position: "Lead Developer",
    company: "CodeWave",
    content: `Emmanuel is a top-notch frontend developer! His work always exceeds expectations, and he’s a pleasure to collaborate with. Our site is now faster and more user-friendly than ever.`,
  },
];
