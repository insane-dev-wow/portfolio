import {motion} from "framer-motion";


export default function AboutCard(){


return(


<motion.div


className="about-visual"


initial={{
opacity:0,
scale:.7
}}


whileInView={{
opacity:1,
scale:1
}}


transition={{
duration:1
}}


>



<div className="glow-circle"></div>



<div className="about-card">


<h2>

FULL STACK

</h2>



<span>

AI ENGINEER

</span>




<div className="line"></div>




<p>

Building scalable systems,
cloud platforms and intelligent
applications.

</p>



</div>


</motion.div>


)

}