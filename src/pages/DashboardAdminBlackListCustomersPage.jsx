import api from "../api";

const DashboardAdminBlackListCustomersPage = () => {
    const getBlackList = (jwt) => api.getBlackList(jwt)

    return <>
        DashboardAdminBlackListCustomersPage
    </>
}

export default DashboardAdminBlackListCustomersPage