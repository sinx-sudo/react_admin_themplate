import {
  createBrowserRouter,
} from "react-router";

import RootLayout from "../layouts/RootLayout";

import Home from "../pages/Home";
import User from "../pages/User";
import Contact from "../pages/Contact";
import UserDetails from "../pages/UserDetails";

import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "user/:id",
        element: <UserDetails />,
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);