import React from 'react'
// import './card.css'

const Card = ({name, picture, gender, id, email, phone}) => {
  return (
<div className="card">
  <img src={picture} className="card-img-top" alt={name} />
  <div className="card-body">
    <h5 className="card-title">{name} {gender}</h5>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">email: {email}</li>
    <li className="list-group-item">Phone: {phone}</li>
  </ul>
</div>
  )
}

export default Card
