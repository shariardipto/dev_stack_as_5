import { useState } from "react";
import logoText from "../assets/logo-text.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto hidden h-18 max-w-7xl items-center justify-between px-4 md:flex lg:px-8">
        <a href="#home" className="flex items-center" aria-label="Dev Stack home">
          <img src={logoText} alt="Dev Stack" className="h-8 w-auto" />
        </a>

        <div className="flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition ${
                link.label === "Home"
                  ? "text-pink-600"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="text-sm font-semibold text-slate-700 transition hover:text-slate-950">
            Sign In
          </button>
          <button className="rounded-full bg-pink-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-pink-700 hover:shadow-md">
            Sign Up
          </button>
        </div>
      </div>

      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 md:hidden">
        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="justify-self-start rounded-lg p-2 text-xl text-slate-800 transition hover:bg-slate-100"
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <a href="#home" onClick={closeMenu} aria-label="Dev Stack home">
          <img src={logoText} alt="Dev Stack" className="h-7 w-auto" />
        </a>

        <div className="flex items-center gap-2 justify-self-end">
          <button className="text-[11px] font-semibold text-slate-700 sm:text-xs">
            Sign In
          </button>
          <button className="rounded-full bg-pink-600 px-3 py-2 text-[11px] font-bold text-white hover:bg-pink-700 sm:text-xs">
            Sign Up
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`rounded-lg px-3 py-3 text-sm font-semibold transition hover:bg-slate-100 ${
                  link.label === "Home"
                    ? "text-pink-600"
                    : "text-slate-700 hover:text-slate-950"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
