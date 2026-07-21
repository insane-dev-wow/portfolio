import {motion} from "framer-motion";



export default function SkillCategory({

skill,

index

}){


const Icon=skill.icon;



return(


<motion.div


className="skill-category"



initial={{

opacity:0,

y:100

}}



whileInView={{

opacity:1,

y:0

}}



transition={{

duration:.8,

delay:index*.15

}}



viewport={{

once:true

}}


>



<div className="skill-header">


<div className="category-icon">

<Icon/>

</div>



<h2>

{skill.title}

</h2>



</div>




<div className="divider"></div>





<div className="skill-items">


{

skill.items.map(item=>(


<div

className="skill-item"

key={item}

>


{item}


</div>


))


}


</div>


</motion.div>


)

}