
import './App.css';
import Countries from './components/Countries/Countries';
// import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Countries></Countries>
    </div>
  );
}

// function LoadCountries() {
//   const [country, setCountry] = useState([]);
//   useEffect( ()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data => setCountry(data))

//   }, [])
//   return (
//     <div>
//       <h1>visiting country!!</h1>
//       <h3>country: {country.length}</h3>
//       {
//         country.map(countries => <Country name={countries.name.common} population={countries.population}></Country>)
//       }

//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h4>Population: {props.population}</h4>
//     </div>
//   )
// }

export default App;
