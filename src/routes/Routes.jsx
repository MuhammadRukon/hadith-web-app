import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import HadithPage from "../pages/hadith/HadithPage";
import HadithBooksPage from "../pages/hadithBooks/HadithBooksPage";
import AddBook from "../dashboard/pages/AddBook";
import DashboardHome from "../dashboard/pages/DashboardHome";
import AddHadith from "../dashboard/pages/AddHadith";
import DashboardLayout from "../dashboard/layout/DashboardLayout";
import AddChapter from "../dashboard/pages/AddChapter";
import MainLayout from "../layout/MainLayout";
import BookPage from "../pages/book/BookPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/hadith",
        element: <HadithPage />,
      },
      {
        path: "/hadith-books",
        element: <HadithBooksPage />,
      },
      {
        path: "/hadith-books/:id",
        element: <BookPage/>,
      },
    ],
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
        element: <AddBook />,
      },
      {
        path: "add-hadith",
        element: <AddHadith />,
      },
      {
        path: "add-chapter",
        element: <AddChapter />,
      },
    ],
  },
]);
