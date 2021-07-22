import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";



function Dadjokes(props) {
const[joke, setjokes]=useState()
  //  start of jokes 
  function dadjokes() {
    var options = {
      method: 'GET',
      url: 'https://dad-jokes.p.rapidapi.com/random/joke/png',
      headers: {
        'x-rapidapi-key': 'e8033ca9a0msh25b010323f351bfp10467ejsn0155295ca703',
        'x-rapidapi-host': 'dad-jokes.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      setjokes(response.data.body.setup.punchline)
       console.log(Dadjokes) 
    }).catch(function (error) {
      console.error(error);
    });
  }
  useEffect(() => {
    // Update the document title using the browser API
   dadjokes()
  },[]);
  return (
    <>
      <a class="waves-effect waves-light btn modal-trigger" href="home">Modal</a>

      <div id="modal1" class="modal modal-fixed-footer">
        <div class="modal-content">
          <h4>dadjokes</h4>
          <p></p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
    </>)
}
export default Dadjokes;