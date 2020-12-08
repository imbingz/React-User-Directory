import React from 'react';
import './SearchBar.css';

function SearchBar({ inputValue, handleInputChange, handleClick }) {
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
				<button className='searchBtn' onClick={handleClick}>
					Search
				</button>
			</form>
		</section>
	);
}

export default SearchBar;
