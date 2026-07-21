import React from "react";


const Card = ({
imageUrl,
altText,
title,
description,
techitems,
explore

})=>{


return(


<div className="project-card">



<div className="project-image">


<img

src={imageUrl}

alt={altText}

/>


</div>





<div className="project-content">



<h2>

{title}

</h2>




<p className="project-description">

{description}

</p>





<div className="tech-container">


{

techitems.map((item)=>(


<span

key={item}

className="tech-tag"

>

{item}

</span>


))


}


</div>





<button

onClick={()=>window.open(explore,"_blank")}

>

Explore

<span>
→
</span>


</button>




</div>




</div>



)


}



export default Card;