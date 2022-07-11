import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

const getEmployeeProductSoldCount = (employee) => {
    
    let productSoldCount = 0

    for ( const order of getOrders() ) {        // getOrders returns a copy of the orders array. A reference would suffice.
        if ( order.employeeId === employee.id ) productSoldCount++
    }

    return productSoldCount

}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    window.alert(`${employee.name} sold ${getEmployeeProductSoldCount(employee)} products.`)
                }
            }
        }
    }
)


export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

