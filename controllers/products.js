const axios = require('axios');
const config = require('../config');

const products = {
  getProducts: (req, res) => {
    const options = {
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products',
      headers: {
        Authorization: `${config.TOKEN}`,
      },
    };

    axios(options)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send(err);
      });
  },

  getOneProduct: (req, res) => {
    const { id } = req.params;
    const options = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${id}`,
      headers: {
        Authorization: `${config.TOKEN}`,
      },
    };

    axios(options)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  getProductStyles: (req, res) => {
    const options = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${req.params.id}/styles`,
      headers: {
        Authorization: `${config.TOKEN}`,
      },
    };

    axios(options)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send(err);
      });
  },

  getRelatedItems: (req, res) => {
    const { id } = req.params;
    const options = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${id}/related`,
      headers: {
        Authorization: `${config.TOKEN}`,
      },
    };

    axios(options)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
};

module.exports = products;
