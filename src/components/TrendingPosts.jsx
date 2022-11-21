import React from "react";
import TrendingPost from "../components/TrendingPost";

const TrendingPosts = () => {
  return (
    <div className="trending">
      <h1>Trending Posts</h1>
      <div className="content">
        <TrendingPost
          heading="8 Upcoming Influencer Marketing Trends and Benefits"
          description="Marketing is evolving. It's changing from a one-way street to a
                two-way conversa…"
        />
        <TrendingPost
          heading="How Influencer Marketing Affects Consumer Buying Behavior"
          description="As influencer marketing continues to grow, consumers have been
                turning to their…"
        />
      </div>
    </div>
  );
};

export default TrendingPosts;
