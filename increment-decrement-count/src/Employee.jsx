function Employee({employeedata})
{
    return(
        <>
            <h1>Employee details</h1>
            <p>ID:{employeedata.id}  </p>
            <p> Name:{employeedata.name}</p>
            <p>Salary:{employeedata.salary}</p>
        </>
    )
}
export default Employee;