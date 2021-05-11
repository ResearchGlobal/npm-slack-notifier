import React, { useEffect, useState } from 'react'
import axios from 'axios'

// axios
//   .get('kafsrv/test/')
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => console.log(err))


// let dataFromTest = ''

// useEffect(()=>{
//     const getTest = async () =>{
//       const testFrom4000 = await fetchFromTest();
//       console.log(testFrom4000)
//     }
//     getTest();
//     // [] below takes in dependencies that will invoke useEffect when the its values change
//   }, [])



class App extends React.Component {
  constructor () {
    super()
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
