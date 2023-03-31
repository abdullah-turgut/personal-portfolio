import Hero from '@/components/Hero';

export default function Home({ profile, skills, projects }) {
  return (
    <>
      <section className="h-screen bg-neutral-900">
        <Hero data={profile} />
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
