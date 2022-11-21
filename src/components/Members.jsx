import React from "react";
import PotentialMember from "../components/PotentialMember";
import Member1 from "../assets/images/member1.png";
import Member2 from "../assets/images/member2.png";
import Member3 from "../assets/images/member3.png";
import Member4 from "../assets/images/member4.png";
import Member5 from "../assets/images/member5.png";

const Members = () => {
  return (
    <div className="members">
      <h1>Trending Posts</h1>
      <div className="content">
        <PotentialMember
          name="Wanda Parker"
          handle="@ashking1234"
          rate="10.3%"
          picture={Member1}
        />
        <PotentialMember
          name="Terry Brown"
          handle="@ashking1234"
          rate="19.8%"
          picture={Member2}
        />
        <PotentialMember
          name="Lucas Holmes"
          handle="@ashking1234"
          rate="6.5%"
          picture={Member3}
        />
        <PotentialMember
          name="Janice Miller"
          handle="@ashking1234"
          rate="8.6%"
          picture={Member4}
        />
        <PotentialMember
          name="Terry Brown"
          handle="@ashking1234"
          rate="9.8%"
          picture={Member5}
        />
      </div>
    </div>
  );
};

export default Members;
