import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/ErrorPage";
import Login from "../pages/Login/Login";
import Signup from "../pages/SignUp/SignUp";
import Dashboard from "../layouts/Dashboard/Dashboard";
import AddClass from "../pages/Dashboard/Instructor Dashboard/AddClass";
import ManageClasses from "../pages/Dashboard/Admin Dashboard/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin Dashboard/ManageUsers";
import AllClasses from "../pages/AllClasses/AllClasses";
import Instructors from "../pages/Instructors/Instructors";
import MyClasses from "../pages/Dashboard/Instructor Dashboard/MyClasses";


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
        path: "signup",
        element: <Signup></Signup>
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>
      },
      {
        path: "all_classes",
        element: <AllClasses></AllClasses>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "manage_classes",
        element: <ManageClasses></ManageClasses>
      },
      {
        path: "manage_users",
        element: <ManageUsers></ManageUsers>
      },
      {
        path: "add_class",
        element: <AddClass></AddClass>
      },
      {
        path: "my_classes",
        element: <MyClasses></MyClasses>
      },
    ]
  }
]);

export default router;