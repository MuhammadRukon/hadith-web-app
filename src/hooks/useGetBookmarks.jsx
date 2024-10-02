import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { route } from "../routes/Routes";

function useGetBookmarks() {
  const { user, refetch } = useContext(AuthContext);
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(`${route}/bookmarks/${user?.email}`);
      if (res?.status == 200) {
        setBookmarks(res.data.response.bookmarks);
      } else {
        setBookmarks([]);
      }
    };
    user && fetchData();
  }, [user, refetch]);

  return bookmarks;
}

export default useGetBookmarks;
