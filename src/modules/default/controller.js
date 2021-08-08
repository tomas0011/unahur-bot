const Services = require('./service');

const helloWorld = (req, res) => {
  try {
    res.status(200).send(Services.helloWorld());
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).send(error.data || error);
  }
};

module.exports = {
  helloWorld
}
