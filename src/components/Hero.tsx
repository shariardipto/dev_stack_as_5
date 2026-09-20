import bannerStack from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:min-h-[560px] md:grid-cols-2 md:py-24 lg:px-8">
        <div>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="brand-gradient-bg rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg shadow-pink-200/50 transition hover:-translate-y-0.5"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <img
            src={bannerStack}
            alt="Developer stack code illustration showing React, Tailwind CSS, Node.js and PostgreSQL"
            className="relative w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
