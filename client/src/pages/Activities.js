import React from "react";

function Activities() {


    return (
      <div className="container">
        <div className="row">
            <div className="col l6">
              <h2 className="title">What did I do today?</h2>
            <form>
                <select name="category" id="category">
                    <option value="">choose a category:</option>
                  <option value="automobile">automobile</option>
                  <option value="charity">charity</option>
                  <option value="chores">chores</option>
                  <option value="digital">digital</option>
                  <option value="finances">finances</option>
                  <option value="fitness">fitness/personal care</option>
                  <option value="health">health</option>
                  <option value="home">home maintenance</option>
                  <option value="miscellaneous">miscellaneous</option>
                  <option value="organization/paperwork">organizaiton/paperwork</option>
                  <option value="personal">personal care</option>
                  <option value="pet">pet care</option>
                  <option value="self">self care</option>
                  <option value="social">social</option>
                  <option value="work">work</option>
                 </select>
                 <input placeholder="activity"></input>
                <input placeholder="time"></input>
                <input type="date" id="date" name="date"></input>
                <input type="submit"></input>
                </form>
                </div>
                </div>
                </div>
    );
  }


export default Activities;
