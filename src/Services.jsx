import React from 'react'
import Card from './Card'
import data from './Data'
function Services() {
  return (
  <>
   <div className=''>
    <h1 className="text-center">
      Our Services
    </h1>
  </div>
  <div className='container-fluid nav_bg'>
      <div className="row">
          <div className='col-10 mx-auto'>
              <div className="row gy-4 mb-4">
              {
      data.map((item,index)=>{
       return <Card
       image={item.image}
       title={item.title}
       key={index}
       />
    })
    }
              </div>
              </div>
              </div>
    
    </div>
  </>
  )
}

export default Services