import React, {useState} from 'react';
import {data} from './data';
import Heading from './components/Heading';
import SearchBar from './components/SearchBar';
import SortBy from './components/SortBy';
import Table from './components/Table';

function App() {
  //set state hook 
  const [ inputValue, setInputValue ] = useState('');
  const [dataValue, setDataValue] = useState(data)
  const [sortValue, setSortValue] = useState('')

  //Handle search input
  const handleInputChange = e => {
    setDataValue(data)
    setInputValue(e.target.value);
  };
  
  //handle search button click 
  const handleClick = e => {
    e.preventDefault();
    if(inputValue) {
      setDataValue(dataValue.filter(person => {
          return person.name.toLowerCase().includes(inputValue.toLowerCase().trim())
      }))
    setInputValue('');
    }
  };
  
  //SortBy Categories 
  const sortCategories = ["First Name:(A-Z)","First Name:(Z-A)", "Title:(A-Z)", "Title:(Z-A)", "Location:(A-Z)", "Location:(Z-A)", "Availability:(A-Z)", "Availability:(Z-A)"]


  //SortBy Component 
  const handleSortValueChange = (e) => {
    setDataValue(data)
    setSortValue(e.target.value);
  }

  //Sorting funcationality
  if(sortValue === "First Name:(A-Z)") {
    dataValue.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      return 0;
    });
  } else if(sortValue === "First Name:(Z-A)") {
    dataValue.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
      return 0;
    });
  } else if(sortValue === "Title:(A-Z)") {
    dataValue.sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      return 0;
    });
  } else if (sortValue === "Title:(Z-A)") {
    dataValue.sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
      if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
      return 0;
    });
  } else if(sortValue === "Location:(A-Z)") {
    dataValue.sort((a, b) => {
      if (a.location.toLowerCase() > b.location.toLowerCase()) return 1;
      if (a.location.toLowerCase() < b.location.toLowerCase()) return -1;
      return 0;
    });
  } else if (sortValue === "Location:(Z-A)") {
    dataValue.sort((a, b) => {
      if (a.location.toLowerCase() > b.location.toLowerCase()) return -1;
      if (a.location.toLowerCase() < b.location.toLowerCase()) return 1;
      return 0;
    });
  } else if(sortValue === "Availability:(A-Z)") {
    dataValue.sort((a, b) => {
      if (a.isActive > b.isActive) return -1;
      if (a.isActive < b.isActive) return 1;
      return 0;
    });
  } else {
    dataValue.sort((a, b) => {
      if (a.isActive > b.isActive) return 1;
      if (a.isActive < b.isActive) return -1;
      return 0;
    });
  } 
 
return (
    <>
      <Heading title="Employee Directory"/>
      <main>
        <SearchBar inputValue={inputValue} handleInputChange={handleInputChange} handleClick={handleClick} />
        <SortBy sortCategories={sortCategories} sortValue={sortValue} handleSortValueChange={handleSortValueChange}/>
        {dataValue.length !== 0 ? <Table data={dataValue}/> : <h2 style={{textAlign: 'center', color:"#e54"}}>No employee found with that name.</h2> }    
      </main>
    </>
);
}


export default App;
