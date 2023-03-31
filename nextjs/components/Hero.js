import { IoLocationOutline } from 'react-icons/io5';

function Hero({ data }) {
  const { name, email, location, github_link, linkedin_link, bio } =
    data.data.attributes;

  return (
    <div className="flex flex-col py-16 h-full text-center container mx-auto gap-y-8 lg:text-left lg:px-10">
      <div className="font-semibold text-5xl px-4 flex flex-col gap-y-5 mt-[45%] lg:mt-auto ">
        <h1 className="text-emerald-100">
          Hi, I'm <span className="text-emerald-500">{name.slice(0, 8)}.</span>
        </h1>
        <h2 className="text-emerald-50 text-4xl">Fullstack Web Developer.</h2>
        <p className="text-right text-2xl font-thin text-gray-400 pr-3 pt-4 lg:text-center">
          based in{' '}
          <span className="font-medium text-emerald-300">{location}</span>
        </p>
      </div>
      <div className="mt-auto text-white lg:ml-auto">
        <a
          href="#about"
          className="px-6 py-2 bg-emerald-600 rounded-xl hover:bg-opacity-90"
        >
          About Me
        </a>
      </div>
    </div>
  );
}

export default Hero;
