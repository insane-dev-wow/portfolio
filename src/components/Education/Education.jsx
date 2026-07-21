import "./Education.css";

import {motion} from "framer-motion";

import EducationCard from "./EducationCard";

import {educationData} from "./educationData";


export default function Education(){


return(

<section

id="education"

className="education"

>


<div className="education-orb"></div>


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
Education
</motion.h1>





<div className="education-container">



<motion.div

className="university-card"

initial={{
opacity:0,
scale:.8
}}

whileInView={{
opacity:1,
scale:1
}}

transition={{
duration:1
}}

viewport={{
once:true
}}

>


<div className="university-icon">

🎓

</div>



<h2>

The Hong Kong University of Science and Technology

</h2>


<p>

Hong Kong

</p>


</motion.div>






<div className="education-timeline">


<div className="timeline-line"></div>


{

educationData.map(

(item,index)=>(

<EducationCard

key={index}

data={item}

index={index}

/>

)

)

}


</div>


</div>


</section>

)

}