import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/ErrorPage";
import Login from "../pages/Login/Login";
import Signup from "../pages/SignUp/SignUp";
import Dashboard from "../layouts/Dashboard/Dashboard";
import AddClass from "../pages/Dashboard/Instructor Dashboard/AddClass";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "Signup",
        element: <Signup></Signup>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "add_class",
        element: <AddClass></AddClass>
      },
    ]
  }
]);

export default router;