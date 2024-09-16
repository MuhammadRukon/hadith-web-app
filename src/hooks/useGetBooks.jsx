import axios from "axios";
import { useEffect, useState } from "react";
import { route } from "../routes/Routes";

const useGetBooks = (refetch) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(`${route}/hadith-books`);
      console.log(res);
      if (res?.status === 200) {
        setBooks(res.data);
      } else {
        setBooks([]);
      }
    };
    fetchData();
  }, [refetch]);
  return books;
};

export default useGetBooks;
