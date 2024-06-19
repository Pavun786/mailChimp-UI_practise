import onboarding from "../../assets/onboard.PNG"
import "../Onboarding/Onboarding.css"
  
  
  function Onboarding(){


       return(

          <div className="onboard-container">

            <div className="onboard-sub1">
                <div>Get started easily with a personalized product tour</div>
                <div>An onboarding specialist is here to help you get started with confidence—it’s included with Standard and Premium plans.*</div>
                <div>Learn more about onboarding</div>
            </div>
            <div className="onboard-sub2">
              <img src={onboarding} className="onboard-img"/>
            </div>
          </div>
       )
  }
  export default Onboarding;