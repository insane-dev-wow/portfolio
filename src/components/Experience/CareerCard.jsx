import {motion} from "framer-motion";
import CareerButton from "./CareerButton";


export default function CareerCard({

data,

index

}){


return(

<motion.article

className={`career-item ${
index%2===0?"left":"right"
}`}


initial={{

opacity:0,

y:80

}}


whileInView={{

opacity:1,

y:0

}}


viewport={{

once:true,

amount:.2

}}


transition={{

duration:.8

}}


>


<div className="career-date">

{data.id}

</div>



<div className="career-box">


<h2>

{data.company}

</h2>



<p>

{data.description}

</p>



<CareerButton

image={data.image}

url={data.url}

/>


</div>



</motion.article>

)

}