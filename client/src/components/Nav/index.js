import React from "react";


  

            
function Nav() {
  return (
    
    <nav 
    className="#ff8a65 deep-orange lighten-2, nav-wrapper"  style="padding: 0px 10px;">
      <a  href="#" className="brand-logo">Aduling App</a>

      <a href="#" className="sidenav-tigger" data-target="mobile-nav">
        <i className="material-icons">menu</i>
      </a>

        React Reading List
     <ul className= "right hide-on-med-and-down">  
        <li><a href="#">Home</a></li>
        <li><a href="#">Logout</a></li>
        <li><a href="#">Task</a></li>
        <li><a href="#">Ranking</a></li>

     </ul>
    </nav>
    
  );
}
{
  <ul className="sidenav"  id=" modile-demo">
        <li><a href="#">Home</a></li>
        <li><a href="#">Logout</a></li>
        <li><a href="#">Task</a></li>
        <li><a href="#">Ranking</a></li>
  </ul>
}

export default Nav;
