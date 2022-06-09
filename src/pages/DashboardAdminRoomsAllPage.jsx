import api from "../api";

const DashboardAdminRoomsAllPage = () => {
    const getRooms = (jwt) => api.getRooms(jwt)
    const updateRoom = (jwt) => api.updateRoom(jwt)
    const deleteRoom = (jwt, room) => api.deleteRoom(jwt, room)

    return <>
        DashboardAdminRoomsAllPage
    </>
}

export default DashboardAdminRoomsAllPage