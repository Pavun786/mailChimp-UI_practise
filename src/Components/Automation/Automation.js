import React, { useRef, useEffect, useState, Component } from 'react';
import "../Automation/Automation.css"
import automate1 from "../../assets/automation1.PNG"
import automate2 from "../../assets/automation2.PNG"
import automate3 from "../../assets/automation3.PNG"


function Automation(){

    const data = [
        {
            "image" :automate1,
            "title" : "Convert more customers at scale",
            "desc" : "Drive more traffic and sales by setting up automations that trigger emails based on customer behavior with our Customer Journey Builder."
        },
        {
            "image" : automate2,
            "title" : "Discover new ways to automate",
            "desc" : "Get a head start with pre-built journeys that help you cross-sell your products, recover abandoned carts, re-engage existing customers, and win new ones."
        },
        {
            "image" : automate3,
            "title" : "Keep your emails relevant and your brand growing",
            "desc" : "Deliver personalized emails based on their buying behavior, survey responses, chat interactions, and support tickets to promote loyalty and growth."
        },
       
    ]

   
     return(

       <div className='auto-container'>
        <div className='auto-heading'>Generate up to 7x more orders* with Customer Journey Builder automations</div>
        <div className='auto-sub'>
            { data.map((ele)=>{
                return(
                    <div className='auto-map'>
                        <img src={ele.image} className="auto-img"/>
                        <div className='auto-nest'>
                        <div className='auto-title'>{ele.title}</div>
                        <div className='auto-desc'>{ele.desc}</div>
                        </div>
                    </div>
                )
            })}
        </div>
       </div>
     )
}

export default Automation;