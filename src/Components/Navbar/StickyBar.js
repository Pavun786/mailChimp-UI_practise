
import "../Navbar/Navbar.css"
import {useEffect, useState} from "react";

function StickyBar(){

   
    const[status,setStatus] = useState(true)
    const [change,setChange] = useState(false)
    const [dynamicData,setDynamicData] = useState("")
     const[dynamicStatus,setDynamicStatus] = useState(false)

    
    const statusChange = ()=>{
            setStatus((pre)=> pre = false)
            setDynamicData("")
        }

        const data =[
            {
                "title" : "Solutions and Services",
                "subTitle" : [
                    "Email marketing",
                    "Websites",
                    "Social media marketing",
                    "Templates",
                    "Marketing automation",
                    "Reporting & analytics",
                    "Audience management",
                    "AI marketing tools",
                    "Content Creation Tools",
                    "See all features",
                    "See what’s new"
                
                ],
                "list" :[
                    {
                        "name" : "For your industry",
                         "symb" : <i class="bi bi-chevron-right"></i>
                    },
                    {
                        "name" : "Professional Services",
                         "symb" : <i class="bi bi-chevron-right"></i>
                    },
                    {
                        "name" : "Integrate your apps",
                         "symb" : <i class="bi bi-chevron-right"></i>
                    }
                ]


            }
        ]

        const data2=[{

            "title" : "For your industry",
             "subTitle" : [
                "E-commerce and retail",
                "Service-based Business",
                "Mobile and web apps",
                "Start-ups",
                "Agencies and freelancers",
                "Developers"
             ]
        },
        {
            "title" : "Professional Services",
             "subTitle" : [
                "Hire an Expert",
                "Personalized onboarding",
                "Customer success",
                
             ]
        },
        {
            "title" : "Integrate your apps",
             "subTitle" : [
                "Shopify",
                "Wix",
                "Salesforce",
                "Canva",
                "WooCommerce",
                "See 300+ integrations"
             ]
        }
    
    ]

        const stickBarChange = ()=>{
            // setChange(!change)
            setChange((pre)=> pre = true)
            setDynamicData("")
            setDynamicStatus((pre)=>pre = false)
        }
   
        const dynamicContent = (ind)=>{
        //    setChange((pre)=> pre = false)
          setDynamicStatus((pre)=>pre = true)
           let res = data2.filter((ele,index)=> index == ind)
           setDynamicData(res)
        }
        console.log(dynamicData)

    return(
        <>
        <div className="stickbar-container" id={!status ? "close" : "open"}>

        <div className="close-icon" > 

            <div className="back-btn" onClick={stickBarChange}><i class="bi bi-chevron-left"></i>back</div>
                  
                <i class="bi bi-x-lg" onClick={statusChange}></i>
                </div>

            <div className ="stickbar-sub" style={{display : change || dynamicStatus ? "none" : null}}>

                <div className="stick-item" onClick={stickBarChange} >
                   <div>Solutions and Services</div> 
                   <div><i class="bi bi-chevron-right"></i></div>
                </div>
                <div className="stick-item">
                <div>Resources</div> 
                <div ><i class="bi bi-chevron-right"></i></div>
                </div>
                <div className="stick-item">Switch to Mailchimp</div>
                <div className="stick-item">Pricing</div>
            </div>
            <div className ="stickbar-sub" style={{display :change || dynamicStatus ? "none" : null}}>
                <div id="stick-item">
                    <i className="bi bi-search"></i>
                    <p>Search</p>
                    </div>

                <div id="stick-item">
                  <i class="bi bi-globe-europe-africa"></i>
                    <p>English</p>
                    
                </div>
                <div id="stick-item">
                    <i class="bi bi-telephone"></i>
                    <p>Contact-sales :+1 (800)315-5959</p>
                </div>
               <div className="st-btns">
                <button className="stick-btn1">LogIn</button>
                <button  className="stick-btn2">Signup</button>
                </div>
            </div>
             
        <div className="stickbar-container2" style={{display : change && !dynamicStatus ? null : "none"}}>
           
           <div>
            
            { data.map((ele)=>{
                return(
                    <div>
                        <div className="stickbar-title">{ele?.title}</div>
                        { ele.subTitle.map((val)=>{
                            return(
                                <div >
                                  <div className="stickbar-subtitle">{val}</div>  
                                 </div>   
                            )
                        })}
                        {
                            ele.list.map((lt,index)=>{
                                return(
                                    <div className="stickbar-list" onClick={()=>dynamicContent(index)}>
                                        <div>{lt.name}</div>
                                        <div>{lt.symb}</div>
                                     </div>   
                                )
                            })
                        }
                    </div>
                )
            })}
           </div>
                
        </div> 

        <div className="stickbar-container3" style={{display : dynamicStatus ? null : "none"}}>

        <div>
            
            { dynamicData && dynamicData ?.map((ele)=>{
                return(
                    <div>
                        <div className="stickbar-title">{ele?.title}</div>
                        { ele.subTitle.map((val)=>{
                            return(
                                <div >
                                  <div className="stickbar-subtitle">{val}</div>  
                                 </div>   
                            )
                        })}
                       
                    </div>
                )
            })}
           </div>

        </div>
           
        </div>

        {/* <div className="stickbar-container2">

           <div>
            { data.map((ele)=>{
                return(
                    <div>
                        <div>{ele?.title}</div>
                        { ele.subTitle.map((val)=>{
                            return(
                                <div>
                                  <div>{val}</div>  
                                 </div>   
                            )
                        })}
                        {
                            ele.list((lt)=>{
                                return(
                                    <div>
                                        <div>{lt.name}</div>
                                        <div>{lt.symb}</div>
                                     </div>   
                                )
                            })
                        }
                    </div>
                )
            })}
           </div>
                
        </div> */}
    
       
        </>
    )
}
export default StickyBar;