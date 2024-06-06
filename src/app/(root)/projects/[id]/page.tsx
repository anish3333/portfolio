import { GetStaticPaths, GetStaticProps } from 'next';
import ProjectDetail from '@/components/ProjectDetail';

interface Project {
  id: string;
  category: string[];
  shortDescription: string;
  websiteLink: string;
  techStack: string[];
  startDate: string;
  endDate: string;
  companyLogoImg: string;
  pagesInfoArr: {
    title: string;
    description: string;
    imgArr: string[];
  }[];
}


const projectsData = [ {
  id: "built-design",
  category: ["Web Dev", "Full Stack", "UI/UX"],
  shortDescription: "Developed and optimized a high-performing website catering to over 4000 users, emphasizing efficiency and maintainability.",
  websiteLink: "https://builtdesign.in",
  techStack: ["Next.js", "React", "Node.js", "MongoDB", "GraphQL", "Nest.js", "Typescript"],
  startDate: new Date("2021-07-01"),
  endDate: new Date("2022-07-01"),
  pagesInfoArr: [
    {
      title: "Landing Page",
      description: "test description",
      imgArr: ["/experience/builtdesign/landing_1.webp", "/experience/builtdesign/landing_3.webp", "/experience/builtdesign/landing_5.webp", "/experience/builtdesign/landing_6.webp", "/experience/builtdesign/landing_2.webp", "/experience/builtdesign/landing_4.webp"],
    },
    {
      title: "Custom PDF Reader and optimizer",
      description: "test description",
      imgArr: ["/experience/builtdesign/pdf_opt.webp"],
    },
    {
      title: "Clients Dashboard",
      description: "test description",
      imgArr: ["/experience/builtdesign/cli_dashboard_1.webp", "/experience/builtdesign/cli_dashboard_2.webp", "/experience/builtdesign/cli_dashboard_3.webp"],
    },
  ],
} ];


const ProjectPage = ({ params: {id} }: {params : {id : string}}) => {
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return <h1 className="text-white">sorry</h1>
  }
  return <ProjectDetail {...project} />;
};

export default ProjectPage;
