import React, {useState} from 'react';
import './App.css';
import {data} from './data';
import Heading from './components/Heading';
import SearchBar from './components/SearchBar';
import SortBy from './components/SortBy';
import Table from './components/Table';

function App() {
  //Search Bar Component 
  const [ inputValue, setInputValue ] = useState('');
  const [dataValue, setDataValue] = useState(data)

	const handleInputChange = e => {
    setDataValue(data)
    setInputValue(e.target.value);
	};
	const handleClick = e => {
    e.preventDefault();
    if(inputValue) {
      setDataValue(dataValue.filter(person => {
          return person.name.toLowerCase().includes(inputValue.toLowerCase().trim())
      }))
    setInputValue('');
    }
  };
  
  //SortBy Component 
  const [sortValue, setSortValue] = useState('')
  const handleSortValueChange = (e) => {
    setSortValue(e.target.value);
  }

  //Sorting funcationality
  if(sortValue === "First Name:(A-Z)") {
    data.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      return 0;
    });
  } else if(sortValue === "First Name:(Z-A)") {
    data.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
      return 0;
    });
  } else if(sortValue === "Title:(A-Z)") {
    data.sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      return 0;
    });
  } else if (sortValue === "Title:(Z-A)") {
    data.sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
      if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
      return 0;
    });
  } else if(sortValue === "Location:(A-Z)") {
    data.sort((a, b) => {
      if (a.location.toLowerCase() > b.location.toLowerCase()) return 1;
      if (a.location.toLowerCase() < b.location.toLowerCase()) return -1;
      return 0;
    });
  } else if (sortValue === "Location:(Z-A)") {
    data.sort((a, b) => {
      if (a.location.toLowerCase() > b.location.toLowerCase()) return -1;
      if (a.location.toLowerCase() < b.location.toLowerCase()) return 1;
      return 0;
    });
  } else if(sortValue === "Availability:(A-Z)") {
    data.sort((a, b) => {
      if (a.isActive > b.isActive) return -1;
      if (a.isActive < b.isActive) return 1;
      return 0;
    });
  } else {
    data.sort((a, b) => {
      if (a.isActive > b.isActive) return 1;
      if (a.isActive < b.isActive) return -1;
      return 0;
    });
  } 
 
	return (
    <>
			<Heading />
      <main>
        <SearchBar inputValue={inputValue} handleInputChange={handleInputChange} handleClick={handleClick} />
        <SortBy sortValue={sortValue} handleSortValueChange={handleSortValueChange}/>
        {dataValue ? <Table data={dataValue}/> : <h3>The name does not match any employees.</h3> }
        
      </main>
		</>
	);
}

export default App;
