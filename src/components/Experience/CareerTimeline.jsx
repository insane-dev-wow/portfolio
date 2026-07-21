import {motion} from "framer-motion";


export default function CareerTimeline(){


return(

<div className="timeline-line">


<motion.div

initial={{

height:0

}}

whileInView={{

height:"100%"

}}

transition={{

duration:2

}}

></motion.div>


</div>

)

}