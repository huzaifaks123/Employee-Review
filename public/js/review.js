// function to handle delete operation with admin's permission
function deleteReview(id){
    console.log("Inside review");
    fetch(`/review/deleteReviewTask/${id}`,{
        method : 'DELETE'
    }).then(res => {
        window.location.href = "/review/showReviews";
    }).catch(err => {
        console.log("Error while deleting data");
    })
}
