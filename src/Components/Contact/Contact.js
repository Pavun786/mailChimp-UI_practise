import logoImage from "../../assets/Logo.png"
import "../Contact/Contact.css";

function Contact(){

    const links =[
        "Related Links:",
        "What is SEO?",
        "Make Money Online",
        "ChatGPT: What to Know About This AI Content Writing Tool"
    ]

   const lists = [
     {
        "title" : "Products",
        "list" : [
            "Why Mailchimp?",
             "Product Updates",
             "Email Marketing",
             "Websites",
             "Transactional Email",
             "How We Compare",
             "How We Compare"
        ]
     },
     {
        "title" : "Resources",
        "list" : [
           "Marketing Library",
           "Free Marketing Tools",
           "Marketing Glossary",
           "Integrations Directory"
        ]
     },
     {
        "title" : "Community",
        "list" : [
           "Agencies & Freelancers",
           "Developers",
           "Events",
           "Integrations Directory"
        ]
     },
     {
        "title" : "Company",
        "list" : [
           "Our Story",
           "Newsroom",
           "Give Where You Live",
           "Careers"
        ]
     },
     {
        "title" : "Help",
        "list" : [
           "Contact Us",
           "Hire an Expert",
           "Help Center",
           "Talk to Sales"
        ]
     },
     {
        "title" : "logoImage",
        "list" : [
           "Films, podcasts, and original series that celebrate the entrepreneurial spirit."
        ]
     },
   ]

    return(
        <div className="contact-container">
         <div className="contact-sub1">
         {links.map((ele)=>{
            return(
               <div className="sub1-child">
                  <div>{ele}</div>
               </div>
            )
         })}
         </div>
         <hr/>
         <div className="contact-sub2">
            {lists.map((ele)=>{
               return(
                  <div className="sub2-child">
                     <div className="sub2-heading">{ele.title}</div>
                     {ele.list.map((ele)=>{
                        return(
                           <div className="sub2-sublist">
                              <div>{ele}</div>
                           </div>
                        )
                     })}
                  </div>
               )
            })}
         </div>
        </div>
    )
}
export default Contact;