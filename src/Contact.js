import React from 'react'

function Contact(props) {
  return (
    <div className='card'>
            <h1>{props.name}</h1>
            <p>{props.phone}</p>
            <h3>{props.email}</h3>
    </div>
  )
}

export default Contact