import aboutSvg from '../assets/about.svg';
const About = () => {
  return (
    <section class='bg-white py-20' id='about'>
      <div class='mx-auto max-w-7xl  px-8 grid  md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <h2 className='text-4xl font-medium tracking-wider capitalize'>
            about me
          </h2>

          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            omnis exercitationem tempora, aliquid deleniti tenetur vero esse
            praesentium eaque dicta fugiat? Molestiae expedita, nulla neque
            error porro sint distinctio possimus!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
