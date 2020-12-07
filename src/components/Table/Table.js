import React from 'react';
// import { data } from '../../data';
import TableHead from '../TableHead';
import TableBody from '../TableBody';

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
				{data.map(person => {
					return <TableBody key={person._id} {...person} />;
				})}
			</table>
		</section>
	);
}

export default Table;
