import api from "../api";

const DashboardBookingCalendarPage = () => {
    const getUserBookings = (jwt) => api.getUserBookings(jwt)

    return(
        <>Calendar</>
    )
}

export default DashboardBookingCalendarPage