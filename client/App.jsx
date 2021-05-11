import React, { useEffect, useState } from 'react'
import axios from 'axios'


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
    console.log('post to hook')
    const body = {event:"package:publish",name:"@kafkajs/zstd",version:"1.0.0",hookOwner:{username:"nevon"},"payload":{name:"@kafkajs/zstd"},change:{version:"1.0.0"},time :1603444214995};

    const response = await axios.post('http://localhost:3001/hook', body, {
      headers: {
        'Content-Type': 'application/json',
        'x-npm-signature': 'sha256=555de877c536848f3aaead79353c88a610668575c546e31aa8c6c7fd8241cb12'
      }
    })
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
