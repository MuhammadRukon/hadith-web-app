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
        ? categories.map((book, idx) => <Card key={idx} book={book} />)
        : null}
    </div>
  );
};

export default CategoryCards;
