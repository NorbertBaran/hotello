import {
    Box, Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import api from "../../api";
import {useState} from "react";

const BookingNew = ({booking, open, setOpen}) => {
    const [newBooking, setNewBooking] = useState(booking)

    const complete = () => {
        /*const jwt = localStorage.getItem('jwt')
        if(booking === null) {
            const customer = localStorage.getItem('customer')
            let tmpBooking = newBooking
            newBooking.user_id = customer
            setNewBooking(tmpBooking)
            api.createBooking(jwt, newBooking)
        }
        else
            api.updateBooking(jwt, newBooking)*/
    }
    const selectRoom = (index, room_id) => {

    }

    return <>
        <Dialog open={open} onClose={() => setOpen(false)} sx={{textAlign: 'center'}}>
            <DialogTitle>Complete booking</DialogTitle>
            <DialogContent>
                <DialogContentText sx={{paddingBottom: '10px'}}>
                    Select rooms
                </DialogContentText>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center'}}>
                    <TextField variant='outlined' size='small' label="Test" sx={{width: '300px'}}/>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        // label={`Room with ${room.beds} beds`}
                        // onChange={(event) => selectRoom(index, event.target.value)}
                    >
                        <MenuItem value={1}>A01</MenuItem>
                        <MenuItem value={3}>A03</MenuItem>
                        <MenuItem value={4}>A04</MenuItem>
                    </Select>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={complete}>Complete</Button>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
            </DialogActions>
        </Dialog>
    </>
}

export default BookingNew