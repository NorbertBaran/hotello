import api from "../api";

const DashboardAdminRoomsGetPage = () => {
    const getLeftRooms = (jwt) => api.getLeftRooms(jwt)
    const updateRoom = (jwt, room) => api.updateRoom(jwt, room)

    return <>
        DashboardAdminRoomsGetPage
    </>
}

export default DashboardAdminRoomsGetPage