import ProjectCard from './ProjectCard';
import { projects } from '../data';
const Projects = () => {
  return (
    <section className='py-20' id='projects'>
      <h2 className='text-center text-4xl font-medium tracking-wider capitalize'>
        Projects
      </h2>
      <div className='mx-auto max-w-7xl  px-8 py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
