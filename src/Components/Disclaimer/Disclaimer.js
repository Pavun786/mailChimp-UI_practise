import "../Disclaimer/Disclaimer.css"

function Disclaimer(){

    const points =[
        {
            "title" : "AI-powered email marketing platform:",
            "detail" : "Based on December 2023 publicly available data on the number of customers of competitors that also advertise using AI to enhance their email marketing and automation products and services."
        },
        {
            "title" : "email marketing and automation platform:",
            "detail" : "Mailchimp is the #1 email marketing and automation platform based on December 2023 publicly available data on competitors' number of customers."
        },
        {
            "title" : "SMS Marketing",
            "detail" : "SMS is available as an add-on to US or UK paid plans only. Application and agreement to terms is required before purchasing credits. Messages can only be delivered to contacts in the country selected. SMS credits are added to your account after purchase and approval. Credits are issued monthly and unused credits expire and do not roll over. MMS only available when sending to US contacts with US Standard and Premium plans. Pricing varies. See terms for details."
        },
        {
            "title" : "Intuit Assist",
            "detail" : "Intuit Assist functionality (beta) is available to certain users with Premium, Standard and Legacy plans in select countries in English only. Access to Intuit Assist is available at no additional cost at this time. Pricing, terms, conditions, special features and service options are subject to change without notice. Availability of features and functionality varies by plan type. Features may be broadly available soon but represents no obligation and should not be relied on in making a purchasing decision. For details, please view Mailchimp’s various plans and pricing."
        },
        {
            "title" : "Personalized onboarding:",
            "detail" : "Onboarding services differ per plan and are available for new or upgraded users with a Standard or Premium plan for the first 90 days after account creation or upgrade. Onboarding services are currently offered in English, Spanish and Portuguese for Premium plans, and in English for Standard plans."
        }
    ]

    return(
        <div className="disclaimer-container">
          <div>*Disclaimers</div>
         {
            points.map((ele ,index)=>{
                return(
                    <div className="dis-map" key={index}>
                        <span><span>{index+1+"."}</span>{" "}{ele.title}</span>
                        <span>{ele.detail}</span>
                    </div>
                )
            })
         }

        </div>
    )
 }

 export default Disclaimer;