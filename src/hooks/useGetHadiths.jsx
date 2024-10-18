import axios from "axios";
import { route } from "../routes/Routes";
import { useEffect, useState } from "react";

const useGetHadiths = (bookId, chapterId, refetch) => {
  const [hadiths, setHadiths] = useState([]);
  useEffect(() => {
    let query = "";
    if (bookId) {
      query = `?book_id=${bookId}&chapter_id=${chapterId}`;
    }
    console.log(query, "query");
    const fetchData = async () => {
      const res = await axios(`${route}/hadiths${query}`);
      if (res?.status === 200) {
        setHadiths(res.data.response);
      } else {
        setHadiths([]);
      }
    };
    fetchData();
  }, [bookId, chapterId, refetch]);
  return hadiths;
};

export default useGetHadiths;
