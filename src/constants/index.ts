import { Icons } from "@/components/Icons";

export const navbarLinks = [
  {
    label: "Home",
    route: "/",
    imageURL: "/icons/home.svg",
  },
  {
    label: "Skills",
    route: "/skills",
    imageURL: "/icons/about.svg",
  },
  {
    label: "Projects",
    route: "/projects",
    imageURL: "/icons/project.svg",
  },
];

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skills: skillsInterface[] = [
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 3,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "express.js",
    description:
      "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 3,
    icon: Icons.typescript,
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "Redux",
    description:
      "Manage app state effectively using a predictable and centralized state container.",
    rating: 4,
    icon: Icons.redux,
  },
  {
    name: "Socket.io",
    description:
      "Enable real-time, bidirectional communication between clients and servers effortlessly.",
    rating: 2,
    icon: Icons.socketio,
  },
  {
    name: "Tailwind CSS",
    description:
      "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "Bootstrap",
    description:
      "Quickly create responsive and appealing web designs using a popular CSS framework.",
    rating: 2,
    icon: Icons.bootstrap,
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 3,
    icon: Icons.mysql,
  },
  {
    name: "Netlify",
    description:
      "Deploy and manage modern web projects with an intuitive, powerful platform.",
    rating: 4,
    icon: Icons.netlify,
  },
];

export const skillsSorted = skills.slice().sort((a, b) => b.rating - a.rating);

export const frontPageSkills = skillsSorted.slice(0, 6);

// export type ValidSkills =
//   | "Next.js"
//   | "React"
//   | "GraphQL"
//   | "Nest.js"
//   | "express.js"
//   | "Node.js"
//   | "MongoDB"
//   | "Typescript"
//   | "Javascript"
//   | "HTML 5"
//   | "CSS 3"
//   | "React Native"
//   | "Angular"
//   | "Redux"
//   | "Socket.io"
//   | "Material UI"
//   | "Tailwind CSS"
//   | "AWS"
//   | "Bootstrap"
//   | "Google Auth"
//   | "MySQL"
//   | "Appwrite"
//   | "Tailwind CSS"
//   | "Redux-Toolkit"
//   | "React Router"
//   | "Context API";

// export type ValidCategory =
//   | "Full Stack"
//   | "Frontend"
//   | "Backend"
//   | "UI/UX"
//   | "Web Dev"
//   | "Mobile Dev"
//   | "3D Modeling";


// export type ValidPages = "skills" | "experience" | "contact" ;

// interface PagesInfoInterface {
//   title: string;
//   imgArr: string[];
//   description?: string;
// }

// interface DescriptionDetailsInterface {
//   paragraphs: string[];
//   bullets: string[];
// }

// export interface ProjectInterface {
//   id: string;
//   category: ValidCategory[];
//   shortDescription: string;
//   websiteLink?: string;
//   githubLink?: string;
//   techStack: ValidSkills[];
//   startDate?: Date;
//   endDate?: Date;
//   descriptionDetails: DescriptionDetailsInterface;
//   pagesInfoArr: PagesInfoInterface[];
// }

