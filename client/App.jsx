import React, { useEffect, useState } from 'react';
import axios from 'axios';


axios.get('/test')
  .then(data => console.log(data))
  .catch(err => console.log (err))

// let dataFromTest = ''

// useEffect(()=>{
//     const getTest = async () =>{
//       const testFrom4000 = await fetchFromTest();
//       console.log(testFrom4000)
//     }
//     getTest();
//     // [] below takes in dependencies that will invoke useEffect when the its values change
//   }, [])

// const fetchFromTest = async () => {
//     const res = await fetchFromTest('http://locahost:4000/test')
//     const data = await res.json()
//     return data;
//   }

class App extends React.Component {
  constructor () {
    super()
  }
  render() {
    return <div>
      <h1>dataFromTest</h1>
    </div>
  }
}

export default App;