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

const Booking = ({booking, customer}) => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [newCustomer, setNewCustomer] = useState(customer)
    const selectRoom = (index, room_id) => {
        let tmpCustomer = newCustomer
        tmpCustomer.rooms[index].room_id = room_id
        setNewCustomer(tmpCustomer)
    }

    return <>
        <Paper sx={{padding: '25px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Typography variant='subtitle2' color='primary'>{booking.from} - {booking.to}</Typography>
            <Typography>{customer.name}</Typography>
            <Typography>{customer.last_name}</Typography>
            <Typography>{customer.phone}</Typography>
            <Box sx={{display: 'flex', gap: '10px'}}>
                <Button onClick={handleClickOpen}>Complete</Button>
                <Button variant='outlined'>Update</Button>
                <Button variant='outlined'>Delete</Button>
            </Box>
        </Paper>

        <Dialog open={open} onClose={handleClose} sx={{textAlign: 'center'}}>
            <DialogTitle>Complete booking</DialogTitle>
            <DialogContent>
                <DialogContentText sx={{paddingBottom: '10px'}}>
                    Select rooms
                </DialogContentText>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center'}}>
                    {booking.rooms.map((room, index) =>
                        <>
                            <TextField variant='outlined' size='small' label={`Room with ${room.beds} beds`} sx={{width: '300px'}}/>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label={`Room with ${room.beds} beds`}
                                onChange={(event) => selectRoom(index, event.target.value)}
                            >
                                <MenuItem value={1}>A01</MenuItem>
                                <MenuItem value={3}>A03</MenuItem>
                                <MenuItem value={4}>A04</MenuItem>
                            </Select>
                        </>
                    )}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Complete</Button>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    </>
}

export default Booking