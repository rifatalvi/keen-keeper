import { createBrowserRouter } from "react-router";
import Rootlayout from "../layout/Rootlayout";
import Homepage from "../pages/homepage/Homepage";
import FriendDetais from "../pages/frindeDetails/FriendDetais";
import Timeline from "../pages/timeline/Timeline";

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
        element: <Timeline></Timeline>
      },
      {
        path:"/friend/:friendID",
        element:<FriendDetais></FriendDetais>
      },
      {

        path:"/state",
        element:<p>this is this state</p>
      }
    ]

  },
]);