import React from "react";
           
function Nav() {
  return (
    
    <nav 
    className="#69f0ae green accent-2 nav-wrapper center-align">
      <a  href="#home" className="brand-logo">Adulting</a>

      <a href="#home" className="sidenav-tigger" data-target="mobile-nav">
        <i className="material-icons">menu</i>
      </a>
     <ul className= "right hide-on-med-and-down">  
        <li><a href="#home"></a></li>
        {/* <li><a href="#logout">Logout</a></li> */}
       
     </ul>
    </nav>
    
  );
}

export default Nav;
