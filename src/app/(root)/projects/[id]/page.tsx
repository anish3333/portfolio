import ProjectDetail from '@/components/ProjectDetail';
import { Projects } from '@/constants';


export function generateStaticParams() {
  return [Projects.map(p => {id : p.id})];
}
 

const ProjectPage = ({ params: {id} }: {params : {id : string}}) => {
  const project = Projects.find((p) => p.id === id);

  if (!project) {
    return <h1 className="text-white">sorry</h1>
  }
  return <ProjectDetail {...project} />;
};

export default ProjectPage;
