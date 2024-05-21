import { useEffect, useState } from "react";
import Card from "./../bookOfHadith/Card";

const CategoryCards = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/category.json");

      const data = await res.json();
      if (data?.length > 0) {
        setCategories(data);
      } else {
        setCategories([]);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-10 mt-10  justify-between">
      {categories.length > 0
        ? categories.map((book, idx) => <div key={idx} data-aos={`${idx + 1 === 1 || idx + 1 === 4 || idx + 1 === 7 || idx + 1 === 10? "fade-right": idx + 1 === 2 || idx + 1 === 5 || idx + 1 === 8 ? "fade-up": "fade-left"}`}><Card book={book} /></div>)
        : null}
    </div>
  );
};

export default CategoryCards;
