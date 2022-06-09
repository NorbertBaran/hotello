import {
    Box,
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, MenuItem,
    Paper, Select,
    TextField,
    Typography
} from "@mui/material";
import {useState} from "react";
import {BookingNew} from "../index";

const Booking = ({booking, customer}) => {
    const [open, setOpen] = useState(false);

    return <>
        <Paper sx={{padding: '25px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Typography variant='subtitle2' color='primary'>{booking.from} - {booking.to}</Typography>
            <Typography>{customer.name}</Typography>
            <Typography>{customer.last_name}</Typography>
            <Typography>{customer.phone}</Typography>
            <Box sx={{display: 'flex', gap: '10px'}}>
                <Button onClick={() => setOpen(true)}>Complete</Button>
                <Button variant='outlined'>Update</Button>
                <Button variant='outlined'>Delete</Button>
            </Box>
        </Paper>
        <BookingNew booking={booking} customer={customer} open={open} setOpen={setOpen}/>
    </>
}

export default Booking