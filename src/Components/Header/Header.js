import "../Header/Header.css"

 function Header(){


     return(
        <>
        <div className="header-container">

            <h1 className="header-heading">Turn Emails into Revenue</h1>
            <p>Win new customers with 
                the #1 email marketing and automations platform* that 
                recommends ways to get more opens, clicks, and sales.
            </p>
            <button className="header-btn">Signup</button>


        </div>
        <div className ="goals">

            <div>What are your goals?</div>
            <button><i class="bi bi-cart-check"></i>See more products</button>
            <button> <i class="bi bi-person-fill-add"></i>Win more leads</button>
            <p>Get to know the features that matter to businesses like yours.</p>

        </div>
        </>
     )
 }
 export default Header;