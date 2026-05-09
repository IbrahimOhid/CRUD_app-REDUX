import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editBook } from "./bookSlice";

const EditBook = () => {
  const location = useLocation();
  const [id, setId] = useState(location.state.book.id);
  const [title, setTitle] = useState(location.state.book.title);
  const [author, setAuthor] = useState(location.state.book.author);
  const dispatch = useDispatch();
  const navigate  = useNavigate()

  const handleSubmit = ()=>{
    dispatch(editBook({id, title, author}))
    navigate("/")
  }

  return (
    <div>
      <div className="bg-[#020617] min-h-screen flex items-center justify-center p-20  ">
        <div className="relative bg-[#0f172a] w-full max-w-md lg:max-w-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] rounded-[2.5rem] border border-slate-800 ">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-[#1e293b] shadow-2xl rounded-3xl p-1.5 ">
              <div className="flex h-16 w-16 md:h-24 md:w-24 items-center justify-center rounded-[1.5rem] border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-950 shadow-inner">
                <lord-icon
                  src="https://cdn.lordicon.com/wxnxiano.json"
                  trigger="loop"
                  delay="2000"
                  colors="primary:#38bdf8,secondary:#ffffff"
                  style={{ width: "50px", height: "50px" }}
                  className="md:w-14 md:h-14"
                ></lord-icon>
              </div>
            </div>
          </div>

          <form
            className="px-8 pt-16 pb-10 md:px-16 md:pt-24 md:pb-16 lg:px-20"
            onSubmit={handleSubmit}
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-[0.15em]">
                Add <span className="text-sky-400">New</span> Book
              </h2>
              <div className="h-1 w-12 bg-sky-500 mx-auto mt-2 rounded-full"></div>
            </div>

            <div className="space-y-5 md:space-y-6">
              <div className="group relative flex items-center">
                <div className="absolute left-4 z-10 transition-transform duration-300 group-focus-within:scale-110">
                  <lord-icon
                    src="https://cdn.lordicon.com/yxsbonud.json"
                    trigger="hover"
                    colors="primary:#38bdf8,secondary:#94a3b8"
                    style={{ width: "24px", height: "24px" }}
                  ></lord-icon>
                </div>
                <input
                  type="text"
                  id="title"
                  className="w-full bg-slate-900/50 border-2 border-slate-800 focus:border-sky-500/50 focus:bg-slate-900 rounded-2xl pl-14 pr-6 py-4 outline-none transition-all duration-300 text-slate-200 placeholder:text-slate-500 font-medium"
                  required
                  placeholder="Book Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="group relative flex items-center">
                <div className="absolute left-4 z-10 transition-transform duration-300 group-focus-within:scale-110">
                  <lord-icon
                    src="https://cdn.lordicon.com/nwfpiryp.json"
                    trigger="hover"
                    colors="primary:#38bdf8,secondary:#94a3b8"
                    style={{ width: "24px", height: "24px" }}
                  ></lord-icon>
                </div>
                <input
                  type="text"
                  id="author"
                  className="w-full bg-slate-900/50 border-2 border-slate-800 focus:border-sky-500/50 focus:bg-slate-900 rounded-2xl pl-14 pr-6 py-4 outline-none transition-all duration-300 text-slate-200 placeholder:text-slate-500 font-medium"
                  required
                  placeholder="Author Name"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>

              <button className="relative w-full mt-6 group overflow-hidden rounded-2xl p-[2px] transition-all duration-300 active:scale-[0.97] cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-blue-500 to-sky-400 opacity-70 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative bg-slate-900 rounded-[0.9rem] py-4 transition-all duration-300 group-hover:bg-transparent">
                  <span className="text-white font-bold uppercase tracking-widest text-sm md:text-base">
                    Updated Book
                  </span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
