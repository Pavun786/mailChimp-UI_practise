import { useState } from "react"
import engage1 from "../../assets/engage1.PNG"
import engage2 from "../../assets/engage2.PNG"
import engage3 from "../../assets/engage3.PNG"
import "../Engagement/Engagement.css"

 function Engagement(){

    const [picture,setPicture] = useState(engage1)
    // const [show,setShow] = useState(false)
    const [selectIndex,setSelectIndex] = useState(null)

    const data = [
        {
            "image" : engage1,
            "title"  : "Content Optimizer",
            "desc" : "Learn how your emails compare to the top-performing campaigns in your industry and get data-driven suggestions for improving your copy, imagery, and layout."
        },
        {
            "image" : engage2,
            "title"  : "Creative Assistant",
            "desc" : "Our Creative Assistant will help you stand out by using AI to create custom designs for your brand."
        },
        {
            "image" : engage3,
            "title"  : "GDPR ready tools",
            "desc" : "Mailchimp helps you achieve data security and privacy standards for your customers."
        },
    ]


     const open = (id) =>{
        let res = data.filter((ele,index)=> index == id)

        setPicture(res[0].image)
        setSelectIndex(id === selectIndex ? null : id);

     }

     console.log(picture)

      return(
        <div className="engage-container">

            

            <div className="engage-sub1">
            <div>
            <div className="engage-heading">Keep customers ready to buy with engaging content</div>
                {data.map((ele,index)=>{
                    return(
                        <div className="engage-map">
                          <div className="engage-nest">
                            <div>{ele.title}</div>
                            <button onClick={()=>open(index)}>icon</button>
                            </div>
                            <div>
                           { selectIndex === index ?  <div className="engage-desc">{ele.desc}</div> : null}
                           { selectIndex === index ?  <img src={picture} className="map-image"/> : null}
                           <hr></hr>
                           </div>
                        </div>  
                    )
                })}
            </div>
            </div>
            <div className="engage-sub2">
                <img src={picture}/>
            </div>

        </div>
      )
 }
 export default Engagement;