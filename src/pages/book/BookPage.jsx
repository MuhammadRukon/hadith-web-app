import PageContainer from "../../components/container/PageContainer";
import Container from "../../components/container/Container";
import BookTabWithCategory from "../../components/bookPage/BookTabWithCategory";
import { useEffect, useState } from "react";

const BookPage = () => {
  const [books, setBooks] = useState([]);
  const [hadiths, setHadiths] = useState([]);
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
  return (
    <PageContainer>
      <Container>
        <div className="md:flex justify-between">
          <div className="w-full md:w-[18%] flex flex-col">
            {books.map((book) => (
              <BookTabWithCategory key={book._id} item={book} setHadiths={setHadiths} />
            ))}
          </div>
          <div className="md:w-[80.5%] rounded-lg p-4 my-2 shadow-[0_2px_7px_rgba(0,0,0,0.13)] min-h-[calc(100vh-235px)] dark:bg-stone-800 h-16">
            {hadiths.length}
          </div>
        </div>
      </Container>
    </PageContainer>
  );
};

export default BookPage;
