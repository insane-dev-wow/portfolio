import "./main.css";

import React, {useState} from "react";

import {Link as ScrollLink} from "react-scroll";


const Navbar =()=>{


const [open,setOpen]=useState(false);



const closeMenu=()=>{

setOpen(false);

}



return (


<nav className="navbar">



<div className="nav-container">



<div className="logo">

Portfolio

</div>





<div

className={`nav-links ${open ? "active":""}`}

>


<ScrollLink
to="mainy"
smooth={true}
duration={600}
onClick={closeMenu}
className="nav-item"
>

Home

</ScrollLink>



<ScrollLink
to="aboutme"
smooth={true}
duration={600}
onClick={closeMenu}
className="nav-item"
>

About Me

</ScrollLink>




<ScrollLink
to="skills"
smooth={true}
duration={600}
onClick={closeMenu}
className="nav-item"
>

Skills

</ScrollLink>





<ScrollLink
to="experience"
smooth={true}
duration={600}
onClick={closeMenu}
className="nav-item"
>

Experience

</ScrollLink>





<ScrollLink
to="education"
smooth={true}
duration={600}
onClick={closeMenu}
className="nav-item"
>

Education

</ScrollLink>





<ScrollLink
to="project"
smooth={true}
duration={600}
onClick={closeMenu}
className="nav-item"
>

Projects

</ScrollLink>





<ScrollLink
to="contact"
smooth={true}
duration={600}
onClick={closeMenu}
className="nav-item contact"
>

Contact

</ScrollLink>




</div>






<div

className="menu"

onClick={()=>setOpen(!open)}

>


<span></span>

<span></span>

<span></span>


</div>





</div>



</nav>



);


};



export default Navbar;