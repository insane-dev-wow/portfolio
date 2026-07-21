import "./Experience.css";

import {motion} from "framer-motion";

import CareerCard from "./CareerCard";

import CareerTimeline from "./CareerTimeline";

import {experiences} from "./experienceData";



export default function Experience(){


return(

<section

id="experience"

className="experience"

>


<div className="experience-glow"></div>



<motion.h1

initial={{

opacity:0,

y:-50

}}

whileInView={{

opacity:1,

y:0

}}

transition={{

duration:.8

}}

viewport={{

once:true

}}

>

Experience

</motion.h1>





<div className="career-wrapper">


<CareerTimeline />



{

experiences.map((item,index)=>(


<CareerCard

key={item.id}

data={item}

index={index}


/>


))

}



</div>



</section>


)

}