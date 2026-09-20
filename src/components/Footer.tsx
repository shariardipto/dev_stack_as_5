import logoText from "../assets/logo-text.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-slate-200 bg-white text-slate-500">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <a href="#home" className="inline-flex items-center">
            <img src={logoText} alt="Dev Stack" className="h-8 w-auto" />
          </a>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <div className="mt-5 flex gap-3 text-sm font-bold">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-slate-950">
              GitHub
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer" className="hover:text-slate-950">
              Twitter
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-slate-950">
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950">Product</h3>
          <div className="mt-4 space-y-3 text-sm">
            <a href="#home" className="block hover:text-slate-950">Home</a>
            <a href="#technologies" className="block hover:text-slate-950">Technologies</a>
            <a href="#projects" className="block hover:text-slate-950">Projects</a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950">Company</h3>
          <div className="mt-4 space-y-3 text-sm">
            <a href="#about" className="block hover:text-slate-950">About</a>
            <a href="#contact" className="block hover:text-slate-950">Contact</a>
            <a href="#home" className="block hover:text-slate-950">Careers</a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950">Legal</h3>
          <div className="mt-4 space-y-3 text-sm">
            <a href="#contact" className="block hover:text-slate-950">Privacy Policy</a>
            <a href="#contact" className="block hover:text-slate-950">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {year} Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#contact" className="hover:text-slate-950">Privacy</a>
            <a href="#contact" className="hover:text-slate-950">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
