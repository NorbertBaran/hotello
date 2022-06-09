import api from "../api";
import {Booking, BookingNew, Room, Task, TaskNew} from "../components";
import RoomNew from "../components/entities/RoomNew";
import {Box} from "@mui/material";

const DashboardBookingListPage = () => {
    const getBookings = (jwt) => api.getBookings(jwt)
    const findCustomer = (jwt, data) => api.findCustomers(jwt, data)[0]
    const getUserBookings = (jwt, user) => api.getUserBookings(jwt, user)
    const deleteBooking = (jwt, booking) => api.deleteBooking(jwt, booking)

    const booking = {
        id: 0,
        user_id: 0,
        from: '13.06.2022',
        to: '17.06.2022',
        payment: 'cash',
        rooms: [{
            beds: 3,
            room_id: null
        },{
            beds: 2,
            room_id: null
        },{
            beds: 4,
            room_id: null
        },{
            beds: 1,
            room_id: null
        }]
    }

    const customer = {
        id: 0,
        name: 'John',
        last_name: 'Smith',
        phone: '123456789'
    }

    return <Box sx={{padding: '25px 50px'}}>
        <div>Booking list</div>
        <Booking booking={booking} customer={customer}/>
        <BookingNew/>
        <Task/>
        <TaskNew/>
        <Room/>
        <RoomNew/>
    </Box>
}

export default DashboardBookingListPage