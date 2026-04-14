import { createBrowserRouter } from "react-router";
import Rootlayout from "../layout/Rootlayout";
import Homepage from "../pages/homepage/Homepage";

export let router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [

      {
        index:true,
        element:<Homepage></Homepage>
      },
      {
        path:"/timeline",
        element: <p>This is timeLine</p>
      },
      {

        path:"/state",
        element:<p>this is this state</p>
      }
    ]

  },
]);