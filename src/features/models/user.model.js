// export userModel class
export default class UserModel {
    // contructor for user model
    constructor(id, name, email, password, role = "employee", feedback = []) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.feedback = feedback
    }

    // function to register new user
    static create(employee) {
        const user = users.find(user => user.id === employee.id)
        if (!user) {
            const newuser = new UserModel(users.length + 1, employee.name, employee.email, employee.password ? employee.password : employee.email)
            users.push(newuser)
            console.log(users)
        } else {
            return "User already exist"
        }

    }

    // function to verify user before login
    static verify(email, password) {
        console.log(email, password);
        const user = users.find(user => user.email === email && user.password === password)
        if (user) {
            return user
        } else {
            console.log("User is not available");
        }
    }

    // function to getEmployees
    static getEmployees() {
        return users
    }
    
    // function to getEmployee
    static getEmployee(id) {
        const employee = users.find(employee => employee.id == id)
        return employee
    }
    
    // function to updateEmployee
    static updateEmployee(id, employeeDetail) {
        const index = users.findIndex(employee => employee.id == id)
        users[index].name = employeeDetail.name
        users[index].email = employeeDetail.email
        console.log(users[index]);
    }
    
    // function to updateRole
    static updateRole(id) {
        const index = users.findIndex(user => user.id == id)
        if (index != -1) {
            users[index].role == "admin" ? users[index].role = "employee" : users[index].role = "admin"
            console.log(users[index]);
        } else {
            return "User not Found"
        }
    }
    
    // function to removeEmployee
    static removeEmployee(id) {
        console.log("removing");
        const employee = users.find(employee => employee.id == id)
        if (employee) {
            users = users.filter(employee => employee.id != id)
        }
        console.log(users);
        return employee
    }
    
    // function to getAllEmployee
    static getAllEmployee() {
        return users
    }
    
    // function to getEmployee
    static getEmployee(id) {
        const employee = users.find(employee => employee.id == id)
        return employee
    }
    
    // function to updateEmployee
    static updateEmployee(id, employeeDetail) {
        const index = users.findIndex(review => review.id == id)
        if (index != -1) {
            users[index].name = employeeDetail.name
            users[index].email = employeeDetail.email
            return users[index];
        }
        return
    }
    
    // function to addFeedback
    static addFeedback(feedback) {
        const index = users.findIndex(user => user.name == feedback.userName)
        users[index].feedback.push(feedback)
        return users[index]
    }
    
    // function to getAllFeedback
    static getAllFeedback() {
        let allFeedback = [];
        users.forEach(user => {
            allFeedback = allFeedback.concat(user.feedback);
        });
        return allFeedback;
    }
    
    // function to getReviewFeedback
    static getReviewFeedback(id) {
        let Feedbacks = [];
        users.forEach(user => {
            user.feedback.forEach(feedback => {
                if (feedback.reviewId == id) {
                    Feedbacks.push(feedback);
                }
            });
        });
        return Feedbacks;
    }
    
    // function to deleteReviewTask
    static deleteReviewTask(id) {
        users.forEach(user => {
            user.feedback = user.feedback.filter(feedback => feedback.reviewId != id)
        });
    }
}

let users = [
    {
        id: 1,
        name: "Atiq",
        email: "atiq@gmail.com",
        password: "a",
        role: "employee",
        feedback: []
    },
    {
        id: 2,
        name: "Huzaifa",
        email: "huzaifa@gmail.com",
        password: "h",
        role: "admin",
        feedback: [
            {
                employee: 'Asif',
                review: 'Supportive Teammate with excellent Skills',
                reviewId: '1',
                userName: 'Huzaifa'
            },
            {
                employee: 'Kadam',
                review: 'Supportive player with excellent knowledge',
                reviewId: '1',
                userName: 'Huzaifa'
            }
        ]
    },
    {
        id: 3,
        name: "Kadam",
        email: "kadam@gmail.com",
        password: "k",
        role: "admin",
        feedback: [
            {
                employee: 'Sashi',
                review: 'Best teammate for last minute help',
                reviewId: '2',
                userName: 'Kadam'
            }
        ]
    },
    {
        id: 4,
        name: "Asif",
        email: "asif@gmail.com",
        password: "k",
        role: "employee",
        feedback: [
            {
                employee: 'Huzaifa',
                review: 'Hard work with excellent Skills',
                reviewId: '1',
                userName: 'Asif'
            }
        ]
    },
    {
        id: 5,
        name: "Sashi",
        email: "sashi@gmail.com",
        password: "k",
        role: "employee",
        feedback: []
    },
]