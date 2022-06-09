import api from "../api";

const DashboardAdminBookingNewPage = () => {
    const createBooking = (jwt, booking) => api.createBooking(jwt, booking)
    const updateBooking = (jwt, booking) => api.updateBooking(jwt, booking)

    return <>
        <div>Book page</div>
    </>
}

export default DashboardAdminBookingNewPage