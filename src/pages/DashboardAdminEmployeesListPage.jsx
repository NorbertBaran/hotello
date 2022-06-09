import api from "../api";

const DashboardAdminEmployeesListPage = () => {
    const getEmployees = (jwt) => api.getEmployees(jwt)
    const deleteEmployee = (jwt, employee) => api.deleteEmployee(jwt, employee)

    return <>
        DashboardAdminEmployeesListPage
    </>
}

export default DashboardAdminEmployeesListPage