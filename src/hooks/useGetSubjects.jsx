import axios from "axios";
import { useEffect, useState } from "react";
import { route } from "../routes/Routes";

const useGetSubjects = (refetch) => {
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(`${route}/subjects`);

      if (res?.status === 200) {
        setSubjects(res.data.response);
      } else {
        setSubjects([]);
      }
    };
    fetchData();
  }, [refetch]);
  return subjects;
};

export default useGetSubjects;
