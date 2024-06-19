import shopfy from "../../assets/drop-logo1.png"
import salesForce from "../../assets/drop-logo3.png"
import canva from "../../assets/drop-logo4.jpg"
import commerce from "../../assets/drop-logo5.png"
import qb from "../../assets/quickbox.png"
import square from "../../assets/squarespace.png"
import zapier from "../../assets/zapier.png"
import insta from "../../assets/insta.jpg"
import google from "../../assets/google.png"
import "../Integration/Integration.css"


function Integration(){

    const data =[
        {
            "imgae" : canva,
            "title" : "Canva",
             "desc" : "Create compelling visuals for your marketing" 
        },
       
        {
            "imgae" : salesForce,
            "title" : "Mailchimp for Salesforce",
             "desc" : "Sync your Mailchimp subscribers and Salesforce® leads across platforms." 
        },
        {
            "imgae" : insta,
            "title" : "Instagram",
             "desc" : "Promote and share your Instagram posts in email campaigns." 
        },
        {
            "imgae" : shopfy,
            "title" : "Shopify",
             "desc" : "Sync Shopify customers, products, and purchase data to Mailchimp." 
        },
        {
            "imgae" : google ,
            "title" : "Google Analytics",
             "desc" : "Unlock powerful insights with campaign, website, or landing page data." 
        },
        {
            "imgae" : commerce,
            "title" : "WooCommerce",
             "desc" : "Power your ecommerce store with smart marketing features." 
        },
        {
            "imgae" : qb,
            "title" : "QuickBooks Online",
            "desc" : "Bring together your marketing tools and invoice data.",
        },
        {
            "imgae" : square,
            "title" : "Squarespace Commerce",
             "desc" : "Market your ecommerce business and drive sales." 
        },
        {
            "imgae" : zapier,
            "title" : "Zapier",
             "desc" : "Automatically pass data between web services without a single line of code." 
        },
    ]

     return(
        <div>
            <div className="inte-heading">Bring in more data, drive more growth with our integrations</div>
            <div className="integ-container">
             {
                data.map((ele)=>{
                    return(
                        <div className="map-inte">
                            <div >
                            <img className="inte-img" src={ele.imgae}/>
                            </div>
                            <div className="inte-sub">
                                <div>{ele.title}</div>
                                <div >{ele.desc}</div>
                            </div>
                        </div>
                    )
                })
             }
            </div>
            
        </div>
     )
}
export default Integration;