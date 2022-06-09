import api from "../api";

const DashboardAdminEmployeesNewPage = () => {
    const createEmployee = (jwt, employee) => api.createEmployee(jwt, employee)

    return <>
        DashboardAdminEmployeesNewPage
    </>
}

export default DashboardAdminEmployeesNewPage