import {
    createBrowserRouter
  } from "react-router"
import Home from "../Pages/Home/Home";
import App from "../App";
import MyBooking from "../Pages/MyBooking/MyBooking";
import Blogs from "../Pages/Blogs/Blogs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import NotFound from "../Components/NotFound/NotFound";
import SingleLaw from "../Components/SingleLawyar/SingleLawyer/SingleLaw";

export const router =  createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        { index: true,
          loader: () => fetch('/LawExpert.json'),
          Component: Home },
        {
          path: "mybookings",
          loader: () => fetch('/LawExpert.json'),
          Component: MyBooking
        },
        {
          path: "blogs",
          loader: () => fetch("/blogs.json"),
          Component: Blogs
        },
        {
          path: "/singleLawyar/:id",
          loader: () => fetch('/LawExpert.json'),
          Component: SingleLaw
        },
      ],
    },
  ]);
  