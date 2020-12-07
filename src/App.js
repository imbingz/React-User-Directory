import React from 'react';
import './App.css';
import Heading from './components/Heading';
import SearchBar from './components/SearchBar';

function App() {

  const [ inputValue, setInputValue ] = React.useState('');

	const handleInputChange = e => {
		setInputValue(e.target.value);
	};
	const handleClick = e => {
		e.preventDefault();
    //run filter method n show the result 
		setInputValue('');
  };
  

	return (
    <>
			<Heading />
      <main>
        <SearchBar inputValue={inputValue} handleInputChange={handleInputChange} handleClick={handleClick} />
      </main>
		</>
	);
}

export default App;
