import React from 'react'
// import './card.css'

const Card = ({name, picture, gender}) => {
  picture && console.log(picture)
  return (
<div className="card">
  <img src={picture} className="card-img-top" alt={name} />
  <div className="card-body">
    <h5 className="card-title">{name} {gender}</h5>
    <p className="card-text">address</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">userName</li>
    <li className="list-group-item">email</li>
    <li className="list-group-item">phone</li>
  </ul>
</div>
  )
}

export default Card
