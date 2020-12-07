import React from 'react';

function TableBody({ picture, name, title, location, isActive }) {
	return (
		<tbody>
			<tr>
				<td>
					<img src={picture.thumbnail} alt='person' />
				</td>
				<td>{name}</td>
				<td>{title}</td>
				<td>{location}</td>
				<td>{isActive ? 'Available' : 'Out of Office'}</td>
				{/* <td><button type="submit">+</button></td> */}
			</tr>
		</tbody>
	);
}

export default TableBody;
