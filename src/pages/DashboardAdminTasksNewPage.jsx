import api from "../api";

const DashboardAdminTasksNewPage = () => {
    const createTask = (jwt, task) => api.createTask(jwt, task)
    const updateTask = (jwt, task) => api.updateTask(jwt, task)

    return <>
        Dashboard Admin Tasks New Page
    </>
}

export default DashboardAdminTasksNewPage