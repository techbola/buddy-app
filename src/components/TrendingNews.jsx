import React from "react";
import News1 from "../assets/images/news1.png";
import News2 from "../assets/images/news2.png";
import News3 from "../assets/images/news3.png";

import TrendingNewsSingle from "./TrendingNewsSingle";

const TrendingNews = () => {
  return (
    <div className="trending-news">
      <h4>Trending News</h4>
      <div className="content">
        <TrendingNewsSingle
          heading="Russia & Ukraine War"
          content="Marketing is evolving. It's chang..."
          image={News1}
        />
        <TrendingNewsSingle
          heading="Elon Musk bought Twitter"
          content="Twitter is the most useful social pl..."
          image={News2}
        />
        <TrendingNewsSingle
          heading="Fuel Crisis Everywhere"
          content="Due to covid situation in 2020 the..."
          image={News3}
        />
      </div>
    </div>
  );
};

export default TrendingNews;
