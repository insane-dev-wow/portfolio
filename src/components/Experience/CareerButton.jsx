export default function CareerButton({

image,

url

}){


return(

<button

className="career-button"

onClick={()=>window.open(url,"_blank")}

>


<img

src={image}

alt="company logo"

/>


</button>

)

}