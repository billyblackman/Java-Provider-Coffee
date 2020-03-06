export const Employee = (employeeObject) => {
    return `
<section class="employeeSection">
    <h4>${employeeObject.firstName} ${employeeObject.lastName}</h4>
    <ul>
        <li>Employee ID: ${employeeObject.id}</li>
        <li>Job Title: ${employeeObject.jobTitle}</li>
        <li>Hours Scheduled: ${employeeObject.hoursScheduled}</li>
    </ul>
</section>
    `
}