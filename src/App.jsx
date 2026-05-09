import React from 'react'
  import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root';
import AddBook from './features/book/AddBook';
import BookList from './features/book/BookList';
import EditBook from './features/book/EditBook';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children:[
      {
        path: "/",
        element: <BookList/>
      },
      {
        path: "add-book",
        element: <AddBook/>
      },
      {path: "edit-book",
        element: <EditBook/>
      }
    ]
  }
])
const App = () => {


  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App