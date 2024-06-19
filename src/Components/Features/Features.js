import feature1 from "../../assets/feature1.PNG"
import feature2 from "../../assets/feature2.PNG"
import feature3 from "../../assets/feature3.PNG"
import feature4 from "../../assets/feature4.PNG"
import "../Features/Features.css"

function Features(){

    // const images = [
    //     feature1,feature2,feature3,feature4
    // ]

    const details = [
        {
            "title" : "Convert with email automations",
            "image" : feature1,
             "desc"  : "Boost orders and customer lifetime value by dynamically personalizing emails based on browsing and purchase data.",
            "content" : "Explore marketing automation",
             "color" : "#e09304",
             "symbol": <i class="bi bi-pc-display-horizontal"></i>
        },

        {
            "title" : "Create faster generative AI",
            "image" : feature2,
             "desc"  : "Effortlessly create on-brand content with generative AI tools and choose from expertly designed templates.",
             "content" : "Explore analytics & reporting",
             "color" : "#f0f8ff",
             "symbol": <i class="bi bi-vector-pen"></i>
        },
        {
            "title" : "Refine with segmentation",
            "image" : feature3,
             "desc"  : "Target customers with advanced logic like spend amounts, buying behavior, and predicted attributes.",
             "content" : "Explore AI tools",
             "color" : "#f7c05b",
             "symbol": <i class="bi bi-back"></i>
        },
        {
            "title" : "Optimize with analytic & reporting",
            "image" : feature4,
             "desc"  : "Analyze performance with custom reports, funnel visualizations, and industry benchmarking.",
             "content" : "Explore audience management",
             "color" : "#eedfc4",
             "symbol": <i class="bi bi-reception-3"></i>
        },
    ]

     return(
        <div className="feature-container">

            {
                details.map((ele)=>{
                    return(
                        <div className="img-group" style={{backgroundColor : ele.color}}>
                          <div className="feature-symble">{ele.symbol}</div>
                          <img className="feature-img" src={ele.image}/>
                          <h4>{ele.title}</h4>
                          <div className="feature-sub">
                          <p>{ele.desc}</p> 
                          <button>{ele.content}</button>
                          </div>
                          </div>
                    )
                })
            }

        </div>
     )
}
export default Features;