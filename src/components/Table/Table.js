import React from 'react';
import TableHead from '../TableHead';
import TableBody from '../TableBody';

function Table() {
	return (
		<section class='employees'>
			<table>
				<TableHead />
				<TableBody />
			</table>
		</section>
	);
}

export default Table;
