// export ReviewModel class
export default class ReviewModel{
    // contructor for review model
    constructor(id, title, objective, assignedEmployee = []){
        this.id = id;
        this.title = title;
        this.objective = objective;
        this.assignedEmployee = assignedEmployee
    }

    // function to addReview
    static addReview(reviewDetail){
        const newReview = new ReviewModel(data.length + 1, reviewDetail.title, reviewDetail.objective)
        data.push(newReview)
        console.log(data);
    }

    // function to updateReview
    static updateReview(id, reviewDetail){
        const index = data.findIndex(review => review.id == id)
        data[index].title = reviewDetail.title
        data[index].objective = reviewDetail.objective
        console.log(data);
        return data[index]
    }
    // function to removeReview
    static removeReview(id){
        console.log("DATA");
        const review = data.find(review => review.id == id)
        if (review) {
            console.log("before data",data)
            data = data.filter(review => review.id != id)
            console.log("after data",data)
            return review
        }else{
            console.log("review not found");
        }
    }
    // function to getReview
    static getReview(id){
        const review = data.find(review => review.id == id)
        return review
    }
    // function to getAllreview
    static getAllreview(){
        return data
    }
    // function to updateReviewTask
    static updateReviewTask(id, reviewDetail){
        const index = data.findIndex(review => review.id == id)
        data[index].title = reviewDetail.title
        data[index].objective = reviewDetail.objective
        data[index].department = reviewDetail.department
        console.log(data[index]);
    }
    // function to assignEmployee
    static assignEmployee(id, employee){
        const index = data.findIndex(review => review.id == id)
        const assignedIndex = data[index].assignedEmployee.findIndex(emp => emp.id == employee.id)
        if (assignedIndex == -1) {
            data[index].assignedEmployee.push(employee)
            console.log(data[index]);
        }
        return employee
    }
    // function to getAssignedReview
    static getAssignedReview(id){
        return data.filter(review => review.assignedEmployee.some(employee => employee.id == id));
    }
}

let data = [
    {
        id : 1,
        title : "Quarterly Review",
        objective : "Encouraging constructive feedback exchange among peers.",
        assignedEmployee : []
    },
    {
        id : 2,
        title : "Monthly Review",
        objective : "Promoting transparency and fairness in evaluating individual performance.",
        assignedEmployee : []
    },
    {
        id : 3,
        title : "Quarterly Review",
        objective : "Strengthening teamwork and interpersonal relationships within teams and across departments.",
        assignedEmployee : []
    },
    {
        id : 4,
        title : "Yearly Review",
        objective : "Empowering employees to actively participate in their professional development and career advancement.",
        assignedEmployee : []
    },
    {
        id : 5,
        title : "Quarterly Review",
        objective : "Enhancing overall organizational performance and productivity through continuous feedback loops and iterative improvement.",
        assignedEmployee : []
    },
]