import api from "../api";

const DashboardAdminBlackListAddPage = () => {
    const addToBlackList = (jwt, customer) => api.addToBlackList(jwt, customer)

    return <>
        DashboardAdminBlackListAddPage
    </>
}

export default DashboardAdminBlackListAddPage