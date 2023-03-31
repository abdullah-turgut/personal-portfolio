function Hero({ data }) {
  const { name, email, location, github_link, linkedin_link, bio } =
    data.data.attributes;

  return (
    <div className="flex flex-col h-full text-center container mx-auto gap-y-8">
      <div className="font-semibold text-5xl flex flex-col gap-y-5">
        <h1 className="text-emerald-100">
          Hi, I'm <span className="text-emerald-500">Abdullah.</span>
        </h1>
        <h2 className="text-emerald-50 text-4xl">Fullstack Web Developer.</h2>
      </div>
    </div>
  );
}

export default Hero;
