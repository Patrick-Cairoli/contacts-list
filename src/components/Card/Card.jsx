import React from 'react'


const Card = ({name, picture, email, phone, id, location,  SetSelectedUser }) => {

  const handleSelectedUserID = (id) => {
    SetSelectedUser(id)
  }

  return (
    <div className="card mb-2 pb-3 bg-dark text-info border border-warning px-3">
      <div className="card-header title">{name}</div>
      <img src={picture} className="card-img-top rounded mx-auto " alt={name} />
      <div className="card-body">
        <h5 className="card-title text-warning"><i className="fa-solid fa-location-dot"></i> {location}</h5>
      </div>
      <ul className="list-group list-group-flush bg-dark border-0 mb-2 ">
        <li className="list-group-item bg-dark fs-6 small text-light"> <i className="fa-solid fa-envelope"></i> {email}</li>
        <li className="list-group-item bg-dark text-light"> <i className="fa-solid fa-square-phone-flip"></i> {phone}</li>
      </ul>
      <button type="button" className="btn btn-outline-info text-white mx-2" onClick={() => handleSelectedUserID(id)}>View Details</button>
    </div>
  )
}

export default Card
