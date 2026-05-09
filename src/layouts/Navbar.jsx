import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const navLinks = [
    { name: "Book List", path: "/" },
    { name: "Add Book", path: "/add-book" },
    
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 shadow-lg backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 sm:gap-3 shrink-0"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-400/20">
            <lord-icon
              src="https://cdn.lordicon.com/jectmwqf.json"
              trigger="loop"
              delay="2000"
              colors="primary:#38bdf8,secondary:#ffffff"
              style={{ width: "32px", height: "32px" }}
            ></lord-icon>
          </div>

          <div className="leading-tight">
            <h1 className="text-sm sm:text-base md:text-lg font-black tracking-[0.18em] text-white">
              CRUD APP
            </h1>

            <p className="text-[10px] sm:text-xs tracking-[0.25em] text-cyan-300 uppercase">
              Redux Toolkit
            </p>
          </div>
        </NavLink>

        {/* desktop nav */}
        <ul className="hidden md:flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-xl">
          {navLinks.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                      : "text-slate-300 hover:bg-white/10 hover:text-cyan-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* profile / action icon */}
          <button className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:scale-105 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20">
            <lord-icon
              src="https://cdn.lordicon.com/edplgash.json"
              trigger="loop"
              colors="primary:#facc15,secondary:#ffffff,tertiary:#06b6d4"
              style={{ width: "30px", height: "30px" }}
            ></lord-icon>
          </button>

          {/* mobile menu button */}
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-300 md:hidden"
          >
            {mobileSidebarOpen ? (
              <RxCross2 className="text-[22px]" />
            ) : (
              <CiMenuFries className="text-[22px]" />
            )}
          </button>
        </div>
      </div>

      {/* mobile + tablet sidebar */}
      <aside
        className={`absolute left-0 top-[72px] w-full border-b border-white/10 bg-slate-950/95 px-4 py-5 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          mobileSidebarOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        {/* mobile nav grid */}
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {navLinks.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setMobileSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-center rounded-2xl border px-4 py-4 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "border-cyan-400/30 bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/20 hover:bg-cyan-500/10 hover:text-cyan-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

      </aside>
    </nav>
  );
};

export default Navbar;