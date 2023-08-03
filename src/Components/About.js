import React, {useState} from "react"
export default function About(props) 
{
    


    const [btnText,setBtnText]=useState("Enable Dark Mode")
     
    
    
    return(
        
        <div className="container my-4" style={{backgroundColor:props.mode==="light"?"white":"#100e31" , color: props.mode==="light"?"black":"white"}}>
        <h1>About Us</h1>

        <div className="accordion-body" style={{backgroundColor:props.mode==="light"?"white":"#100e31" , color: props.mode==="light"?"black":"white", border:"1px solid white"}}>
        
      Welcome to Tet Utils, a state-of-the-art React-based web application meticulously designed to revolutionize
         the way you approach tasks and productivity. Tet Utils empowers users with a seamless, intuitive interface that 
         simplifies task management and optimizes efficiency like never before.
        Stay on top of your to-do list effortlessly as Tet Utils allows you to create, edit, and prioritize tasks with unmatched ease. 
        Say goodbye to the chaos of scattered tasks and embrace the art of organization with our user-friendly design.
        Unlock your true potential with our time tracking and analytics feature. Gain valuable insights into your productivity patterns, 
        making informed decisions to enhance your workflow. Text Utils ensures that every second counts towards your success.
      </div>
        {/* <div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={{backgroundColor:props.mode==="light"?"white":"#100e31" , color: props.mode==="light"?"black":"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==="light"?"white":"#100e31" , color: props.mode==="light"?"black":"white"}}>
        
      <p>Welcome to Tet Utils, a state-of-the-art React-based web application meticulously designed to revolutionize
         the way you approach tasks and productivity. Tet Utils empowers users with a seamless, intuitive interface that 
         simplifies task management and optimizes efficiency like never before.
        Stay on top of your to-do list effortlessly as Tet Utils allows you to create, edit, and prioritize tasks with unmatched ease. 
        Say goodbye to the chaos of scattered tasks and embrace the art of organization with our user-friendly design.
        Unlock your true potential with our time tracking and analytics feature. Gain valuable insights into your productivity patterns, 
        making informed decisions to enhance your workflow. Text Utils ensures that every second counts towards your success.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor:props.mode==="light"?"white":"#100e31" , color: props.mode==="light"?"black":"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==="light"?"white":"#100e31" , color: props.mode==="light"?"black":"white"}}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor:props.mode==="light"?"white":"#100e31" , color: props.mode==="light"?"black":"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==="light"?"white":"#100e31" , color: props.mode==="light"?"black":"white"}}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div> */}
{/* </div> */}
{/* <button type= "button"className="btn btn-primary my-2" onClick={toggleBtn}>{btnText}</button>  */}
</div>

    )
}