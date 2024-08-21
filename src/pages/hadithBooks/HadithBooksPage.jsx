import { useSelector } from "react-redux";
import Container from "../../components/container/Container";
import BookTab from "../../components/HadithBookPage/BookTab";
import PageContainer from "../../components/container/PageContainer";

const HadithBooksPage = () => {
  const { books } = useSelector((state) => state.books);
  return (
    <PageContainer>
      <Container>
        {books.map((book) => (
          <BookTab key={book.id} item={book} />
        ))}
      </Container>
    </PageContainer>
  );
};

export default HadithBooksPage;
