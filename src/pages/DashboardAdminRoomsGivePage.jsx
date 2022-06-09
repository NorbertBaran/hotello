import api from "../api";

const DashboardAdminRoomsGivePage = () => {
    const getIssuedRooms = (jwt) => api.getIssuedRooms(jwt)
    const updateRoom = (jwt, room) => api.updateRoom(jwt)

    return <>
        DashboardAdminRoomsGivePage
    </>
}

export default DashboardAdminRoomsGivePage