const express = require('express');
const kafkaApp = express();
const kafkaAppRouter = express.Router();
const path = require('path');
const WebSocket = require('ws');
// const socket = new WebSocket('ws://localhost:3001/');
const {instantiate} = require('./instantiate.js')
console.log(instantiate)
let ITS_A_KAFKA;

console.log(1)
const getKafka = async function(){
  console.log(2)
  // ITS_A_KAFKA = await kafkaObj.consumer({groupId: 'group-id'}).connect()
  const admin = await instantiate(['localhost:9092']);
  console.log(admin.listTopics())
  // let KAKFA_TOPICS = await ITS_A_KAFKA.listTopics();
  console.log(KAKFA_TOPICS)
  console.log(3)
}

getKafka();

// socket.addEventListener('open', function(event){
//   console.log(event);
//   socket.send('hello server!');
// })

// socket.addEventListener('message', function(event){
//   console.log('***** message from server', event.data)
// ;})

// socket.on('open', function open(){
//   socket.send('something')
// })

// socket.on('message', function incoming(data){
//   console.log(data);
// })


kafkaApp.use(express.json());
kafkaApp.use(express.urlencoded({ extended: true }));
// kafkaApp.use(express.Router());

// kafkaApp.use('/kafsrv', kafkaAppRouter)

//main server route. customize as needed
const welcomeToServer = 'WELCOME TO SERVER'
kafkaApp.get('/kafsrv/test', (req,res) => {
  // console.log('hitting test endpoint')
  return res.status(200).send(welcomeToServer);
})

kafkaApp.get('/kafProd',
  //middleware,
  (req,res) => {
    return res.status(200).json({producerTemp: 'producer goes here'});
})

// if (process.env.NODE_ENV === 'production'){
//   //statically serve everything in the build folder on the route '/build'
//   kafkaApp.use('/build', express.static(path.join(__dirname,'../build')));
//   //serve index.html on the route '/'
//   kafkaApp.get('/', (req,res) => {
//     return res.status(200).sendFile(path.join(__dirname, '../index.html'));
//   });
// }

/**
 * 404 handler
 */
kafkaApp.use('*', (req, res) => {
  return res.status(404).send('********** GLOBAL BAD REQUEST / 404 ERROR **********');
});

/**
 * Global error handler
 */
kafkaApp.use((err, req, res, next) => {
  console.log(err);
  return res.status(500).send('********** GLOBAL INTERNAL SERVER / 500 ERROR **********');
});

kafkaApp.listen(4000) //listens on port 3000

// module.exports = serverApp; uncomment when building for TTD