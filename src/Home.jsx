import React from 'react'
import './index.css'
function Home() {
  return (
    <>
    <section id='header' className='d-flex align-items-center mt-5 pt-5'>
        <div className='container-fluid nav_bg'>
            <div className="row">
                <div className='col-10 mx-auto'>
                    <div className="row">
                    <div className='col-md-6 pt-5 mt-5 order-2 order-lg-1'>
                    <h1>Grow your business 
                        with <strong className='text-danger'>Mercury</strong></h1>
                    <h2>
                        We are the team of talented developer.
                    </h2>
                    <div className='mt-5 button'>
                        <a href="" className='btn-get-started'>Get start</a>
                    </div>
                </div>
                <div className='col-lg-6 mt-5 order-1 order-lg-2 header-img animated'>
            <img src={"https://imgs.search.brave.com/uGBeRwzhbiOphYDvGkQnCQYYApKyDw1OrDHAZ44cF9Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9naWZk/Yi5jb20vaW1hZ2Vz/L2hpZ2gvYW5pbWF0/ZWQtbWFuLWNvbXB1/dGVyLWNvZGluZy1u/YWU2bWVjMzc4bHNn/MWkzLmdpZg.gif"} alt="" />
        </div>
        </div>
            </div>

        </div>
        </div>
      
    </section>
    </>
  )
}

export default Home