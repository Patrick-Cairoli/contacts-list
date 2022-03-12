import React from 'react';

const Table = ({ tableData, selectedUser }) => {
  
	const filtered = tableData?.find((el) => el.id === selectedUser);

	// const { userName, password, name, gender, email, phone } = filtered;

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
						<th scope="row">{filtered?.name}</th>
						<td>
							{filtered?.gender === 'male' ? (
								<i className="fa-solid fa-mars text-info"></i>
							) : (<i className="fa-solid fa-venus text-danger"></i>
							)}
						</td>
						<td>{filtered?.email}</td>
						<td>{filtered?.phone}</td>
						<td>{filtered?.userName}</td>
						<td>{filtered?.password}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Table;
