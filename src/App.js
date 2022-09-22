import React from 'react'
import "./App.css"

import MapSection from './components/map/Map' // import the map here
import './App.css'
const location = {
  address: 'Bouhjar,Monastir',
  lat:35.66559394678892,
  lng:10.859556105401,
} // our location object from earlier

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1 style={{textAlign:'center'}}>THIS MY LOCATION:</h1>
      <MapSection location={location} zoomLevel={20} /> {/* include it here */}
      </header>
  
    </div>
  )
}

export default App
