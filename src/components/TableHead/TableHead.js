import React from 'react';
import './TableHead.css';

function TableHead() {
	return (
		<thead>
			<tr className='tableHeader'>
				<th />
				<th>Name</th>
				<th>Title</th>
				<th>Location</th>
				<th>Availability</th>
				<th />
			</tr>
		</thead>
	);
}

export default TableHead;
