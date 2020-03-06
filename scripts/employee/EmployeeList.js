import { useEmployee } from "./employeeDataProvider.js";
import { Employee } from "./Employee.js";

// Selects an element of index.html in which to insert representations of employees

const contentTarget = document.querySelector(".employeeDiv")

export const EmployeeList = () => {

// Invoking the useEmployee function that returns a copy of the employee data, and stores it in a variable called employeeArray

    const employeeArray = useEmployee()

// For..of loop to iterate over employeeArray

    for (const employeeObject of employeeArray) {

// Invoking the Employee() function that returns an HTML representation of an employee object

        const employeeHtml = Employee(employeeObject)

// Inserting the employeeHTML into the contentTarget element

        contentTarget.innerHTML += employeeHtml
        console.log("Right here")
    }

}