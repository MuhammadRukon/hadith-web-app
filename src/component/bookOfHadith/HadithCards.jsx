import { useEffect, useState } from "react";
import Card from "./Card";

const HadithCards = () => {
  const [hadithBooks, setHadithBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/hadithbooks.json");
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
    <div className="grid grid-cols-3 gap-10 mt-10  justify-between">
      {hadithBooks.length > 0
        ? hadithBooks.map((book, idx) => <Card key={idx} book={book} />)
        : null}
    </div>
  );
};

export default HadithCards;
