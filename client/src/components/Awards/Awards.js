import React from "react";
import axios from "axios";
import "./AwardsStyle.css";
import bronze from "../../assets/bronzeStar.png";
import silver from "../../assets/silverStar.png";
import gold from "../../assets/goldStar.png";
import bronzeSilver from "../../assets/bronze-silverStar.png";
import bronzeGold from "../../assets/bronze-silver-goldStar.png";

function Awards() {
  function getPoints() {
    const pointsEarned = 150; //api.getPoints() CHANGE POINTS TO API CALL //
    return pointsEarned;
  }

  function getPointsNeeded() {
    const pointsEarned = getPoints();
    if (pointsEarned <= 99) {
      return 100 - pointsEarned;
    }
    if (pointsEarned >= 100 && pointsEarned <= 199) {
      return 200 - pointsEarned;
    }
    if (pointsEarned >= 200 && pointsEarned <= 299) {
      return 300 - pointsEarned;
    }
    if (pointsEarned >= 300 && pointsEarned <= 399) {
      return 400 - pointsEarned;
    }
    if (pointsEarned >= 400 && pointsEarned <= 499) {
      return 500 - pointsEarned;
    }
    if (pointsEarned >= 500) {
      return 0;
    }
  }

  function getAwardsAchieved() {
    const pointsEarned = getPoints();
    if (pointsEarned <= 99) {
      return;
    }
    if (pointsEarned >= 100 && pointsEarned <= 199) {
      return <img src={bronze} alt="bronze star" className="allAwards"></img>;
    }
    if (pointsEarned >= 200 && pointsEarned <= 299) {
      return (
        <span>
          {" "}
          <img src={bronze} alt="bronze star" className="allAwards"></img> <img src={silver} alt="silver star" className="allAwards"></img>
        </span>
      );
    }
    if (pointsEarned >= 300 && pointsEarned <= 399) {
      return (
        <span>
          {" "}
          <img src={bronze} alt="bronze star" className="allAwards"></img> <img src={silver} alt="silver star" className="allAwards"></img>
          <img src={gold} alt="gold star" className="allAwards"></img>
        </span>
      );
    }
    if (pointsEarned >= 400 && pointsEarned <= 499) {
      return (
        <span>
          {" "}
          <img src={bronze} alt="bronze star" className="allAwards"></img> <img src={silver} alt="silver star" className="allAwards"></img>
          <img src={gold} alt="gold star" className="allAwards"></img>
          <img src={bronzeSilver} alt="bronzeSilver star" className="allAwards"></img>
        </span>
      );
    }
    if (pointsEarned >= 500) {
      return (
        <span>
          {" "}
          <img src={bronze} alt="bronze star" className="allAwards"></img> <img src={silver} alt="silver star" className="allAwards"></img>
          <img src={gold} alt="gold star" className="allAwards"></img>
          <img src={bronzeSilver} alt="bronzeSilver star" className="allAwards"></img>
          <img src={bronzeGold} alt="bronzeGold star" className="allAwards"></img>
        </span>
      );
    }
  }

  function getAwards() {
    const pointsEarned = getPoints();
    if (pointsEarned <= 99) {
      return <h4>Keep Adulting to Level Up and Earn Awards!</h4>;
    }
    if (pointsEarned >= 100 && pointsEarned <= 199) {
      return (
        <div>
          <img src={bronze} alt="bronze star" className="materialboxed"></img>
          <p>Congratulations! You've earned the Bronze Star!</p>
        </div>
      );
    }
    if (pointsEarned >= 200 && pointsEarned <= 299) {
      return (
        <div>
          <img src={silver} alt="silver star" className="materialboxed"></img>
          <p>Congratulations! You've earned the Silver Star!</p>
        </div>
      );
    }
    if (pointsEarned >= 300 && pointsEarned <= 399) {
      return (
        <div>
          <img src={gold} alt="gold star" className="materialboxed"></img>
          <p>Congratulations! You've earned the Gold Star!</p>
        </div>
      );
    }
    if (pointsEarned >= 400 && pointsEarned <= 499) {
      return (
        <div>
          <img src={bronzeSilver} alt="bronzeSilver star" className="materialboxed"></img>
          <p>Congratulations! You've earned the Siler Bronze Star!</p>
        </div>
      );
    }
    if (pointsEarned >= 500) {
      return (
        <div>
          <img src={bronzeGold} alt="bronzeGold star" className="materialboxed"></img>
          <p>
            Congratulations!
            You've earned the Gold Silver Bronze Star!
          </p>
        </div>
      );
    }
  }

  return (
    <div className="col s12 m12 l5 awardCard">
      <div className="card">
        <div className="card-content">
          <span className="card-title">Awards</span>
          <p>Earn points by acting like an adult to get these awards!</p>
          <img src={bronze} alt="bronze star" className="allAwards"></img>
          <img src={silver} alt="silver star" className="allAwards"></img>
          <img src={gold} alt="gold star" className="allAwards"></img>
          <img src={bronzeSilver} alt="bronzeSilver star" className="allAwards"></img>
          <img src={bronzeGold} alt="bronzeGold star" className="allAwards"></img>
          <span className="card-title">This is your
          <br /> current level</span>

          {getAwards()}
          <span className="card-title">Status</span>
          <p>Points earned: {getPoints()}</p>
          <br />

          <p>You are {getPointsNeeded()} points away from your next award!</p>
          <br />
          <p>Awards earned:</p>
          <br />
          <br />
          {getAwardsAchieved()}
          <br />
          <br />
          <span className="card-title">
            Keep Adulting!
            <br />
            You are doing great!
          </span>
        </div>
      </div>
    </div>
  );
}

export default Awards;
