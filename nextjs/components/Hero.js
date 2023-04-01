import { SiLinkedin, SiGithub } from 'react-icons/si';

function Hero() {
  return (
    <div className="relative flex flex-col py-16 h-full text-center container mx-auto gap-y-8 lg:text-left lg:px-20">
      <div className="hidden absolute lg:flex flex-col items-center justify-between left-4 bottom-12 text-white gap-y-5">
        <a href="https://www.linkedin.com/in/abdullahturgut/" target="_blank">
          <SiLinkedin
            size={20}
            className="text-emerald-100 hover:scale-110 cursor-pointer drop-shadow-[0px_3px_3px_rgba(255,255,255,0.3)]"
          />
        </a>
        <a href="https://github.com/abdullah-turgut" target="_blank">
          <SiGithub
            size={20}
            className="text-emerald-100 hover:scale-110 cursor-pointer drop-shadow-[0px_3px_3px_rgba(255,255,255,0.3)]"
          />
        </a>

        <div className="bg-neutral-400 w-[1px] h-40"></div>
      </div>

      <div className="hidden absolute lg:flex flex-col items-center justify-center right-6 bottom-12 text-neutral-500 gap-y-4">
        <p
          className="transform rotate-180 text-center tracking-widest"
          style={{ writingMode: 'vertical-rl' }}
        >
          abdullah.turgut.94@gmail.com
        </p>
        <div className="bg-neutral-400 w-[0.5px] h-60"></div>
      </div>

      <div className="font-semibold text-5xl px-4 flex flex-col gap-y-5 mt-[45%] lg:mt-auto ">
        <h1 className="text-emerald-100">
          Hi, I'm <span className="text-emerald-500">Abdullah.</span>
        </h1>
        <h2 className="text-emerald-50 text-4xl">Fullstack Web Developer.</h2>
        <p className="text-right text-2xl font-thin text-gray-400 pr-3 pt-4 lg:text-center">
          based in{' '}
          <span className="font-medium text-emerald-300">Istanbul</span>
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
