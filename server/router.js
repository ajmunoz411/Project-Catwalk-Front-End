const router = require('express').Router();
const atelier = require('../helpers/atelier');

router
  .get('/products', atelier.getProducts)
  .get('/products/:id', atelier.getOneProduct)
  .get('/products/:id/styles', atelier.getProductStyles)
  .get('/related/:id', atelier.getRelatedItems)

  .get('/reviews2/:id/:count/:sort', atelier.getReviews)
  .get('/reviews/meta/:id', atelier.getReviewMetadata)
  .put('/reviews2/:id/helpful', atelier.updateHelpfulReview)
  .put('/reviews2/:id/report', atelier.reportReview)
  .post('/reviews2/postReview', atelier.postReview)

  .get('/qa/questions', atelier.getQuestions)
  .get('/qa/questions/:question_id/answers', atelier.getAnswersByQuestionId)
  .put('/qa/questions/:question_id/helpful', atelier.updateHelpfulQuestion)
  .put('/qa/questions/:question_id/report', atelier.reportQuestion)
  .put('/qa/answers/:answer_id/helpful', atelier.updateHelpfulAnswer)
  .put('/qa/answers/:answer_id/report', atelier.reportAnswers)
  .post('/qa/questions/:question_id/answers', atelier.postAnswer)
  .post('/qa/questions', atelier.postQuestion);

module.exports = router;
