import Card from "./../bookOfHadith/Card";

const CategoryCards = ({ categories }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-10  justify-between">
      {categories.length > 0
        ? categories.map((category, idx) => (
            <div
              key={category._id}
              data-aos={`${
                idx + 1 === 1 ||
                idx + 1 === 4 ||
                idx + 1 === 7 ||
                idx + 1 === 10
                  ? "fade-right"
                  : idx + 1 === 2 || idx + 1 === 5 || idx + 1 === 8
                  ? "fade-up"
                  : "fade-left"
              }`}
            >
              <Card item={category} />
            </div>
          ))
        : null}
    </div>
  );
};

export default CategoryCards;
