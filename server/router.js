const router = require('express').Router();
const products = require('../controllers/products');
const questions = require('../controllers/questions');
const reviews = require('../controllers/reviews');

router
  .get('/products', products.getProducts)
  .get('/products/:id', products.getOneProduct)
  .get('/products/:id/styles', products.getProductStyles)
  .get('/related/:id', products.getRelatedItems)

  .get('/qa/questions', questions.getQuestions)
  .get('/qa/questions/:question_id/answers', questions.getAnswersByQuestionId)
  .put('/qa/answers/:answer_id/helpful', questions.updateHelpfulAnswer)
  .put('/qa/answers/:answer_id/report', questions.reportAnswers)
  .put('/qa/questions/:question_id/helpful', questions.updateHelpfulQuestion)
  .put('/qa/questions/:question_id/report', questions.reportQuestion)
  .post('/qa/questions/:question_id/answers', questions.postAnswer)
  .post('/qa/questions', questions.postQuestion)

  .get('/reviews2/:id/:count/:sort', reviews.getReviews)
  .get('/reviews/meta/:id', reviews.getReviewMetadata)
  .put('/reviews2/:id/helpful', reviews.updateHelpfulReview)
  .put('/reviews2/:id/report', reviews.reportReview)
  .post('/reviews2/postReview', reviews.postReview);

module.exports = router;
