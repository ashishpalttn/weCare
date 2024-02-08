import { createBrowserRouter, Routes, Route } from "react-router-dom";
import RootPage from "../pages/Rootpage";
import AddPatient from "../pages/patient/addPatient";
import ViewPatient from "../pages/patient/viewPatient";
import ViewReport from "../pages/reports/viewReport";
import AddReport from "../pages/reports/addReport";
import AddDoctor from "../pages/doctor/addDoctor";
import ViewDoctor from "../pages/doctor/viewDoctors";
import ErrorPage from "../pages/errorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/view_patient",
        element: <ViewPatient />,
      },
      {
        path: "/add_patient",
        element: <AddPatient />,
      },
      {
        path: "/view_doctor",
        element: <ViewDoctor />,
      },
      {
        path: "/add_doctor",
        element: <AddDoctor />,
      },
      {
        path: "/view_report",
        element: <ViewReport />,
      },
      {
        path: "/add_report",
        element: <AddReport />,
      },
    ],
  },
  {
    path: "/help",
    element: <ViewPatient />,
  },
]);
