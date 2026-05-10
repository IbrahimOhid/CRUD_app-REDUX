const Footer = () => {
  return (
    <footer className="relative  overflow-hidden border-t border-slate-800 bg-slate-950">
      {/* footer content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        {/* brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 shadow-lg shadow-sky-500/5">
            <lord-icon
              src="https://cdn.lordicon.com/wxnxiano.json"
              trigger="loop"
              delay="2500"
              colors="primary:#38bdf8,secondary:#ffffff"
              style={{ width: "28px", height: "28px" }}
            ></lord-icon>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wide text-white sm:text-base">
              CRUD APP
            </h2>

            <p className="text-xs text-slate-400">
              Modern Book Management System
            </p>
          </div>
        </div>

        {/* copyright */}
        <div className="flex flex-col items-center gap-2 text-center sm:items-end sm:text-right">
          <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
            © {new Date().getFullYear()} All Rights Reserved
          </p>

          <a
            href="https://mohammadibrahimohid.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-sky-500/40 hover:bg-slate-800 hover:text-white sm:text-sm"
          >
            <lord-icon
              src="https://cdn.lordicon.com/dzxphgvu.json"
              trigger="hover"
              colors="primary:#38bdf8,secondary:#ffffff"
              style={{ width: "20px", height: "20px" }}
            ></lord-icon>
            Developed by
            <span className="font-semibold text-sky-400 group-hover:text-cyan-300">
              Mohammad Ibrahim
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
