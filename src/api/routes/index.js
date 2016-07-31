var express = require('express');
var router = express.Router();
var ctlrResources = require('../controllers/resources');
var ctrlReviews = require('../controllers/reviews');

//resources
router.get('/resources', ctlrResources.resourcesList);
router.post('/resources', ctlrResources.resourcesCreate);
router.get('/resources/:resourceid', ctlrResources.resourcesReadOne);
router.put('/resources/:resourceid', ctlrResources.resourcesUpdateOne);
router.delete('/resources/:resourceid', ctlrResources.resourcesDeleteOne);

// reviews
router.post('/resources/:resourceid/reviews', ctrlReviews.reviewsCreate);
router.get('/resources/:resourceid/reviews', ctrlReviews.reviewsList);
router.get('/resources/:resourceid/reviews/:reviewid',
ctrlReviews.reviewsReadOne);
router.put('/resources/:resourceid/reviews/:reviewid',
ctrlReviews.reviewsUpdateOne);
router.delete('/resources/:resourceid/reviews/:reviewid',
ctrlReviews.reviewsDeleteOne);

module.exports = router;
