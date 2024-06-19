import Logo from "../../assets/Logo.png"
import DropDown from "../DropDown/DropDown"
import DropDownTwo from "../DropDown/DropDownTwo"
import "../Navbar/Navbar.css"
import {useEffect, useState} from "react"
import StickyBar from "./StickyBar"

function Navbar(){

    const[state,setState] = useState(false)
    const[state2,setState2] = useState(false)
    const [status,setStatus] = useState(false)

    
        const stateChange = ()=>{
            setState(!state)
            setState2((prevState2)=> prevState2= false)
        }
   
        const stateChange2 = ()=>{
            setState2(!state2)
            setState((prevState)=> prevState= false)
        }

        const stickBar = ()=>{
            setStatus(!status)
            
        }
   

    return(
        <>
        <div className="Navbar-container">

            <div className ="Navbar-sub">

                <div><img src={Logo} className="logo"/></div>
                <div id="nav-item">
                   <div>Solutions and Services</div> 
                    <div onClick={stateChange}>{state ? <i class="bi bi-chevron-up"></i> : <i class="bi bi-chevron-down"></i>  }</div>
                </div>
                <div id="nav-item">
                <div>Resources</div> 
                <div onClick={stateChange2}>{state2 ? <i class="bi bi-chevron-up"></i> : <i class="bi bi-chevron-down"></i>  }</div>
                </div>
                <div id="nav-item">Switch to Mailchimp</div>
                <div id="nav-item">Pricing</div>
            </div>
            <div className ="Navbar-sub">
                <div id="nav-item"><i className="bi bi-search"></i></div>

                <div className="Nav-item">
                    <i class="bi bi-globe-americas"></i>
                    <p>EN</p>
                    
                </div>
                <div id="nav-item">Sales :+1 (800)315-5959</div>
                <div className="nav-child">Pricing</div>
                <button className="nav-btn1">LogIn</button>
                <button  className="nav-btn2">Signup</button>
                <div onClick={stickBar}><i class="bi bi-list"></i></div>
            </div>
        </div>
        <div className={state ? "dropOpen" : "dropClose"}>
        <DropDown/>
        </div>
        <div className={state2 ? "drop2Open" : "drop2Close"}>
            <DropDownTwo/>
        </div>
        <div className={status ? "stickyOpen" : "stickyClose"}>
         <StickyBar/>
        </div>
        </>
    )
}
export default Navbar