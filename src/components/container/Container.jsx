import React from "react";

const Container = ({ children }) => {
  return <div className="relative z-10 bg-[#fefdf8] dark:bg-stone-700">
    <div className="xl:container mx-auto px-3 xl:px-8">{children}</div>
  </div>;
};

export default Container;