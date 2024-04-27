import ReviewModel from "../models/review.models.js";
import UserModel from "../models/user.model.js";

export default class ReviewController {

    // function to show review list
    ShowReviewList(req, res) {
        const employees = UserModel.getEmployees()
        const reviews = ReviewModel.getAllreview()
        res.render('reviewList', {
            reviews : reviews,
            employees : employees,
            user : req.session.user,
            
        })
    }

    // function to render add new review form
    getAddReviewTaskForm(req, res) {
        res.render('addOrUpdatePerformanceReviewForm', {
            user : req.session.user,
            review : ""
        })
    }

    // function to post add review
    addReviewTask(req, res) {
        const review = ReviewModel.addReview(req.body)
        console.log(review);
        res.redirect('/review/showReviews')
    
    }

    // function to render update review form
    getupdateReviewTaskForm(req, res) {
        console.log("klkllklk");
        const review = ReviewModel.getReview(req.params.id)
        res.render('addOrUpdatePerformanceReviewForm', {
            action: "Update Existing Review",
            review : review
            
        })
    
    }

    // function to delete review
    deleteReviewTask(req, res) {
        console.log("review")
        const review = ReviewModel.removeReview(req.params.id)
        UserModel.deleteReviewTask(req.params.id)
        console.log(review);
        res.redirect('/review/showReviews')
    
    }

    // function to post updated review task
    updateReviewTask(req, res) {
        const review = ReviewModel.updateReview(req.params.id, req.body)
        console.log(review);
        res.redirect('/review/showReviews')
    
    }

    // function to assign emeployee to review task
    assignEmployee(req, res) {
        console.log(req.body); 
        const employee = UserModel.getEmployee(req.body.employee)
        const assignedEmployee = ReviewModel.assignEmployee(req.params.id, employee)
        res.redirect('/review/showReviews')
    
    }

    // function to render add feed back form
    getFeedbackForm(req, res) {
        let employees = UserModel.getEmployees()
        employees = employees.filter(employee => employee.id != req.session.user.id)
        res.render('ReviewFeedbackForm', {
            user : req.session.user,
            reviewId : req.params.id,
            employees : employees
        })
    
    }

    // function to post feedback
    addfeedback(req, res) {
        console.log(req.body);
        req.body.reviewId = req.params.reviewId
        req.body.userName = req.params.userName
        let feedback = UserModel.addFeedback(req.body)
        if(feedback){
            console.log(feedback);
            res.redirect('/')
        }else{
            console.log("Error adding feedback");
        }
    
    }

    // function to show feedback list
    getFeedbackList(req, res){
        const feedbacks = UserModel.getAllFeedback()
        res.render('feedbackList',{
            feedbacks : feedbacks,
            user : req.session.user,
        })
    
    }

    // function to show feedback for a review
    getReviewFeedback(req, res){
        const feedbacks = UserModel.getReviewFeedback(req.params.id)
        res.render('feedbackList',{
            feedbacks : feedbacks,
            user : req.session.user,
        })
    }
}