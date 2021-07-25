import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import "./BadJokesStyle.css"

function Badjokes(props) {
const[joke, setjokes]=useState()
  //  start of jokes 
  function badjokes() {
    var options = {
      method: 'GET',
      url: 'https://dad-jokes.p.rapidapi.com/random/joke/png',
      headers: {
        'x-rapidapi-key': 'e8033ca9a0msh25b010323f351bfp10467ejsn0155295ca703',
        'x-rapidapi-host': 'dad-jokes.p.rapidapi.com'
      }
    };
    //working on this to call then will move to modal 
    axios.request(options).then(function (response) {
      console.log(response.data);
      setjokes(response.data.body.setup.punchline)
       console.log(Badjokes) 
    }).catch(function (error) {
      console.error(error);
    });
  }
  useEffect(() => {
    // Update the document title using the browser API
   badjokes()
  },[]);

  return (
   
    <div class="row">
    <div class="col s12 m12 l12">
      <div class="card #69f0ae green accent-2">
        <div class="card-content white-text">
          <span class="card-title">Bad Joke of the Day</span>
          <p>Have joke show up here</p>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Badjokes;