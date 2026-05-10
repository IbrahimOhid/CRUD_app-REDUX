import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editBook } from "./bookSlice";

const EditBook = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { book } = location.state;

  const [id] = useState(book.id);
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editBook({ id, title, author }));

    navigate("/book-list");
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
        
        {/* glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-cyan-400/10"></div>

        {/* top icon */}
        <div className="relative flex justify-center pt-8 sm:pt-10">
          <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-3xl border border-slate-700 bg-slate-950 shadow-xl">
            <lord-icon
              src="https://cdn.lordicon.com/wxnxiano.json"
              trigger="loop"
              delay="2000"
              colors="primary:#38bdf8,secondary:#ffffff"
              style={{ width: "56px", height: "56px" }}
            ></lord-icon>
          </div>
        </div>

        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="relative px-5 pb-8 pt-6 sm:px-8 sm:pb-10 lg:px-10"
        >
          {/* heading */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-black tracking-wide text-white sm:text-3xl">
              Update{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Book
              </span>
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Edit your book information
            </p>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400"></div>
          </div>

          {/* input fields */}
          <div className="space-y-5">
            {/* title */}
            <div className="group relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <lord-icon
                  src="https://cdn.lordicon.com/yxsbonud.json"
                  trigger="hover"
                  colors="primary:#38bdf8,secondary:#94a3b8"
                  style={{ width: "24px", height: "24px" }}
                ></lord-icon>
              </div>

              <input
                type="text"
                placeholder="Book Title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-14 w-full rounded-2xl border border-slate-800 bg-slate-950 pl-14 pr-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 sm:text-base"
              />
            </div>

            {/* author */}
            <div className="group relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <lord-icon
                  src="https://cdn.lordicon.com/nwfpiryp.json"
                  trigger="hover"
                  colors="primary:#38bdf8,secondary:#94a3b8"
                  style={{ width: "24px", height: "24px" }}
                ></lord-icon>
              </div>

              <input
                type="text"
                placeholder="Author Name"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="h-14 w-full rounded-2xl border border-slate-800 bg-slate-950 pl-14 pr-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 sm:text-base"
              />
            </div>
          </div>

          {/* submit button */}
          <button className="relative w-full mt-6 group overflow-hidden rounded-2xl p-[2px] transition-all duration-300 active:scale-[0.97] cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-blue-500 to-sky-400 opacity-70 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative bg-slate-900 rounded-[0.9rem] py-4 transition-all duration-300 group-hover:bg-transparent">
                <span className="text-white font-bold uppercase tracking-widest text-sm md:text-base">
                  Update Book
                </span>
              </div>
            </button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;