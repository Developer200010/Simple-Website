import React from 'react'

function Common() {
  return (
   <>
   <section id='header' className='d-flex align-items-center mt-5 pt-5'>
        <div className='container-fluid nav_bg'>
            <div className="row">
                <div className='col-10 mx-auto'>
                    <div className="row">
                    <div className='col-md-6 pt-5 mt-5 order-2 order-lg-1'>
                    <h1>Related details of who we are and
                          <strong className='text-danger'> Mercury</strong></h1>
                    <h2 className='mt-4'>
                        We are the team of talented developer.
                    </h2>
                    <div className='mt-5 button'>
                        <a href="" className='btn-get-started'>Contact Us</a>
                    </div>
                </div>
                <div className='col-lg-6 mt-5 order-1 order-lg-2 header-img animated'>
            <img src={"https://imgs.search.brave.com/858OGY8elGAvuJnaKAWukeb7AVHF97tDf2FF0BiAASE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzI0MDEx/NDEvc2NyZWVuc2hv/dHMvNTQ4Nzk4Mi9t/ZWRpYS8wZWQyOGI3/MzRhNDJkMDZhOTZj/YzU3ZjVkNDc4NjI1/Yy5naWY_cmVzaXpl/PTQwMHgzMDAmdmVy/dGljYWw9Y2VudGVy.gif"} alt="" />
        </div>
        </div>
        </div>

        </div>
        </div>
      
    </section>
   </>
  )
}

export default Common