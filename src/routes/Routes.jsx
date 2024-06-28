import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import HadithPage from "../pages/hadith/HadithPage";
import HadithBooksPage from "../pages/hadithBooks/HadithBooksPage";
import AddHadithBook from "../dashboard/pages/AddHadithBook";
import DashboardHome from "../dashboard/pages/DashboardHome";
import AddHadith from "../dashboard/pages/AddHadith";
import DashboardLayout from "../dashboard/layout/DashboardLayout";

export const routes = createBrowserRouter([
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "add-hadith-book",
        element: <AddHadithBook />,
      },
      {
        path: "add-hadith",
        element: <AddHadith />,
      },
    ],
  },

  {
    path: "/hadith",
    element: <HadithPage />,
  },
  {
    path: "/hadith-books",
    element: <HadithBooksPage />,
  },
]);
