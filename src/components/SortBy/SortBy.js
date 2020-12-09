import React from 'react';
import './SortBy.css';

function SortBy({ sortCategories, sortValue, handleSortValueChange }) {
	return (
		<section className='sort'>
			<form className='sortForm'>
				<label htmlFor='sortBy'>Sort By: </label>
				<select name='sortBy' value={sortValue} onChange={handleSortValueChange} id='sortBy'>
					<option value='' disabled hidden>
						Choose One
					</option>
					{sortCategories.map(category => <option value={category}>{category}</option>)}
				</select>
			</form>
		</section>
	);
}

export default SortBy;
