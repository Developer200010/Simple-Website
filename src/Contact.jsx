import React from 'react'

function Contact() {
  return (
    <>
    <div className='my-5'>
      <h1 className="text-center">
        Contact Us
      </h1>
    </div>

    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form action="">
          <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Full Name :</label>
  
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email :</label>
  
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email "/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Query :</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
          </form>
        </div>
      </div>
    </div>
    </>
   
  )
}

export default Contact