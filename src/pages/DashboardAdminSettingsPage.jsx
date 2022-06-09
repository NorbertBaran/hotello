import api from "../api";

const DashboardAdminSettingsPage = () => {
    const getEmployee = (jwt) => api.getEmployeeSettings(jwt)
    const updateEmployee = (jwt, employee) => api.updateEmployee(jwt, employee)

    return <>
        DashboardAdminSettingsPage
    </>
}

export default DashboardAdminSettingsPage