import React from 'react';
import TableHead from '../TableHead';
import TableBody from '../TableBody';
import './Table.css';

function Table({ data }) {
	//set table column header's contents
	const cols = [
		{ colName: '' },
		{ colName: 'Name' },
		{ colName: 'Title' },
		{ colName: 'Location' },
		{ colName: 'Availability' },
		{ colName: '' }
	];

	return (
		<section className='employees'>
			<table>
				<TableHead cols={cols} />
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