// export const Projects: ProjectInterface[] = [
//   {
//     id: "built-design",
//     category: ["Web Dev", "Full Stack", "UI/UX"],
//     shortDescription:
//       "Developed and optimized a high-performing website catering to over 4000 users, emphasizing efficiency and maintainability.",
//     websiteLink: "https://builtdesign.in",
//     githubLink: "",
//     techStack: [
//       "Next.js",
//       "React",
//       "Node.js",
//       "MongoDB",
//       "GraphQL",
//       "Nest.js",
//       "Typescript",
//     ],
//     startDate: new Date("2021-07-01"),
//     endDate: new Date("2022-07-01"),
//     descriptionDetails: {
//       paragraphs: [],
//       bullets: [],
//     },
//     pagesInfoArr: [
//       {
//         title: "Landing Page",
//         description: "test description",
//         imgArr: [
//           "/experience/builtdesign/landing_1.webp",
//           "/experience/builtdesign/landing_3.webp",
//           "/experience/builtdesign/landing_5.webp",
//           "/experience/builtdesign/landing_6.webp",
//           "/experience/builtdesign/landing_2.webp",
//           "/experience/builtdesign/landing_4.webp",
//         ],
//       },
//       {
//         title: "Custom PDF Reader and optimizer",
//         description: "test description",
//         imgArr: ["/experience/builtdesign/pdf_opt.webp"],
//       },
//       {
//         title: "Clients Dashboard",
//         description: "test description",
//         imgArr: [
//           "/experience/builtdesign/cli_dashboard_1.webp",
//           "/experience/builtdesign/cli_dashboard_2.webp",
//           "/experience/builtdesign/cli_dashboard_3.webp",
//         ],
//       },
//     ],
//   },
//   {
//     "id": "comprehensive-blog-website",
//     "category": ["Web Dev", "Full Stack"],
//     "shortDescription": "Developed a comprehensive blog website focusing on building full stack applications using React and Appwrite.",
//     "websiteLink": "https://www.freecodecamp.org/news/comprehensive-full-stack-react-with-appwrite/",
//     "githubLink": "",
//     "techStack": [
//       "React",
//       "Appwrite",
//       "Tailwind CSS",
//       "Redux-Toolkit",
//       "React Router",
//       "Context API"
//     ],
//     "descriptionDetails": {
//       "paragraphs": [
//         "This project is a comprehensive blog website designed to teach full stack application development using React and Appwrite.",
//         "The website covers React basics, hooks, context API, and integration with Appwrite for backend services."
//       ],
//       "bullets": [
//         "Learned React Basics and Internal Workings",
//         "Deep dived into React Hooks with project-based learning",
//         "Understood Virtual DOM, Fibre, and Reconciliation",
//         "Integrated Tailwind CSS for efficient styling",
//         "Implemented React Router for navigation",
//         "Used Context API for state management",
//         "Built a full-stack application with Appwrite",
//         "Focused on production-grade application development"
//       ]
//     },
//     "pagesInfoArr": [
//       {
//         "title": "Introduction to React",
//         "description": "An overview of React basics and internal workings, including JSX and React libraries.",
//         "imgArr": [
//           "/experience/blogProject/react_intro_1.webp",
//           "/experience/blogProject/react_intro_2.webp"
//         ]
//       },
//       {
//         "title": "React Hooks",
//         "description": "Detailed exploration of React hooks like useEffect, useRef, and useCallback, with practical applications.",
//         "imgArr": [
//           "/experience/blogProject/react_hooks_1.webp",
//           "/experience/blogProject/react_hooks_2.webp"
//         ]
//       },
//       {
//         "title": "Tailwind CSS Integration",
//         "description": "Using Tailwind CSS, a utility-first CSS framework, to style React components efficiently.",
//         "imgArr": [
//           "/experience/blogProject/tailwind_css_1.webp"
//         ]
//       },
//       {
//         "title": "Full-Stack Development with Appwrite",
//         "description": "Building a full-stack application using Appwrite for authentication, databases, queries, and storage.",
//         "imgArr": [
//           "/experience/blogProject/appwrite_fullstack_1.webp",
//           "/experience/blogProject/appwrite_fullstack_2.webp"
//         ]
//       }
//     ]
//   },
//   {
//     "id": "zoom-clone-jsMastery",
//     "category": ["Web Dev", "Full Stack"],
//     "shortDescription": "Developed a Zoom clone focusing on building full stack applications using Next.js.",
//     "websiteLink": "https://github.com/adrianhajdin/project_video_chat",
//     "githubLink": "https://github.com/adrianhajdin/project_video_chat",
//     "techStack": [
//       "Next.js",
//       "React",
//       "Node.js"
//     ],
//     "descriptionDetails": {
//       "paragraphs": [
//         "This project is a comprehensive Zoom clone designed to teach full stack application development using Next.js.",
//         "The project covers Next.js for server-side rendering, WebRTC for real-time communication, and integration with Socket.io for real-time events."
//       ],
//       "bullets": [
//         "Learned Next.js for server-side rendering",
//         "Integrated WebRTC for real-time video communication",
//         "Used Socket.io for real-time events",
//         "Implemented peer-to-peer connections with PeerJS",
//         "Styled components using Material-UI",
//         "Developed a full-stack application with Node.js and Express",
//         "Focused on production-grade application development"
//       ]
//     },
//     "pagesInfoArr": [
//       {
//         "title": "Introduction to the Project",
//         "description": "An overview of the Zoom clone project, its features, and the technologies used.",
//         "imgArr": [
//           "/experience/zoomClone/project_intro_1.webp",
//           "/experience/zoomClone/project_intro_2.webp"
//         ]
//       },
//       {
//         "title": "Real-Time Video Communication",
//         "description": "Detailed implementation of real-time video communication using WebRTC and PeerJS.",
//         "imgArr": [
//           "/experience/zoomClone/real_time_video_1.webp",
//           "/experience/zoomClone/real_time_video_2.webp"
//         ]
//       },
//       {
//         "title": "Real-Time Events with Socket.io",
//         "description": "Setting up real-time events and communication using Socket.io for seamless user experience.",
//         "imgArr": [
//           "/experience/zoomClone/real_time_events_1.webp",
//           "/experience/zoomClone/real_time_events_2.webp"
//         ]
//       },
//       {
//         "title": "UI Components with Material-UI",
//         "description": "Using Material-UI to style components and ensure a consistent and responsive design.",
//         "imgArr": [
//           "/experience/zoomClone/material_ui_1.webp"
//         ]
//       }
//     ]
//   }
  
  
// ];

// export const featuredProjects = Projects.slice(0, 3);
