import "./contact.css" 
import React from "react"

function Contact (){
return (
    <div className="contact">
    <h1 className="heading text-center" >Contact Us!</h1>
    <form className="col-sm-8 center">
    <div className="row">
  <div className="col">
  <label htmlFor="firstName">First name</label>
    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
  </div>

  <div className="col">
  <label htmlFor="lastName">Last name</label>
    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
  </div>
    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />   
    </div>

    <div className="form-group mb-2">
    <label htmlFor="exampleFormControlTextarea1">Comment below: </label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <div className="d-grid gap-5 col-8 mx-auto">
  <button type="button" className="btn btn-primary">Submit</button>
  </div>
  

</div>
</form>    
</div>
)
}

export default Contact
