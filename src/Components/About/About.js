import "../About/About.css"


 function About(){

    const data = [
        {
            "title" : "Find out why we’re best-in-class",
             "desc"  : "The #1 email marketing and automations platform* that recommends ways to get more opens, clicks, and sales."
        },
        {
            "title" : "Up to 25x ROI",
             "desc"  : "seen by Mailchimp users*"
        },
        {
            "title" : "22 years experience",
             "desc"  : "helping businesses sell more"
        },
        {
            "title" : "11M+ Users",
             "desc"  : "of Mailchimp globally"
        },
        {
            "title" : "$1.7K per campaign",
             "desc"  : "generated on average*"
        }
    ]


      return(
        <div className="data-container">
          { data.map((ele)=>{
             return(
                
                <div className="about-map">
                   
                   <div className="about-title">{ele.title}</div> 
                   <div>{ele.desc}</div>
                
                </div>
             )
          })}
        </div>
      )
 }

 export default About;