import SkillsCard from './SkillsCard';
import { skills } from '../data';
const Skills = () => {
  return (
    <section className='py-20' id='skills'>
      <h2 className='text-center text-4xl font-medium tracking-wider capitalize'>
        skills
      </h2>

      <div class='mx-auto max-w-7xl  px-8 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
