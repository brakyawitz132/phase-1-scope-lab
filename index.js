// Write your solution in this file!
var customerName = "bob"

function upperCaseCustomerName(name) {
    customerName = customerName.toUpperCase()
    return customerName
}

var bestCustomer
function setBestCustomer() {
    bestCustomer = "not bob"
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = 'sam'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob'
}
