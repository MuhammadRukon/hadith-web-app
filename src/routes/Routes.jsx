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
import AddSubject from "../dashboard/pages/AddSubject";
import ProfilePage from "../dashboard/pages/ProfilePage";
import DashboardBookPage from "../dashboard/pages/DashboardBookPage";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/Signup";
import AdminRoute from "./AdminRoute";
import Bookmarks from "../pages/bookmark/Bookmarks";
import DashboardSubjectPage from "../dashboard/pages/DashboardSubjectPage";
import UserProfilePage from "./../pages/profile/ProfilePage";

export const route =
  import.meta.env.VITE_ENVIRONMENT == "development"
    ? import.meta.env.VITE_LOCALHOST
    : import.meta.env.VITE_PROD;

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
        path: "/profile",
        element: <UserProfilePage />,
      },
      {
        path: "/hadith-books",
        element: <HadithBooksPage />,
      },
      {
        path: "/hadith-books/:id",
        element: <BookPage />,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <AdminRoute>
            <DashboardHome />
          </AdminRoute>
        ),
      },
      {
        path: "books/:id",
        element: <DashboardBookPage />,
      },
      {
        path: "subjects/:id",
        element: <DashboardSubjectPage />,
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
      {
        path: "add-subject",
        element: <AddSubject />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);
