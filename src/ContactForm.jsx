import React, {useState} from "react";
import axios from "axios";
import {motion} from "framer-motion";
import {
FontAwesomeIcon
} from "@fortawesome/react-fontawesome";

import {
faEnvelope,
faPaperPlane,
faPhone
} from "@fortawesome/free-solid-svg-icons";


import BackToTopButton from "./BackToTopButton";

import "./contact.css";



const ContactForm =()=>{


const [formData,setFormData]=useState({

name:"",
email:"",
message:""

});




const handleChange=(e)=>{


setFormData({

...formData,

[e.target.name]:e.target.value

});


};





const handleSubmit=async(e)=>{


e.preventDefault();


try{


const response=await axios.post(

"http://localhost:3033/api/send",

formData

);


alert(response.data);


}

catch(error){


console.log(error);

alert("Message failed");


}





setFormData({

name:"",
email:"",
message:""

});


};





return(



<section

id="contact"

className="contact-section"

>




<h1>

Contact Me

</h1>






<motion.div

className="contact-container"

initial={{
opacity:0,
y:80
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

viewport={{
once:true,
amount:0.3
}}

>






<div className="contact-info">



<h2>

Let's Connect

</h2>




<p>

Have a project idea?
Let's build something amazing together.

</p>





<div className="contact-item">


<FontAwesomeIcon icon={faPhone}/>


<a href="tel:+63 969 403 0415">

+63 969 403 0415

</a>


</div>







<div className="contact-item">


<FontAwesomeIcon icon={faEnvelope}/>


<a href="mailto:rickyjay.bruce@gmail.com">

rickyjay.bruce@gmail.com

</a>


</div>






</div>









<form

className="contact-form"

onSubmit={handleSubmit}

>



<input


type="text"

name="name"

placeholder="Your Name"

value={formData.name}

onChange={handleChange}

required

/>







<input


type="email"

name="email"

placeholder="Your Email"

value={formData.email}

onChange={handleChange}

required

/>






<textarea


name="message"

placeholder="Your Message"

value={formData.message}

onChange={handleChange}

required

/>







<button

type="submit"

>


<FontAwesomeIcon icon={faPaperPlane}/>


<span>

SEND MESSAGE

</span>



</button>





</form>













<BackToTopButton/>
</motion.div>

</section>


);


};


export default ContactForm;