import "../DropDown/DropDown.css"
import logo1 from "../../assets/drop-logo1.png"
import logo2 from "../../assets/drop-logo2.png"
import logo3 from "../../assets/drop-logo3.png"
import logo4 from "../../assets/drop-logo4.jpg"
import logo5 from "../../assets/drop-logo5.png"

 function DropDown(){

    const data = [

        {
            "icon" :<i class="bi bi-envelope"></i>,
            "title" : "E-Mail Marketing",
            "detail" : "Send personalized emails that convert"
        },
        {
            "icon" : <i class="bi bi-airplane"></i>,
            "title" : "Marketing Automation",
            "detail" : "Deliver the right message at right time"
        },
        {
            "icon" :<i class="bi bi-globe"></i>,
            "title" : "Websites",
            "detail" : "Create your branded websites"
        },
        {
            "icon" :<i class="bi bi-marker-tip"></i>,
            "title" : "AI Marketing Tools",
            "detail" : "Say Hello to your AI growth-assistant "
        },
        {
            "icon" :<i class="bi bi-bar-chart-line-fill"></i>,
            "title" : "Reporting & analysis",
            "detail" : "Track sales and performance"
        },
        {
            "icon" :<i class="bi bi-vector-pen"></i>,
            "title" : "Content creation Tools",
            "detail" : "Track sales and performance"
        },
        {
            "icon" :<i class="bi bi-hand-thumbs-up-fill"></i>,
            "title" : "Social Media Marketing",
            "detail" : "Amplify the conversation across the channels"
        },
        {
            "icon" : <i class="bi bi-people-fill"></i>,
            "title" : "Audience Management",
            "detail" : "Target on cutomer "
        },
        {
            "icon" :<i class="bi bi-x-diamond-fill"></i>,
            "title" : "See All Features",
            "detail" : "See all product offering in one place"
        },
        {
            "icon" :<i class="bi bi-box"></i>,
            "title" : "Templates",
            "detail" : "Customized and predefined layouts"
        },

    ]

    const data2=[
        {
            "image" : logo1,
            "title" : "Shopsify"
        },
        {
            "image" : logo2,
            "title" : "Wix"
        },
        {
            "image" : logo3,
            "title" : "Sales force"
        },
        {
            "image" : logo4,
            "title" : "Canva"
        },
        {
            "image" : logo5,
            "title" : "Woo commerce"
        }
    ]

    const data3=[
        "E-commerce and retail",
        "Service-based Business",
        "Mobile and web apps",
        "Start-ups",
        "Agencies and freelancers",
        "Developers"
    ]

    const data4=[
        "Hire an Expert",
        "Personalized onboarding",
        "Customer success",
    ]

     return(

        <div className="drop-container">

            <div className="drop-container1">

            <div className="drop-sub">
                <p className="title">Solutions and Services</p>
                <div className="drop-subChild">
                    <p>See what's new </p>
                    <i className="bi bi-arrow-right-circle"></i>
                </div>
            </div>
           
            <div className="drop-sub2">

              { data.map((ele)=>{
                 return(
                    <div className="map-child">

                        <div className="map-icon">{ele.icon}</div>
                        <div className="map-subchild">
                        <div>{ele.title}</div>
                        <div className="map-des">{ele.detail}</div>
                        </div>
                    </div>    
                 )
              })}  

            </div>

            <div className="drop-sub3">
             <div className="sub-items">
                <div>Integarate your apps</div>
                <p>see 300+ integaration</p>
             </div>
            <div className="sub-items2">
                {data2?.map((ele)=>{
                    return(
                        <div >
                        <img src={ele?.image} className="drop-image"/>
                        <p className="drop-title">{ele?.title}</p>
                    </div>
                    )
                })}
            </div>


            </div>
            </div>
            
            <div className="drop-container2">
              <div>
                <div className="heading">FOR YOUR INDUSTRY</div>
                {data3.map((ele)=>{
                    return(
                        <div className="heading-list">
                         {ele}
                        </div>    
                    )
                })}
              </div>
              <div>
                <div  className="heading">PROFESSIONAL SERVICES</div>
                {
                    data4.map((ele)=>{
                        return(
                            <div className="heading-list">
                            {ele}
                            </div>
                        )
                    })
                }

              </div>
            </div>
        </div>
     )
 }
 export default DropDown;