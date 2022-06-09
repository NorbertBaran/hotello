import api from "../api";

const DashboardSettingsPage = () => {
    const updateUserSettings = (jwt, settings) => api.updateUserSettings(jwt, settings)

    return <>
        Settings Page
    </>
}

export default DashboardSettingsPage