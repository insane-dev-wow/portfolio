import React from "react";
import Card from "./Card";

import telus from "./images/Telus.png";
import ash from "./images/Ash.png";
import Yoovic from "./images/Yoovic.png";
import FIELD from "./images/FIELD.png";
import MELLONA from "./images/MELLONA.png";
import SHYMI from "./images/SHYMI.png";
import "./Projects.css";


const Projects = () => {



const cards=[


{
imageUrl:telus,

altText:"TELUS TV+",

title:"TELUS TV+",

description:
"Premium streaming platform with live TV, movies, and entertainment services built with scalable frontend and backend architecture.",


techitems:[
"React",
"Next.js",
"React Native",
"Angular",
"Spring Boot",
"Node.js"
],


explore:"https://www.telustvplus.com/"

},



{
imageUrl:ash,

altText:"Age Brilliantly",

title:"Age Brilliantly",

description:
"A community platform helping adults make better aging decisions through AI-powered experiences and digital solutions.",


techitems:[
"AI",
"RAG",
"Summarization",
"Spring Boot",
"API Design",
"Message Queue"
],


explore:"https://www.agebrilliantly.org/"

},



{
imageUrl:Yoovic,

altText:"Yoovic",

title:"Yoovic",

description:
"It focuses on making commerce easier for entrepreneurs by providing tools for product listings, seller management, payments, and marketplace growth.",

techitems:[
"Tailwind CSS",
"Redux",
"GraphQL",
"REST API",
"WebSocket",
"Mongoose",
"MongoDB",
"Animation",
"Express"
],


explore:"https://yoovic.ae/"

},




{
imageUrl:FIELD,

altText:"FIELDASH",

title:"FIELD & ASH",

description:
"Field & Ash is a Shopify-based e-commerce brand selling timeless backpacks, messenger bags, and crossbody essentials designed for daily life, work, and travel, combining minimalist design with functional style for people on the move.",


techitems:[
"SaaS",
"Microservices",
"Cloud",
"Distributed Systems",
"API Integration",
"SEO",
"Animation",
"motion",
"AI-engine"
],


explore:"https://yoovic.ae"

}
,{
imageUrl:SHYMI,

altText:"SHOPSHYMI",

title:"SHOP SHYMI",

description:
"Shymi Jewelry is a modern e-commerce jewelry brand focused on everyday luxury jewelry. The store offers products such as bracelets, rings, necklaces, earrings, personalized jewelry, and gold/silver pieces.",


techitems:[
"React",
"Next.js",
"React Native",
"Angular",
"Spring Boot",
"Node.js",
"Next.js",
"MUI",
"Bootstrap"
],


explore:"https://shopshymi.com/"

},
{
imageUrl:MELLONA,

altText:"MELLONA",

title:"MELLONA",

description:
"Mellona Artisanal Products is a Canadian e-commerce brand specializing in premium honey and artisanal food products. The website sells products such as raw honey, infused honey, maple syrup, jams, sauces, freeze-dried foods, and olive oil.",

techitems:[
"React",
"Next.js",
"React Native",
"Angular",
"Spring Boot",
"Node.js"
],


explore:"https://mellona.ca/"

}

];



return (


<section

id="project"

className="projects-section"

>



<h1>
Projects
</h1>




<div className="projects-grid">


{

cards.map((card,index)=>(


<Card

key={index}

{...card}

/>


))


}



</div>




</section>


);


};



export default Projects;