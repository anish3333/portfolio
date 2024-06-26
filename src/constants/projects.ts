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
  | "TypeScript"
  | "GetStream"
  | "Clerk"
  | "shadcn"
  | "react-hot-toast"

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
    "id": "flash-flow",
    "category": ["Web Dev", "Full Stack"],
    "shortDescription": "An advanced video conferencing application that mirrors the functionality of Zoom, built using Next.js and modern web technologies.",
    "websiteLink": "https://flash-flow.vercel.app",
    "githubLink": "https://github.com/anish3333/FlashFlow",
    "techStack": [
      "Next.js",
      "TypeScript",
      "GetStream",
      "Clerk",
      "Tailwind CSS",
      "shadcn",
      "react-hot-toast"
    ],
    "descriptionDetails": {
      "paragraphs": [
        "FlashFlow is a comprehensive video conferencing application designed to provide a seamless and secure experience for users.",
        "Built with modern technologies, FlashFlow leverages Next.js for server-side rendering, TypeScript for enhanced development experience, and integrates GetStream for real-time communication.",
        "Clerk is used for robust user authentication and management, while Tailwind CSS and shadcn ensure a visually appealing and responsive user interface.",
        "Dynamic notifications are implemented using react-hot-toast, enhancing the user experience with informative and interactive notifications."
      ],
      "bullets": [
        "Real-time Video Conferencing powered by GetStream",
        "Screen Sharing for better collaboration",
        "Secure Authentication with Clerk",
        "Modern and Responsive UI built with Tailwind CSS and shadcn",
        "User-friendly Notifications using react-hot-toast",
        "Effortless User Management features"
      ]
    },
    "pagesInfoArr": [
      {
        "title": "Landing Page",
        "description": "An overview of FlashFlow, its features",
        "imgArr": [
          "/images/projects/flash-flow/landing.png"
        ]
      },
      {
        "title": "Upcomign and Previous Meetings",
        "description": "Detailed implementation of real-time video conferencing using GetStream.",
        "imgArr": [
          "/images/projects/flash-flow/previous.png",
          "/images/projects/flash-flow/upcoming.png"
        ]
      },
      {
        "title": "Main Video Calling Interface",
        "description": "Explanation of the authentication system implemented using Clerk.",
        "imgArr": [
          "/images/projects/flash-flow/meeting.png",
          "/images/projects/flash-flow/meeting2.png"
        ]
      },
      {
        "title": "Video Recordings",
        "description": "Insight into the responsive UI design using Tailwind CSS and shadcn.",
        "imgArr": [
          "/images/projects/flash-flow/recordings.png",
        ]
      }
    ]
  }
];

export const featuredProjects = Projects.slice(0, 3);
