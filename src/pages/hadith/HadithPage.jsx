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
  const [loading, setLoading] = useState(true);
  const [hadiths, setHadiths] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res;
      if (searchQuery) {
        res = await axios(`${route}/search-hadith?q=${searchQuery}`);
      } else if (subjectQuery) {
        res = await axios(`${route}/hadiths?subject=${subjectQuery}`);
      } else {
        res = await axios(`${route}/hadiths`);
      }
      if (res.status == 200) {
        setHadiths(res.data.response);
      } else {
        setHadiths([]);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(loading, "loding");
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

        <HadithWapper hadiths={hadiths} loading={loading} />
      </Container>
    </PageContainer>
  );
};

export default HadithPage;
