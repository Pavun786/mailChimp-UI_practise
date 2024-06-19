import "../DropDown/DropDown.css"

function DropDownTwo(){

    const datas = [
        {
            "title" : "LEARN WITH MAILCHIMP",
            "sub" : [
                "E-commerce",
                "Digital content",
                "Marketing automations",
                "Audience management",
                "Websites",
                "Email marketing",
                "Social media"
            ]
        },
        {
            "title" : "MAILCHIMP PRESENTS",
            "sub"  : [
                 "Podcasts",
                 "Series",
                 "Films"
            ]
        },
        {
            "title" : "FOR DEVELOPERS",
            "sub"  : [
                 "Marketing API",
                 "Transactional API",
                 "Release notes",
                 "Transactional email"
            ]
        }
    ]

    const datas2=[
    {
        "icon" :  <i class="bi bi-chat-left-dots"></i>,
         "title" : "Help Center"
    },
    {
        "icon" :  <i class="bi bi-star-fill"></i>,
         "title" : "Case studies"
    },
    {
        "icon" :   <i class="bi bi-calendar-event"></i>,
         "title" : "Events"
    },
]

const datas3 = [
    {
    "heading" : "PROFESSIONAL SERVICES",
    "sub"    : [
         "Hire an Expert",
         "Personalized onboarding",
         "Customer success"
    ]
}
]
       
    

    return(
        <div className="drop-container">

        <div className="drop-container1">
          <div className="drop-sub">
                <p className="title">Resources</p>
                <div className="drop-subChild">
                    <p>See all resources</p>
                    <i className="bi bi-arrow-right-circle"></i>
                </div>
            </div>
         <div className="drop-subTwo">
           {
             datas.map((ele)=>{
                 return(
                    <div>
                     <div className="drop-title">{ele.title}</div>
                     {ele.sub.map((lt)=>{
                        return(
                            <div className="lt">{lt}</div>
                        )
                     })}
                    </div>
                 )
             })
           }
         </div>

        </div>
       
       
        <div className="drop-container2">
         <div> 
         {datas2.map((ele)=>{
               return(
                <div className="drop-subThird">
                    <div>{ele.icon}</div>
                    <div>{ele.title}</div>
                </div>    
               )
           })}
        </div> 
        <div >
           { datas3.map((ele)=>{
             return(
                <div className="drop-subFour">
                 <div>{ele.heading}</div>
                 {ele.sub.map((val)=>{
                    return(
                        <div >{val}</div>
                    )
                 })}
                </div>
             )
           })}
        </div>
        </div> 
     </div>
    )
}

export default DropDownTwo;