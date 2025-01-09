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
  | "IN PROGRESS"



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
        "description": "The landing page is the main entry point for the application, where users can sign in, create an account, or view their dashboard.",
        "imgArr": [
          "/images/projects/flash-flow/landing.png"
        ]
      },
      {
        "title": "Upcoming and Previous Meetings",
        "description": "upcoming and previous meetings are displayed on the dashboard, and users can view the details of each meeting.",
        "imgArr": [
          "/images/projects/flash-flow/previous.png",
          "/images/projects/flash-flow/upcoming.png"
        ]
      },
      {
        "title": "Main Video Calling Interface",
        "description": "The main video calling interface is where the user can start a new meeting, join an existing meeting, and view the meeting details.",
        "imgArr": [
          "/images/projects/flash-flow/meeting.png",
          "/images/projects/flash-flow/meeting2.png"
        ]
      },
      {
        "title": "Video Recordings",
        "description": "recorded videos are stored in the database and can be viewed by the user.",
        "imgArr": [
          "/images/projects/flash-flow/recordings.png",
        ]
      }
    ]
  },
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
    "id": "video-sharing-website",
    "category": ["Web Dev", "Full Stack", "IN PROGRESS"],
    "shortDescription": "A video-sharing website clone inspired by YouTube, featuring functionalities such as video uploads, viewing, and user interactions.",
    "websiteLink": "https://youtube-clone-mern-mu.vercel.app",
    "githubLink": "https://github.com/anish3333/YoutubeClone-MERN",
    "techStack": [
      "React",
      "Node.js",
      "express.js",
      "MongoDB",
      "Tailwind CSS"
    ],
    "descriptionDetails": {
      "paragraphs": [
        "The YouTube Clone is a full-featured video-sharing application that mirrors the functionality of YouTube, providing users with a platform to upload, view, and interact with videos.",
        "This project utilizes modern web technologies such as React for the front-end and Node.js with Express.js for the back-end, ensuring a robust and scalable architecture.",
        "MongoDB is used as the database to store user information, videos, and other metadata, while Tailwind CSS ensures a responsive and aesthetically pleasing user interface.",
        "The application includes features such as user authentication, video uploading, real-time comments, and video recommendations."
      ],
      "bullets": [
        "Video Upload and Streaming",
        "Real-time Comments and Interactions",
        "User Authentication and Profile Management",
        "Responsive UI with Tailwind CSS",
        "Video Recommendations and Search Functionality",
        "Robust Backend with Node.js and Express.js"
      ]
    },
    "pagesInfoArr": [
      {
        "title": "Home Page",
        "description": "Overview of the video sharing platform, featuring trending videos and recommendations. Users can easily browse through the latest and most popular videos.",
        "imgArr": [
          "/images/projects/video-sharing-website/home.png"
        ]
      },
      {
        "title": "Video Playback",
        "description": "Detailed view of the video playback interface, including video player and comments section. Users can watch videos, like or dislike them, and leave comments to engage with the community.",
        "imgArr": [
          "/images/projects/video-sharing-website/video-playback.png"
        ]
      },
      {
        "title": "User Profile",
        "description": "Explanation of the user profile management system. Users can manage their personal information, view their uploaded videos, and see their activity history. The profile page also allows users to customize their channel settings and appearance.",
        "imgArr": [
          "/images/projects/video-sharing-website/channel.png"
        ]
      },
      {
        "title": "Video Upload",
        "description": "Insight into the video uploading interface and process. Users can upload new videos, add titles and descriptions, and select thumbnail images. The upload process ensures that videos are properly encoded and stored in the database for efficient streaming.",
        "imgArr": [
          "/images/projects/video-sharing-website/video-upload.png"
        ]
      }
    ]
  }
  
  
];

export const featuredProjects = Projects.slice(0, 3);
