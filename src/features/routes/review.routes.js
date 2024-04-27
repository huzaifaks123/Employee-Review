// import express from express-module
import express from 'express'

// import employeeController and create instance
import ReviewController from '../controllers/review.controllers.js'
const reviewController = new ReviewController()

// create router using express router
const reviewRouter = express.Router()

// import authentication middlewares
import { auth, adminAuth } from '../../middleware/auth.middleware.js';

// list required review routes
reviewRouter.get("/showReviews", adminAuth, reviewController.ShowReviewList)
reviewRouter.get("/addReviewTask", adminAuth, reviewController.getAddReviewTaskForm)
reviewRouter.post("/addReviewTask", adminAuth, reviewController.addReviewTask)
reviewRouter.get("/updateReviewTask/:id", adminAuth, reviewController.getupdateReviewTaskForm)
reviewRouter.post("/updateReviewTask/:id", adminAuth, reviewController.updateReviewTask)
reviewRouter.delete("/deleteReviewTask/:id", adminAuth, reviewController.deleteReviewTask)
reviewRouter.post("/assignEmployee/:id", adminAuth, reviewController.assignEmployee)

reviewRouter.get("/getFeedbackForm/:id", auth, reviewController.getFeedbackForm)
reviewRouter.post("/addFeedback/:reviewId/:userName", auth, reviewController.addfeedback)
reviewRouter.get("/getFeedbackList", adminAuth, reviewController.getFeedbackList)
reviewRouter.get("/getReviewFeedback/:id", adminAuth, reviewController.getReviewFeedback)

// export router 
export default reviewRouter