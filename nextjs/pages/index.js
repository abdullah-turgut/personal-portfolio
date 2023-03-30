import About from '@/components/About';

export default function Home({ profile }) {
  return (
    <>
      <section className="h-screen bg-slate-700">
        <About data={profile} />
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/profiles/1?populate=*`
  );

  const profile = await res.json();

  return {
    props: {
      profile,
    },
  };
}
