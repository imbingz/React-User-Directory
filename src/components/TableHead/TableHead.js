import React from 'react';
import './TableHead.css';

function TableHead({ cols }) {
	return (
		<thead>
			<tr className='tableHeader'>{cols.map((col, i) => <th key={i}>{col.colName}</th>)}</tr>
		</thead>
	);
}

export default TableHead;
