import React from 'react';
import { data } from '../../data';
import TableHead from '../TableHead';
import TableBody from '../TableBody';

function Table() {
	return (
		<section class='employees'>
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
