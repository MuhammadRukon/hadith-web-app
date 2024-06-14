import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import HadithPage from "../pages/hadith/HadithPage";
import HadithBooksPage from "../pages/hadithBooks/HadithBooksPage";
import AddHadithBook from "../dashboard/pages/AddHadithBook";

export const routes = createBrowserRouter([
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <AddHadithBook/>,
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
