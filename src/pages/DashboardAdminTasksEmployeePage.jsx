import api from "../api";

const DashboardAdminTasksEmployeePage = () => {
    const getTasks = (jwt) => api.getTasks(jwt)
    const deleteTask = (jwt, task) => api.deleteTask(jwt, task)

    return <>
        Dashboard Admin Tasks Employee Page
    </>
}

export default DashboardAdminTasksEmployeePage