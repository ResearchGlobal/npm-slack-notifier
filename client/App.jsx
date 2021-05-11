<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// axios
//   .get('kafsrv/test/')
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => console.log(err))

=======
import React, { useEffect, useState } from 'react';
import axios from 'axios';


axios.get('/test')
  .then(data => console.log(data))
  .catch(err => console.log (err))
>>>>>>> b994f0d4f2d2541add62084de0c721abfc7547e4

// let dataFromTest = ''

// useEffect(()=>{
//     const getTest = async () =>{
//       const testFrom4000 = await fetchFromTest();
//       console.log(testFrom4000)
//     }
//     getTest();
//     // [] below takes in dependencies that will invoke useEffect when the its values change
//   }, [])

<<<<<<< HEAD

=======
// const fetchFromTest = async () => {
//     const res = await fetchFromTest('http://locahost:4000/test')
//     const data = await res.json()
//     return data;
//   }
>>>>>>> b994f0d4f2d2541add62084de0c721abfc7547e4

class App extends React.Component {
  constructor () {
    super()
<<<<<<< HEAD
    this.fetchFromTest = this.fetchFromTest.bind(this);
    this.postToHook = this.postToHook.bind(this);
  }
  // fetchFromTest;
  async fetchFromTest () {
    const res = await axios.get('/kafsrv/test');
    console.log(`data:`, res);
    return res;
  }
  async postToHook(){
    const body = {event:"package:publish",name:"@kafkajs/zstd",version:"1.0.0",hookOwner:{username:"nevon"},"payload":{name:"@kafkajs/zstd"},change:{version:"1.0.0"},time :1603444214995};

    const response = await axios.post('http://localhost:3001/hook', body)
      .then(res => console.log('*** RES:',res))
      .catch(err => console.log('*** ERR:',err))
    return response;

  }
  render () {
    this.fetchFromTest();
    this.postToHook();
    return (
      <div>
        <h1>dataFromTest</h1>
      </div>
    )
  }
}

export default App;
=======
  }
  render() {
    return <div>
      <h1>dataFromTest</h1>
    </div>
  }
}

export default App;
>>>>>>> b994f0d4f2d2541add62084de0c721abfc7547e4
