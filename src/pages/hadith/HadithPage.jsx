import PageContainer from "../../components/container/PageContainer";
import Container from "../../components/container/Container";
import { useEffect, useState } from "react";
import HadithWapper from "../../components/wrapper/HadithWapper";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { route } from "../../routes/Routes";
import { useSelector } from "react-redux";

const HadithPage = () => {
  const location = useLocation();
  const searchQuery = location.state?.searchQuery;
  const subjectQuery = location.state?.subject;
  const { lang } = useSelector((state) => state.language);
  const [hadiths, setHadiths] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res;
      if (searchQuery) {
        console.log("searchQuery");
        res = await axios(`${route}/search-hadith?q=${searchQuery}`);
      } else if (subjectQuery) {
        console.log("categoryQuery");
        res = await axios(`${route}/hadiths?subject=${subjectQuery}`);
      } else {
        console.log("all hadiths");
        res = await axios(`${route}/hadiths`);
      }

      if (res.status == 200) {
        setHadiths(res.data.response);
      } else {
        setHadiths([]);
      }
    };
    fetchData();
  }, []);
  return (
    <PageContainer>
      <Container>
        {location.state && location.state.searchQuery && (
          <h1 className="text-xltext-[#5ab270]">
            {lang == "bn"
              ? `"${location.state.searchQuery}" এর অনুসন্ধান ফলাফল`
              : `Search results for "${location.state.searchQuery}"`}
          </h1>
        )}
        <HadithWapper hadiths={hadiths} />
      </Container>
    </PageContainer>
  );
};

export default HadithPage;
