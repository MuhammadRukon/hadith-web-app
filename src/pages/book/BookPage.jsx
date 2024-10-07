import PageContainer from "../../components/container/PageContainer";
import Container from "../../components/container/Container";
import BookTabWithCategory from "../../components/bookPage/BookTabWithCategory";
import { useEffect, useState } from "react";
import HadithWapper from "../../components/wrapper/HadithWapper";
import useGetHadiths from "../../hooks/useGetHadiths";
import useGetBooks from "../../hooks/useGetBooks";

const BookPage = () => {
  const [chapterId, setChapterId] = useState("");
  const [bookId, setBookId] = useState("");

  const hadiths = useGetHadiths(bookId, chapterId);
  const books = useGetBooks();
  useEffect(() => {
    books?.length && setChapterId(books[0].chapters[0]?._id);
  }, [books]);
  return (
    <PageContainer>
      <Container>
        <div className="md:flex justify-between">
          <div className="w-full md:w-[18%] flex flex-col">
            {books?.map((book) => (
              <BookTabWithCategory
                key={book?._id}
                item={book}
                chapterId={chapterId}
                setChapterId={setChapterId}
                setBookId={setBookId}
              />
            ))}
          </div>
          <div className="md:w-[80%]">
            <HadithWapper hadiths={hadiths} />
          </div>
        </div>
      </Container>
    </PageContainer>
  );
};

export default BookPage;
