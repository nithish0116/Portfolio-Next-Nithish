import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiNodedotjs, SiMongodb, SiExpress, SiNextdotjs, SiPostgresql, SiRedux, SiTailwindcss } from "react-icons/si";

export const navlink = [
    {
      url: "/",
      text: "Home",
    },
    {
      url: "/about",
      text: "About",
    },
    {
      url: "/services",
      text: "Services",
    },
    {
      url: "/blog",
      text: "Blog",
    },
    {
      url: "/contact",
      text: "Contact",
    },
  ];

  export const home = [
  {
    text: "HELLO I'M",
    name: "GADALA NITHISH",
    post: "WEB DEVELOPER",
    design: "UI / UX DESIGNER",
    fullstack:"FRONTEND DEVELOPER",
  },
];

export const about = [
  {
    desc: "As a Front-end Developer, I am responsible for designing and implementing responsive user interfaces using the React.js library. My role includes building reusable components, optimizing application performance, and ensuring cross-browser and cross-device compatibility. I collaborate with UX/UI designers and back-end developers to integrate APIs and translate wireframes into high-quality code. Additionally, I ensure the application’s scalability and maintainability through constant testing and debugging. Strong skills in JavaScript, React, HTML/CSS, state management libraries like Redux, and version control systems like Git are essential. I work to ensure a seamless user experience by adhering to best coding practices and contributing to the overall development process.",
    // desc1:
    //   "Contributing towards innovative projects that leverage top-of-the-line frontend technology against robust backend systems using MongoDB, SQL, or PostgreSQL is of great interest. Committed to delivering scalable and efficient solutions with good-quality code, using Jest and unit testing to provide reliability and maintainability",
    cover: "./images/man.png",

    frontendtitle:"Frontend Development",
    frontendcontent:' I specialize in building visually appealing and responsive interfaces using technologies like HTML, CSS, JavaScript, and frameworks like React and Next.js. My toolkit also includes Bootstrap and Tailwind CSS for efficient styling.',
    backendtitle:'Backend Development',
    backendcontent:
    'For backend development, I work with Node.js, Express.js and MongoDB to create scalable and efficient APIs. My focus is on performance optimization and ensuring seamless communication between the frontend and backend.',

    tools: 'Tools',
    toolscontent: 'I use Git for version control, enabling efficient collaboration and maintaining clean, organized codebases. With GitHub, I manage repositories, contribute to open-source projects, and ensure streamlined workflows for development teams.'
  },
];

export  const techSkills = [
  { icon: <FaHtml5 color="#E34F26" size={50} />, name: "HTML" },
  { icon: <FaCss3 color="#1572B6" size={50} />, name: "CSS" },
  { icon: <SiTailwindcss color="#61DAFB" size={50} />, name: "Tailwind" },
  { icon: <FaJs color="#F7DF1E" size={50} />, name: "JavaScript" },
  { icon: <FaReact color="#61DAFB" size={50} />, name: "React" },
  { icon: <SiRedux color="#61DAFB" size={50} />, name: "Redux" },
  { icon: <SiNextdotjs size={50} />, name: "Next.js" },
  { icon: <FaFigma color="#F24E1E" size={50} />, name: "Figma" },
  { icon: <SiNodedotjs color="#339933" size={50} />, name: "Node.js" },
  { icon: <SiExpress color="#808080" size={50}/>, name:"EXpress.Js"},
  { icon: <SiMongodb color="#47A248" size={50} />, name: "MongoDB" },
  { icon: <SiPostgresql color="#4479A1" size={50} />, name: "Postgresql" },
];

export const contact = [
  {
    // icon: <AddLocationAltOutlined />,
    text1: "Hyderabad, Telangana, India",
  },
  {
    // icon: <PhoneIphone />,
    text1: "+91 9573114609",
  },
  {
    // icon: <EmailOutlined />,
    text1: "gadalanithish07@gmail.com",
  },
];