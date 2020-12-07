import React from 'react';
import TableHead from '../TableHead';
import TableBody from '../TableBody';
import './Table.css';

function Table({ data }) {
	// 	data.sort((a, b) => {
	// 		if (a.name > b.name) return 1;
	// 		if (a.name < b.name) return -1;
	// 		return 0;
	// 	});

	return (
		<section className='employees'>
			<table>
				<TableHead />
				<tbody>
					{data.map(person => {
						return <TableBody key={person._id} {...person} data={data} />;
					})}
				</tbody>
			</table>
		</section>
	);
}

export default Table;
