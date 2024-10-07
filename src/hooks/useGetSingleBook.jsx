import axios from "axios";
import { useEffect, useState } from "react";
import { route } from "../routes/Routes";

const useGetSingleBook = (id, refetch) => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(`${route}/hadith-books/${id}`);
      console.log(res, "single book");
      if (res?.status === 200) {
        setBook(res.data);
      } else {
        setBook([]);
      }
    };
    fetchData();
  }, [refetch]);
  return book;
};

export default useGetSingleBook;
