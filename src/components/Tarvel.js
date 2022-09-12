import React from 'react'
/* import './Travel.css'; */

function Tarvel(props) {
  return (
      <div className='container'>                                             
      <div className='images'>                                                      
               <img src={`../images/${props.coverImg}`} alt='' /> 
        </div>
            <div className='container-2'>
                <div className='located'>
                        <i class="fa-solid fa-location-dot"></i>
                <p>{props.location}</p>
                </div>
                <h1>{props.title}</h1>
                <div className='dates'><p>{props.startDate} - {props.endDate}</p></div>
                <p>{props.description}</p>
            </div>
         

    </div>
  )
}

export default Tarvel