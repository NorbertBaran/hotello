import api from "../api";

const DashboardAdminRoomsNewPage = () => {
    const createRoom = (jwt, room) => api.createRoom(jwt, room)
    const updateRoom = (jwt, room) => api.updateRoom(jwt, room)

    return <>
        DashboardAdminRoomsNewPage
    </>
}

export default DashboardAdminRoomsNewPage