// function to handle delete operation with admin's permission
function deleteEmployee(id) {
    fetch(`/user/removeEmployee/${id}`, {
        method: 'DELETE'
    }).then(res => {
        window.location.href = "/user/employeeList";
    }).catch(err => {
        console.log("Error while deleting data");
    })
}

// function to toggle employee's role with admin's permission
function toggleRole(id) {
    fetch(`/user/toggleRole/${id}`, {
        method: 'POST'
    }).then(res => {
        window.location.href = "/user/employeeList";
    }).catch(err => {
        console.log("Error while deleting data");
    })
}