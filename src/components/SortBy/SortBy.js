import React from 'react';
import './SortBy.css';

function SortBy({ sortValue, handleSortValueChange }) {
	return (
		<section className='sort'>
			<form className='sortForm'>
				<label htmlFor='sortBy'>Sort By: </label>
				<select name='sortBy' value={sortValue} onChange={handleSortValueChange} id='sortBy'>
					<option value='' disabled hidden>
						Choose One
					</option>
					<option value='First Name:(A-Z)'>First Name:(A-Z)</option>
					<option value='First Name:(Z-A)'>First Name:(Z-A)</option>
					<option value='Title:(A-Z)'>Title:(A-Z)</option>
					<option value='Title:(Z-A)'>Title:(Z-A)</option>
					<option value='Location:(A-Z)'>Location:(A-Z)</option>
					<option value='Location:(Z-A)'>Location:(Z-A)</option>
					<option value='Availability:(A-Z)'>Availability:(A-Z)</option>
					<option value='Availability:(Z-A)'>Availability:(Z-A)</option>
				</select>
			</form>
		</section>
	);
}

export default SortBy;
