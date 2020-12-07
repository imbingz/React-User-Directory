import React from 'react';

function SearchBar({ inputValue, handleInputChange, handleClick }) {
	return (
		<section className='searchBar'>
			<form className='searchForm'>
				<input
					type='text'
					id='name'
					name='name'
					value={inputValue}
					placeholder='Enter a name ...'
					onChange={handleInputChange}
				/>
				<button className='searchBtn' onClick={handleClick}>
					Find
				</button>
			</form>
		</section>
	);
}

export default SearchBar;
