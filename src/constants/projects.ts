export type ValidSkills =
  | "Next.js"
  | "React"
  | "GraphQL"
  | "Nest.js"
  | "express.js"
  | "Node.js"
  | "MongoDB"
  | "Typescript"
  | "Javascript"
  | "HTML 5"
  | "CSS 3"
  | "React Native"
  | "Angular"
  | "Redux"
  | "Socket.io"
  | "Material UI"
  | "Tailwind CSS"
  | "AWS"
  | "Bootstrap"
  | "Google Auth"
  | "MySQL"
  | "Appwrite"
  | "Tailwind CSS"
  | "Redux-Toolkit"
  | "React Router"
  | "Context API"

export type ValidCategory =
  | "Full Stack"
  | "Frontend"
  | "Backend"
  | "UI/UX"
  | "Web Dev"
  | "Mobile Dev"
  | "3D Modeling"
  | "MERN"



export type ValidPages = "skills" | "experience" | "contact" ;

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate?: Date;
  endDate?: Date;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    "id": "comprehensive-blog-website",
    "category": ["Web Dev", "Full Stack", "MERN"],
    "shortDescription": "Developed a comprehensive blog website focusing on building full stack applications using React and Appwrite.",
    "websiteLink": "https://blog-website-five-psi.vercel.app/",
    "githubLink": "https://github.com/anish3333/Blog-Website",
    "techStack": [
      "React",
      "Appwrite",
      "Tailwind CSS",
      "Redux-Toolkit",
      "React Router",
      "Context API"
    ],
    "descriptionDetails": {
      "paragraphs": [
        "This project is a comprehensive blog website designed to teach full stack application development using React and Appwrite.",
        "The website covers React basics, hooks, context API, and integration with Appwrite for backend services."
      ],
      "bullets": [
        "Learned React Basics and Internal Workings",
        "Deep dived into React Hooks with project-based learning",
        "Understood Virtual DOM, Fibre, and Reconciliation",
        "Integrated Tailwind CSS for efficient styling",
        "Implemented React Router for navigation",
        "Used Context API for state management",
        "Built a full-stack application with Appwrite",
        "Focused on production-grade application development"
      ]
    },
    "pagesInfoArr": [
      {
        "title": "Landing Page",
        "description": "This page is protected and does not allow viewer to see public posts when not logged in, after login you can view all public post",
        "imgArr": [
          "/images/projects/blog-website/landing.png"
        ]
      },
      {
        "title": "Post Detail",
        "description": "You can check the title, content and the  picture of a post",
        "imgArr": [
          "/images/projects/blog-website/post_detail.png"
        ]
      },
      {
        "title": "Add your own post",
        "description": "you can add your own post if you are logged in and use the integrated text editor as well, add images, set the post public or private.",
        "imgArr": [
          "/images/projects/blog-website/add_post.png",
          "/images/projects/blog-website/added_new_post.png"
        ]
      },
      {
        "title": "Edit newly Added Post",
        "description": "Some actions you can take on a newly added post is editing the post content or picture or deleting the post",
        "imgArr": [
          "/images/projects/blog-website/new_post_actions.png",
          "/images/projects/blog-website/edit_your_post.png",
        ]
      }
    ]
  },
  {
    "id": "zoom-clone-nextjs",
    "category": ["Web Dev", "Full Stack"],
    "shortDescription": "Developed a Zoom clone focusing on building full stack applications using Next.js.",
    "websiteLink": "https://github.com/adrianhajdin/project_video_chat",
    "githubLink": "https://github.com/adrianhajdin/project_video_chat",
    "techStack": [
      "Next.js",
      "React",
      "Node.js"
    ],
    "descriptionDetails": {
      "paragraphs": [
        "This project is a comprehensive Zoom clone designed to teach full stack application development using Next.js.",
        "The project covers Next.js for server-side rendering, WebRTC for real-time communication, and integration with Socket.io for real-time events."
      ],
      "bullets": [
        "Learned Next.js for server-side rendering",
        "Integrated WebRTC for real-time video communication",
        "Used Socket.io for real-time events",
        "Implemented peer-to-peer connections with PeerJS",
        "Styled components using Material-UI",
        "Developed a full-stack application with Node.js and Express",
        "Focused on production-grade application development"
      ]
    },
    "pagesInfoArr": [
      {
        "title": "Introduction to the Project",
        "description": "An overview of the Zoom clone project, its features, and the technologies used.",
        "imgArr": [
          "/experience/zoomClone/project_intro_1.webp",
          "/experience/zoomClone/project_intro_2.webp"
        ]
      },
      {
        "title": "Real-Time Video Communication",
        "description": "Detailed implementation of real-time video communication using WebRTC and PeerJS.",
        "imgArr": [
          "/experience/zoomClone/real_time_video_1.webp",
          "/experience/zoomClone/real_time_video_2.webp"
        ]
      },
      {
        "title": "Real-Time Events with Socket.io",
        "description": "Setting up real-time events and communication using Socket.io for seamless user experience.",
        "imgArr": [
          "/experience/zoomClone/real_time_events_1.webp",
          "/experience/zoomClone/real_time_events_2.webp"
        ]
      },
      {
        "title": "UI Components with Material-UI",
        "description": "Using Material-UI to style components and ensure a consistent and responsive design.",
        "imgArr": [
          "/experience/zoomClone/material_ui_1.webp"
        ]
      }
    ]
  }
  
  
];

export const featuredProjects = Projects.slice(0, 3);
