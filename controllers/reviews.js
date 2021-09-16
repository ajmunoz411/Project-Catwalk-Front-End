const axios = require('axios');
const config = require('../config');

const reviews = {
  getReviews: (req, res) => {
    const { id, count, sort } = req.params;

    const options = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews?product_id=${id}&count=${count}&sort=${sort}`,

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

  updateHelpfulReview: (req, res) => {
    const { id } = req.params;

    const options = {
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/${id}/helpful`,

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

  reportReview: (req, res) => {
    const { id } = req.params;

    const options = {
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/${id}/report`,

      headers: {
        Authorization: `${config.TOKEN}`,
      },
    };
    axios(options)
      .then(() => {
        res.status(200).send('successful report');
      })
      .catch((err) => {
        console.log('reported post: ', err);
        res.status(400).send(err);
      });
  },

  postReview: (req, res) => {
    const options = {
      method: 'post',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews',
      data: req.body,
      headers: {
        Authorization: `${config.TOKEN}`,
      },
    };
    axios(options)
      .then(() => {
        res.status(200).send('Successful post!!!');
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send(err);
      });
  },

  getReviewMetadata: (req, res) => {
    const options = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/meta?product_id=${req.params.id}`,
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
};

module.exports = reviews;
