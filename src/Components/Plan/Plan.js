import "../Plan/Plan.css"

 function Plan(){

     return(
        <div className="plan-container">
          <div className="plan-sub1">

            <div className="plan-heading">Try our Standard plan for 50% off!</div>
            <div className="plan-desc">Spend less to grow more with 50% off for 12 months, even if you change to our Premium or Essentials plans. 
                Cancel or downgrade to our basic Free plan at any time.</div>
            <div className="plan-subChild">
                <div >
                <div className="plan-nested">Generative AI features</div>
                <div className="plan-nested">Advanced segmentation & reporting</div>
                <div className="plan-nested">Enhanced automations</div>
                </div>
                <div>
                <div className="plan-nested">Custom-coded email templates</div>
                <div className="plan-nested">Data-driven optimization tools</div>
                <div className="plan-nested">Personalized onboarding</div>
                </div>
            </div>    

            <div className="plans">See all planes</div>
          </div>
          <div className="plan-sub2">
            <div>
            <div className="plan-subhead">Standard</div>
            <p>Send up to 6,000 emails each month</p>
            <input className="plan-input" value="Contacts" />
            </div>
           
           <div className="plan-lt">
           <div>Starts at</div>
           <div><span><del>₹1150</del></span><span>₹575 for 12 months</span></div>
           <div>Then, starts at ₹1,150 /month</div>
           <button className="plan-btn">Buy Now</button>
           </div>
           <div className="plan-foot">*SeeOffer Terms Overages apply if contact or email send limit is exceeded. Learn more</div>
          </div>
        </div>
     )
 }

 export default Plan;