import React from "react";
import "./AwardsStyle.css";
import bronze from "../../assets/bronzeStar.png";
import silver from "../../assets/silverStar.png";
import gold from "../../assets/goldStar.png";
import bronzeSilver from "../../assets/bronze-silverStar.png";
import bronzeGold from "../../assets/bronze-silver-goldStar.png";

function Awards() {
  function stars() {
    const pointsEarned = api.getPoints();
    if (pointsEarned <= 99) {
      return <h4>Keep Adulting to Level Up and Earn Awards!</h4>;
    }
    if (pointsEarned >= 100) {
      return (
        <div>
          <img src={bronze} alt="bronze star" className="allAwards"></img>
          <p>Congratulations! You've earned the Bronze Star!</p>
        </div>
      );
    }
    if (pointsEarned >= 200) {
      return (
        <div>
          <img src={silver} alt="silver star" className="allAwards"></img>
          <p>Congratulations! You've earned the Silver Star!</p>
        </div>
      );
    }
    if (pointsEarned >= 300) {
      return (
        <div>
          <img src={gold} alt="gold star" className="allAwards"></img>
          <p>Congratulations! You've earned the Gold Star!</p>
        </div>
      );
    }
    if (pointsEarned >= 400) {
      return (
        <div>
          <img src={bronzeSilver} alt="bronzeSilver star" className="allAwards"></img>
          <p>Congratulations! You've earned the Siler Bronze Star!</p>
        </div>
      );
    }
    if (pointsEarned >= 500) {
      return (
        <div>
          <img src={bronzeGold} alt="bronzeGold star" className="allAwards"></img>
          <p>Congratulations! You've earned the Gold Silver Bronze Star!</p>
        </div>
      );
    }
    return <Awards />;
  }

  return (
    <div className="col s12 m12 l4 awardCard">
      <div className="card">
        <div className="card-content">
          <span className="card-title">Awards</span>

          <img src={bronze} alt="bronze star" className="materialboxed"></img>
          <p>Earn points by acting like an adult to level up!</p>
        </div>
        {stars()}
      </div>
    </div>
  );
}

export default Awards;
