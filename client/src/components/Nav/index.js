import React from "react";

//<script scr="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"

//<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>


<script>
  $(document).ready(function(){
    $('.sidenav') .sidenav()
  })
  
</script>
            
function Nav() {
  return (
    
    <nav 
    class="peach" style="padding: 0px 10px;">
    class="nav-wrapper"
      <a  href="#" clss="brand-logo">Aduling App</a>

      <a href="#" class="sidenav-tigger" data-target="mobile-nav">
        <i class="material-icons">menu</i>
      </a>

        React Reading List
     <ul class= "right hide-on-med-and-down">  
        <li><a href="#">Home</a></li>
        <li><a href="#">Logout</a></li>
        <li><a href="#">Task</a></li>
        <li><a href="#">Ranking</a></li>

     </ul>
    </nav>
    
  );
}
{
  <ul class="sidenav"  id=" modile-demo">
        <li><a href="#">Home</a></li>
        <li><a href="#">Logout</a></li>
        <li><a href="#">Task</a></li>
        <li><a href="#">Ranking</a></li>
  </ul>
}

export default Nav;
