import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || 
             (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    function handleClick(e: MouseEvent) {
      if (
        panelRef.current?.contains(e.target as Node) ||
        buttonRef.current?.contains(e.target as Node)
      ) {
        return;
      }
      setOpen(false);
    }

    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const navItem = (isActive: boolean) =>
    `block px-4 py-2 rounded-md text-base font-medium transition-all duration-300 ${
      isActive
        ? "bg-cyan-50/50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
        : "text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/5"
    }`;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/games", label: "Games" },
    { path: "/competitive", label: "Competitive" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm dark:shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink
            to="/"
            className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white flex items-center gap-2 group"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-black text-lg group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-shadow">
              MS
            </span>
            <span>Manas Singh</span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors ${
                    isActive ? "text-cyan-600 dark:text-cyan-400" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 ml-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
            </button>

            <a 
              href="#resume" 
              className="px-5 py-2.5 rounded-full border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-base font-medium hover:bg-cyan-50 dark:hover:bg-cyan-500 hover:text-cyan-700 dark:hover:text-slate-950 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] dark:hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              Resume
            </a>
          </nav>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
            </button>

            <button
              ref={buttonRef}
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              <div className="space-y-1.5 w-6">
                <span className={`block h-[2px] w-full bg-current transition-transform duration-300 ${open ? "translate-y-[8px] rotate-45" : ""}`} />
                <span className={`block h-[2px] w-full bg-current transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
                <span className={`block h-[2px] w-full bg-current transition-transform duration-300 ${open ? "-translate-y-[8px] -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={panelRef}
        className={`md:hidden absolute top-20 left-4 right-4 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 transform origin-top border border-slate-200 dark:border-white/5 ${
          open ? "scale-100 opacity-100 visible" : "scale-95 opacity-0 invisible"
        } bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => navItem(isActive)}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/10">
            <a 
              href="#resume" 
              className="block w-full text-center px-5 py-2.5 rounded-lg bg-cyan-100 dark:bg-cyan-500 text-cyan-800 dark:text-slate-950 text-base font-medium transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
