const { Kafka } = require('kafkajs');

const instantiate = async (brokers) => {
  const kafka = new Kafka({
    clientId: 'npm-slack-notifier',
    brokers: ['localhost:3001'],
  });

  const admin = kafka.admin();

  const connectAdmin = async () => {
    try {
      await admin.connect();
    } catch (err) {
      // next(err);
      console.log('***ERR inside of instantiate.js',err)
    }
  };

  await connectAdmin();
  return admin;
};

module.exports = {
  instantiate,
};
