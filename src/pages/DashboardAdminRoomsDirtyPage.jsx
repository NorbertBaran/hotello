import api from "../api";

const DashboardAdminRoomsDirtyPage = () => {
    const getDirtyRooms = (jwt) => api.getDirtyRooms(jwt)
    const updateRoom = (jwt, room) => api.updateRoom(jwt, room)

    return <>
        DashboardAdminRoomsDirtyPage
    </>
}

export default DashboardAdminRoomsDirtyPage