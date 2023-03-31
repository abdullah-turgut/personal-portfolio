import Hero from '@/components/Hero';
import About from '@/components/About';

export default function Home({ profile, skills, projects }) {
  return (
    <>
      <section className="h-screen bg-neutral-900">
        <Hero data={profile} />
      </section>
      <section className="h-screen bg-neutral-300" id="about">
        <About />
      </section>
    </>
  );
}

export async function getStaticProps() {
  const profile = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/profiles/1?populate=*`
  ).then((res) => res.json());

  const skills = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/skills?populate=*`
  ).then((res) => res.json());

  const projects = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/projects`
  ).then((res) => res.json());

  return {
    props: {
      profile,
      skills,
      projects,
    },
  };
}
