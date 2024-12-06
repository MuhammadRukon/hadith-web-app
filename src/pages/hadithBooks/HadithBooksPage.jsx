import { useSelector } from "react-redux";
import Container from "../../components/container/Container";
import BookTab from "../../components/HadithBookPage/BookTab";
import PageContainer from "../../components/container/PageContainer";
import { useEffect, useState } from "react";
import { route } from "../../routes/Routes";

const HadithBooksPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${route}/hadith-books`);
      const data = await res.json();
      if (data?.length > 0) {
        setBooks(data);
      } else {
        setBooks([]);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(books, "books");
  return (
    <PageContainer>
      <Container>
        {loading ? (
          <span className="loading loading-bars loading-lg"></span>
        ) : (
          books.map((book) => <BookTab key={book._id} item={book} />)
        )}
      </Container>
    </PageContainer>
  );
};

export default HadithBooksPage;
