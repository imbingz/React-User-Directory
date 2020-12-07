import React from 'react';
import './SearchBar.css';

function SearchBar({ inputValue, handleInputChange, handleClick, filterValue, handleFilterValueChange }) {
	return (
		<section className='searchBar'>
			<form className='searchForm'>
				<label htmlFor='name' />
				<input
					type='text'
					id='name'
					name='name'
					value={inputValue}
					placeholder='Enter a name ...'
					onChange={handleInputChange}
				/>
				{/* <label htmlFor='filterBy'>Filter By:</label>
				<select name='filterBy' value={filterValue} onChange={handleFilterValueChange} id='sortBy'>
					<option value='' disabled hidden>
						Choose a Filter
					</option>
					<option value='Title'>Title</option>
					<option value='Location'>Location</option>
					<option value='Availability'>Availability</option>
				</select> */}

				<button className='searchBtn' onClick={handleClick}>
					Search
				</button>
			</form>
		</section>
	);
}

export default SearchBar;
