import React, { useEffect, useState } from "react";
import HadithWrapper from "../components/homepage/HadithWrapper";
import axios from "axios";
import { route } from "../../routes/Routes";
import { useParams } from "react-router-dom";

const DashboardSubjectPage = () => {
  const [hadiths, setHadiths] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(`${route}/hadiths?subject=${id}`);

      if (res.status == 200) {
        setHadiths(res.data.response);
      } else {
        setHadiths([]);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <HadithWrapper
        hadiths={hadiths}
        setRefetch={setRefetch}
        refetch={refetch}
      />
    </div>
  );
};

export default DashboardSubjectPage;
