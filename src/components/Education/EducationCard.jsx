import {motion} from "framer-motion";


export default function EducationCard({

data,

index

}){


return(

<motion.div

className={

`degree-card 

${index%2===0?"left":"right"}

`

}


initial={{

opacity:0,

x:index%2===0?-120:120

}}


whileInView={{

opacity:1,

x:0

}}


transition={{

duration:.8

}}


viewport={{

once:true

}}



>


<div className="degree-dot"></div>



<div className="degree-content">


<h3>

{data.degree}

</h3>


<span>

{data.period}

</span>


<p>

{data.skills.join(" • ")}

</p>


</div>


</motion.div>

)

}