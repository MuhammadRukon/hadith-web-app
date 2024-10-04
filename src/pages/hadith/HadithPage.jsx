import PageContainer from "../../components/container/PageContainer";
import Container from "../../components/container/Container";
import { useEffect, useState } from "react";
import HadithWapper from "../../components/wrapper/HadithWapper";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { route } from "../../routes/Routes";

const HadithPage = () => {
  const location = useLocation();
  const searchQuery = location.state?.searchQuery;
  const [hadiths, setHadiths] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res;
      if (searchQuery)
        res = await axios(`${route}/search-hadith?q=${searchQuery}`);
      else res = await axios(`${route}/hadiths`);
      console.log(res, "res");

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
        <HadithWapper hadiths={hadiths} />
      </Container>
    </PageContainer>
  );
};

export default HadithPage;
