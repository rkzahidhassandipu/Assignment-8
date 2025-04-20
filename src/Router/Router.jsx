import {
    createBrowserRouter
  } from "react-router"
import Home from "../Pages/Home/Home";
import App from "../App";
import MyBooking from "../Pages/MyBooking/MyBooking";
import Blogs from "../Pages/Blogs/Blogs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import NotFound from "../Pages/NotFound/NotFound";

export const router =  createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        { index: true, Component: Home },
        {
          path: "mybookings",
          Component: MyBooking
        },
        {
          path: "blogs",
          Component: Blogs
        },
        {
          path: "contactus",
          Component: ContactUs
        },
      ],
    },
  ]);
  