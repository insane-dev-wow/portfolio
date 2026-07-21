import {motion} from "framer-motion";

import SkillCategory from "./SkillCategory";

import {skillData} from "./skillData";

import "./Skills.css";



export default function Skills(){


return(


<section

id="skills"

className="skills-section"

>


<div className="skills-decoration"></div>



<motion.h1

initial={{
opacity:0,
y:-80
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

viewport={{
once:true
}}

>

Skills

</motion.h1>





<div className="skills-wrapper">


{

skillData.map((skill,index)=>(


<SkillCategory

key={skill.title}

skill={skill}

index={index}


/>


))

}



</div>


</section>


)

}