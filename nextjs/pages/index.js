import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <section className="h-screen bg-neutral-900" id="hero">
        <Hero />
      </section>
      <section className="h-screen bg-neutral-300" id="about">
        <About />
      </section>
      <section className="h-screen bg-neutral-700" id="skills">
        <Skills />
      </section>
      <section className="h-screen bg-neutral-400" id="projects">
        <Projects />
      </section>
      <section className="h-screen bg-neutral-900" id="contact">
        <Contact />
      </section>
    </div>
  );
}

// export async function getStaticProps() {
//   const profile = await fetch(
//     `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/profiles/1?populate=*`
//   ).then((res) => res.json());

//   const skills = await fetch(
//     `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/skills?populate=*`
//   ).then((res) => res.json());

//   const projects = await fetch(
//     `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/projects`
//   ).then((res) => res.json());

//   return {
//     props: {
//       profile,
//       skills,
//       projects,
//     },
//   };
// }
