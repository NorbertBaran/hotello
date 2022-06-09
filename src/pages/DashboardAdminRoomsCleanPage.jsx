import api from "../api";

const DashboardAdminRoomsCleanPage = () => {
    const getCleanRooms = (jwt) => api.getCleanRooms(jwt)
    const updateRoom = (jwt, room) => api.updateRoom(jwt, room)

    return <>
        DashboardAdminRoomsCleanPage
    </>
}

export default DashboardAdminRoomsCleanPage