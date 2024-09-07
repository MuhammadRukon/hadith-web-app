import { useSelector } from "react-redux";
import Container from "../../components/container/Container";
import BookTab from "../../components/HadithBookPage/BookTab";
import PageContainer from "../../components/container/PageContainer";
import { useEffect, useState } from "react";

const HadithBooksPage = () => {
  const [books, setBooks] = useState([]);
  const route =
    import.meta.env.VITE_ENVIRONMENT == "development"
      ? import.meta.env.VITE_LOCALHOST
      : import.meta.env.VITE_PROD;
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${route}/hadith-books`);
      // const res = await fetch(`/hadithBook.json`);
      const data = await res.json();
      if (data?.length > 0) {
        setBooks(data);
      } else {
        setBooks([]);
      }
    };
    fetchData();
  }, []);
  console.log(books, "books");
  return (
    <PageContainer>
      <Container>
        {books.map((book) => (
          <BookTab key={book._id} item={book} />
        ))}
      </Container>
    </PageContainer>
  );
};

export default HadithBooksPage;
