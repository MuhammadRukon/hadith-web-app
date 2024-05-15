import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import HadithPage from "../pages/hadith/HadithPage";
import HadithBooksPage from "../pages/hadithBooks/HadithBooksPage";

export const routes = createBrowserRouter([
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
]);
