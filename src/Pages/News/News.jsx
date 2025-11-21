import React from "react";
import NewsHeader from "../../Components/News/NewsHeader";
import NewsCards from "../../Components/News/NewsCard"; 

export default function News() {
  return (
    <div>
      <NewsHeader />
        <NewsCards />
    </div>
  );
}