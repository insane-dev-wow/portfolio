import "./about_me.css";

import { motion } from "framer-motion";


export default function AboutMe(){


return (

<section 
className="about-section"
id="aboutme"
>


<div className="about-glow"></div>


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

>
ABOUT ME
</motion.h1>




<div className="about-container">



<motion.div

className="about-text"

initial={{
opacity:0,
x:-80
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.8
}}

>


<p>

I am a Senior Full-Stack & AI Engineer with 10 years of experience building scalable web applications, AI-powered platforms, and cloud-native solutions. I specialize in developing modern software systems using React, Node.js, Python, Java, and cloud technologies, while integrating AI capabilities such as LLMs, RAG workflows, semantic search, and intelligent automation.
<br></br><br></br>
I enjoy transforming complex business requirements into reliable, user-focused products. My experience spans AI SaaS platforms, microservices architecture, real-time applications, data pipelines, and enterprise solutions across multiple industries. I am passionate about creating clean, efficient, and scalable technology that delivers real-world impact.


</p>


</motion.div>





<motion.div

className="about-visual"

initial={{
opacity:0,
x:80
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.8
}}

>


<div className="glow-circle"></div>



<div className="about-card">


<h2>
Erese Ricky Jay
</h2>


<span>
Full Stack Developer
</span>
<span>
    AI Engineer
</span>


<div className="line"></div>



<p>
AI • LLM • RAG 
</p>
<p>
FRONTEND • BACKEND • DATABASE & DATA  MANAGEMENT
</p>
<p>
CLOUD & DevOps • ARCHITECTURE
</p>

</div>



</motion.div>



</div>


</section>

)


}