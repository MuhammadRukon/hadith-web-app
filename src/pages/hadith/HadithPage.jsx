import PageContainer from "../../components/container/PageContainer";
import Container from "../../components/container/Container";
import { useEffect, useState } from "react";
import HadithWapper from "../../components/wrapper/HadithWapper";

const HadithPage = () => {
  const [hadiths, setHadiths] = useState([]);
  const route =
    import.meta.env.VITE_ENVIRONMENT == "development"
      ? import.meta.env.VITE_LOCALHOST
      : import.meta.env.VITE_PROD;
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${route}/hadiths`);
      // const res = await fetch(`/hadithBook.json`);
      const data = await res.json();

      if (data.status == 200) {
        setHadiths(data.response);
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
