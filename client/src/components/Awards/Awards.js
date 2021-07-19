import React from "react";
import "./AwardsStyle.css";
import bronze from "../../assets/bronzeStar.png";
import silver from "../../assets/silverStar.png";
import gold from "../../assets/goldStar.png";
import bronzeSilver from "../../assets/bronze-silverStar.png";
import bronzeGold from "../../assets/bronze-silver-goldStar.png";

function Awards() {
  //   function stars() {
  //     const pointsEarned = api.getPoints();
  //     if (pointsEarned <= 99) {
  //       return <h4>Keep Adulting to Level Up and Earn Awards!</h4>;
  //     }
  //     if (pointsEarned >= 100) {
  //       return (
  //         <div>
  //           <img src={bronze} alt="bronze star" className="allAwards"></img>
  //           <p>Congratulations! You've earned the Bronze Star!</p>
  //         </div>
  //       );
  //     }
  //     if (pointsEarned >= 200) {
  //       return (
  //         <div>
  //           <img src={silver} alt="silver star" className="allAwards"></img>
  //           <p>Congratulations! You've earned the Silver Star!</p>
  //         </div>
  //       );
  //     }
  //     if (pointsEarned >= 300) {
  //       return (
  //         <div>
  //           <img src={gold} alt="gold star" className="allAwards"></img>
  //           <p>Congratulations! You've earned the Gold Star!</p>
  //         </div>
  //       );
  //     }
  //     if (pointsEarned >= 400) {
  //       return (
  //         <div>
  //           <img src={bronzeSilver} alt="bronzeSilver star" className="allAwards"></img>
  //           <p>Congratulations! You've earned the Siler Bronze Star!</p>
  //         </div>
  //       );
  //     }
  //     if (pointsEarned >= 500) {
  //       return (
  //         <div>
  //           <img src={bronzeGold} alt="bronzeGold star" className="allAwards"></img>
  //           <p>Congratulations! You've earned the Gold Silver Bronze Star!</p>
  //         </div>
  //       );
  //     }
  //     return <Awards />;
  //   }

  return (
    <div className="col s12 m12 l4 awardCard">
      <div className="card">
        <div className="card-content">
          <span className="card-title">Awards</span>
          <p>Earn points by acting like an adult to get these awards!</p>
          <img src={bronze} alt="bronze star" className="allAwards"></img>
          <img src={silver} alt="silver star" className="allAwards"></img>
          <img src={gold} alt="gold star" className="allAwards"></img>
          <img src={bronzeSilver} alt="bronzeSilver star" className="allAwards"></img>
          <img src={bronzeGold} alt="bronzeGold star" className="allAwards"></img>
          <span className="card-title">This is your current level</span>
          <img src={gold} alt="gold star" className="materialboxed"></img>
          {/* {stars()} */}
          <span className="card-title">Status</span>
          <p>You currently have _____ points.</p>
          <br />
          <p>You are _____ points away from your next award!</p>
          <br />
          <p>These are the awards you have already earned.</p>
          <br />
          <br />
          <img src={bronze} alt="bronze star" className="allAwards"></img>
          <img src={silver} alt="silver star" className="allAwards"></img>
          <br />
          <br />
          <span className="card-title">Keep Adulting! You are doing great!</span>
        </div>
      </div>
    </div>
  );
}

export default Awards;
