import PageContainer from "../../components/container/PageContainer";
import Container from "../../components/container/Container";
import BookTabWithCategory from "../../components/bookPage/BookTabWithCategory";
import { useEffect, useState } from "react";
import HadithWapper from "../../components/wrapper/HadithWapper";
import axios from "axios";

const BookPage = () => {
  const [books, setBooks] = useState([]);
  const [hadiths, setHadiths] = useState([]);
  const [chapterId, setChapterId] = useState('');
  const [bookId, setBookId] = useState('');
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

  useEffect(()=>{
 
    const fetchData = async ()=>{
     try {
      const response = await axios( `${route}/hadiths?book_id=${bookId}&chapter_id=${chapterId}`)
     if(response.status == 200){
      setHadiths(response.data.response)
     }
    } catch (error) {
      console.log(error);
     }
    }
   bookId && chapterId && fetchData();
  },  [bookId,chapterId])
  useEffect(()=>{
   books.length && setChapterId(books[0].chapters[0]._id)
  },[books])
  return (
    <PageContainer>
      <Container>
        <div className="md:flex justify-between">
          <div className="w-full md:w-[18%] flex flex-col">
            {books.map((book) => (
              <BookTabWithCategory key={book._id} item={book} chapterId={chapterId} setChapterId={setChapterId} setBookId={setBookId}/>
            ))}
          </div>
          <div className="md:w-[80%]">
          <HadithWapper hadiths={hadiths}/>
          </div>
        </div>
      </Container>
    </PageContainer>
  );
};

export default BookPage;
