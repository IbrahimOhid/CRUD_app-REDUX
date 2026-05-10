import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./bookSlice";
import { Link } from "react-router-dom";

const BookList = () => {
  const books = useSelector((state) => state.bookReducer.books);
  const dispatch = useDispatch();
  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="min-h-screen bg-slate-950 px-3 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* title */}
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">
              <lord-icon
                src="https://cdn.lordicon.com/wxnxiano.json"
                trigger="loop"
                delay="2500"
                colors="primary:#38bdf8,secondary:#ffffff"
                style={{ width: "34px", height: "34px" }}
              ></lord-icon>
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-wide text-white sm:text-3xl">
                Book List
              </h1>

              <p className="text-sm text-slate-400">
                Manage all books in one place
              </p>
            </div>
          </div>

        </div>

        {/*TABLE CARD*/}
        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl backdrop-blur-md">
          {/* desktop/tablet table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="min-w-full">
              <thead className="border-b border-slate-800 bg-slate-900">
                <tr>
                  <th className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-wide text-slate-300">
                    Title
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-wide text-slate-300">
                    Author
                  </th>

                  <th className="px-6 py-5 text-center text-sm font-semibold uppercase tracking-wide text-slate-300">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800">
                {books &&
                  books?.map((book) => (
                    <tr
                      key={book.id}
                      className="group transition-all duration-300 hover:bg-slate-800/60"
                    >
                      {/* title */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10">
                            <lord-icon
                              src="https://cdn.lordicon.com/wxnxiano.json"
                              trigger="hover"
                              colors="primary:#38bdf8,secondary:#ffffff"
                              style={{ width: "32px", height: "32px" }}
                            ></lord-icon>
                          </div>

                          <div>
                            <h2 className="text-sm font-semibold text-white lg:text-base">
                              {book.title}
                            </h2>
                          </div>
                        </div>
                      </td>

                      {/* author */}
                      <td className="px-6 py-5">
                        <p className="text-sm font-medium text-slate-200">
                          {book.author}
                        </p>
                      </td>

                      {/* actions */}
                      <td className="px-6 py-5">
                        <div className="flex items-center justify-center gap-3">
                          {/* edit */}
                          <Link to={"/edit-book"} state={{ book }}>
                            <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 transition-all duration-300 hover:scale-105 hover:border-yellow-400/40 hover:bg-slate-700">
                              <lord-icon
                                src="https://cdn.lordicon.com/tobsqthh.json"
                                trigger="hover"
                                colors="primary:#ffffff,secondary:#ffc738,tertiary:#3a3347"
                                style={{ width: "34px", height: "34px" }}
                              ></lord-icon>
                            </button>
                          </Link>

                          {/* delete */}
                          <button
                            onClick={() => handleDeleteBook(book.id)}
                            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 transition-all duration-300 hover:scale-105 hover:border-red-500/40 hover:bg-slate-700 cursor-pointer"
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/egqwwrlq.json"
                              trigger="hover"
                              colors="primary:#646e78,secondary:#e83a30,tertiary:#ffffff,quaternary:#3a3347"
                              style={{ width: "34px", height: "34px" }}
                            ></lord-icon>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {/* Mobile View*/}
          {/*  */}
          <div className="grid gap-4 p-4 md:hidden">
            {books?.map((book) => (
              <div
                key={book.id}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-4 shadow-lg transition-all duration-300 hover:border-sky-500/30"
              >
                {/* top */}
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-500/10">
                    <lord-icon
                      src="https://cdn.lordicon.com/wxnxiano.json"
                      trigger="hover"
                      colors="primary:#38bdf8,secondary:#ffffff"
                      style={{ width: "34px", height: "34px" }}
                    ></lord-icon>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="truncate text-base font-semibold text-white">
                      {book.title}
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">{book.author}</p>
                  </div>
                </div>

                {/* buttons */}
                <div className="mt-5 flex items-center justify-end gap-3">
                  {/* edit */}
                  <Link to={"/edit-book"} state={{ book }}>
                    <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 transition-all duration-300 hover:scale-105 hover:border-yellow-400/40 hover:bg-slate-700 cursor-pointer">
                      <lord-icon
                        src="https://cdn.lordicon.com/tobsqthh.json"
                        trigger="loop"
                        colors="primary:#ffffff,secondary:#ffc738,tertiary:#3a3347"
                        style={{ width: "34px", height: "34px" }}
                      ></lord-icon>
                    </button>
                  </Link>

                  {/* delete */}
                  <button
                    onClick={() => handleDeleteBook(book.id)}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 transition-all duration-300 hover:scale-105 hover:border-red-500/40 cursor-pointer"
                  >
                    <lord-icon
                      src="https://cdn.lordicon.com/egqwwrlq.json"
                      trigger="loop"
                      colors="primary:#646e78,secondary:#e83a30,tertiary:#ffffff,quaternary:#3a3347"
                      style={{ width: "32px", height: "32px" }}
                    ></lord-icon>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
