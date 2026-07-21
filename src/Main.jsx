import "./main2.css";

import {motion} from "framer-motion";


const Main = () => {


return (

<motion.section


className="Main"

id="mainy"


variants={{

hidden:{
opacity:0,
y:50
},

visible:{
opacity:1,
y:0
}

}}


initial="hidden"

whileInView="visible"

viewport={{
    once:true,
    amount:0.3
}}


transition={{

duration:1.2

}}


>


<div className="main-container">



<div className="main-left">



<p className="hello">

Hello, I'm

</p>




<h1 className="name">

Erese Ricky Jay

</h1>





<h2 className="role">

Full Stack Software Engineer

</h2>





<p className="description">


Building scalable web applications,
AI-powered solutions, cloud platforms,
and modern user experiences.


</p>





<div className="main-buttons">







<button


className="resume-btn"


onClick={()=>window.open(
"https://drive.google.com/file/d/1FF9LupaC4wm6C1MIi9GnL6Le7OLA3D2n/view?usp=sharing",
"_blank"
)}


>


Resume


</button>



</div>




</div>







<div className="main-right">



<div className="orb">



<div className="inner-orb">


</div>



</div>



</div>



</div>



</motion.section>


);


};


export default Main;