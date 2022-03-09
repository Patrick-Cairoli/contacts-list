import React from 'react'

const Table = ( {tableData, selectedUser} ) => {

  const filtered = tableData?.find(el => el.id === selectedUser)

  const {id, userName, password, name, gender, email, phone, picture } = filtered;

  return (
    <div className="table-container">
      <table className="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">User Name</th>
      <th scope="col">Password</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{name}</th>
      <td>{gender === "male" ? (<i className="fa-solid fa-mars"></i>) : (<i className="fa-solid fa-venus"></i>)}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{userName}</td>
      <td>{password}</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Table