import React from "react";

const Container = ({ children }) => {
  return (
    <div className="xl:container mx-auto px-3 xl:px-8 min-h-[calc(100vh-131px)]">
      {children}
    </div>
  );
};

export default Container;
