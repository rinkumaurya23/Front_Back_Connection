import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';


function App() {
  const [rinku, setRinku] = useState([])

  useEffect(() => {
    axios.get('/api/rinku')
      .then((response) => {
        setRinku(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <div className='App'>
      <h1>App components</h1>
      <p>Rinku : {rinku.length}</p>
      {
        rinku.map((rink, index) => (
          <div key={rink.id}>
            <h3>{rink.title}</h3>
            <h1>****************</h1>
            <h4>{rink.name}</h4>

          </div>

        ))
      }
    </div>
  )
}

export default App;
