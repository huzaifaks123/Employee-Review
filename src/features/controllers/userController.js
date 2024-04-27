// import models to use data
import ReviewModel from "../models/review.models.js";
import UserModel from "../models/user.model.js"

// export recruitersController class
export default class UserController {

    // function to render home page
    homePage(req, res)  {
        let reviewList = [];
        if(req.session.user){
            reviewList = ReviewModel.getAssignedReview(req.session.user.id)
            console.log(reviewList);
        }
        res.render('home', {
            user : req.session.user,
            reviewList : reviewList
        })
    }
    
    // function to get RegisterForm
    getRegisterForm(req, res) {
        res.render('registerForm')
    }
    
    // function to get LoginForm
    getloginForm(req, res) {
        res.render('loginForm')
    }
    
    // function to create a new user id
    create(req, res) {
        console.log(req.body);
        const error = UserModel.create(req.body)
        if (!error) {
            if(!req.body.password){
                res.redirect('/user/employeeList')
            }else{
                res.status(201).render('loginForm', { message: "New User Created" })
            }
        } else {
            if(!req.body.password){
                res.redirect('/user/employeeList')
            }else{
                res.status(400).render("loginForm", { message: error })
            }
        }
    }
    
    // function to post login credential
    login(req, res) {
        const { email, password } = req.body
        let user = UserModel.verify(email, password)
        if(user){
            req.session.user = user;
            res.redirect('/')
        }else{
            res.redirect('/user/login')
        }
    }
    
    // function to logout user
    logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                console.log("Error while logging out :", err);
            } else {
                res.redirect('/')
            }
        })
    }
    
    
    // function to render add new employee form
    getAddEmployeeForm(req, res) {
        console.log("Add");
        let employee = ""
        res.render('addOrUpdateEmployeeForm', {
            employee,
            user : req.session.user
        })
    }
    
    
    // function to render update employee form
    getUpdateEmployeeForm(req, res) {
        let employee = UserModel.getEmployee(req.params.id)
        res.render('addOrUpdateEmployeeForm', {
            action: "Update Existing Employee",
            employee: employee
        })
    }
    
    // function to post update employee
    updateEmployee(req, res) {
        employee = UserModel.updateEmployee(req.params.id, req.body)
        res.redirect('/user/employeeList')
        console.log(employee);
    }
    
    // function to delete employee
    removeEmployee(req, res) {
        employee = UserModel.removeEmployee(req.params.id)
        console.log("employee", employee)
        res.redirect('/admin/employeeList')
    }
    
    // function to render employeelist
    employeeList(req, res) {
        const employees = UserModel.getEmployees()
        res.render('employeeList', {
            employees: [...employees],
            user: req.session.user
        })
    }
    
    // function to update employee role
    updateRole(req, res) {
        console.log("ROle",req.params.id);
        const error = UserModel.updateRole(req.params.id)
        if (error) {
            console.log(error);
        }else{
            console.log("Role Updated");
        }
        res.redirect('/user/employeeList')
    }
}