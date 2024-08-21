import { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../../redux/features/bookSlice";
import { Link } from "react-router-dom";

const HadithCards = () => {
  // const dispatch = useDispatch();
  const [books, setBooks] = useState([])
  // const { books } = useSelector((state) => state.books);

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
        // dispatch(setBooks(data));
        setBooks(data);
      } else {
        setBooks([]);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3  gap-10 mt-10  justify-between">
      {books.length > 0
        ? books.map((book) => (
            <div
              key={book.id}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={`${book.id * 100}`}
            >
              <Link to={`/hadith-books/${book._id}`}>
                <Card item={book} />
              </Link>
            </div>
          ))
        : null}
    </div>
  );
};

export default HadithCards;
