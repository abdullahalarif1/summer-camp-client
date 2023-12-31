import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../componenets/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructor from "../Pages/Instructor/Instructor";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import AddClass from "../Pages/Dashboard/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses";
import ManageClasses from "../Pages/Dashboard/ManageClasses";

import Classes from "../Pages/Classes/Classes";
import MySelectedClass from "../Pages/Dashboard/MySelectedClass";
import Payment from "../Pages/Dashboard/Payment";
import MyEnrolledClass from "../Pages/Dashboard/MyEnrolledClass";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import Feedback from "../Pages/Dashboard/Feedback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructor></Instructor>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manageClasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myClasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "mySelectedClass",
        element: <MySelectedClass></MySelectedClass>,
      },
      {
        path: "myEnrolledClasses",
        element: <MyEnrolledClass></MyEnrolledClass>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "feedback/:id",
        element: <Feedback></Feedback>,
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://summer-camp-server-gamma-bay.vercel.app/carts/${params.id}`
          );
          const data = await response.json();
          return { cart: data };
        },
      },
    ],
  },
]);
export default router;
