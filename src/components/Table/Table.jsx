import React from 'react'


const Table = ( {tableData} ) => {
  const {id, userName, password, name, gender, email, phone } = tableData[0];

  // const [selectedUser, SetSelectedUser] = useState({})

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
      <td>{gender}</td>
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