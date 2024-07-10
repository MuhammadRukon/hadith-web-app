import { useEffect, useState } from "react";
import Card from "./Card";


const HadithCards = () => {
  const [hadithBooks, setHadithBooks] = useState([]);
  const route = import.meta.env.VITE_ENVIRONMENT == "development" ? (import.meta.env.VITE_LOCALHOST):(import.meta.env.VITE_PROD);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${route}/hadith-books`);
      const data = await res.json();
      if (data?.length > 0) {
        setHadithBooks(data);
      } else {
        setHadithBooks([]);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3  gap-10 mt-10  justify-between">
      {hadithBooks.length > 0
        ? hadithBooks.map((book, idx) => <div key={idx} data-aos="fade-up" data-aos-duration="500" data-aos-delay={`${((idx+1) *2 )*50}`}><Card  book={book} hadithbooks={true}/></div>)
        : null}
    </div>
  );
};

export default HadithCards;
