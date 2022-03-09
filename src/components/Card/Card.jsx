import React from 'react'
// import './card.css'

const Card = ({name, picture, email, phone}) => {
  return (
    <div className="card mb-2 pb-3 bg-dark text-info border border-warning">
      <img src={picture} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title text-uppercase text-warning lead">{name}</h5>
      </div>
      <ul className="list-group list-group-flush bg-dark border-0 mb-2">
        <li className="list-group-item bg-dark text-info"> <i className="fa-solid fa-envelope"></i> {email}</li>
        <li className="list-group-item bg-dark text-info"> <i className="fa-solid fa-square-phone-flip"></i> {phone}</li>
      </ul>
      <button type="button" className="btn btn-outline-secondary mx-2">View Details</button>
    </div>
  )
}

export default Card
