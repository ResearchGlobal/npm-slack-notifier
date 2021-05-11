const express = require('express');
const kafkaApp = express();
const kafkaAppRouter = express.Router();
const path = require('path');


kafkaApp.use(express.json());
kafkaApp.use(express.urlencoded({ extended: true }));
// kafkaApp.use(express.Router());

// kafkaApp.use('/kafsrv', kafkaAppRouter)

//main server route. customize as needed
<<<<<<< HEAD
const welcomeToServer = 'WELCOME TO SERVER'
kafkaApp.get('/kafsrv/test', (req,res) => {
  // console.log('hitting test endpoint')
  return res.status(200).send(welcomeToServer);
=======
const welcomeToServer = {payload:'WELCOME TO SERVER'}
kafkaApp.get('/test', (req,res) => {
  return res.status(200).json(welcomeToServer);
  // return res.status(200).sendFile(path.join(__dirname, "./index.html"))
>>>>>>> b994f0d4f2d2541add62084de0c721abfc7547e4
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