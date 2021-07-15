import React from "react";
// home tag from 


  

            
function Nav() {
  return (
    
    <nav 
    className="#ff8a65 deep-orange lighten-2, nav-wrapper"  style="padding: 0px 10px;">
      <a  href="#home" className="brand-logo">Aduling App</a>

      <a href="#home" className="sidenav-tigger" data-target="mobile-nav">
        <i className="material-icons">menu</i>
      </a>

        React Reading List
     <ul className= "right hide-on-med-and-down">  
        <li><a href="#home">Home</a></li>
        {/* <li><a href="#logout">Logout</a></li> */}
        


     </ul>
    </nav>
    
  );
}

 // <ul className="sidenav"  id=" modile-demo">
  //      <li><a href="#home">home</a></li>
        // {/* <li><a href="#logout">Logout</a></li> */}

  


export default Nav;
