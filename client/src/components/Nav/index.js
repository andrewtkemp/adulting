import React from "react";


//<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>



  
            
function Nav() {
  return (
    
    <nav 
    className="peach nav-wrapper">
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

export default Nav;
