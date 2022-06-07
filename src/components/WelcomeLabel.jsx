import {Box, Button, Typography} from "@mui/material";
import {LocationOnOutlined, PhoneOutlined} from "@mui/icons-material";
import api from "../api";

const LocationTypography = ({welcome, desktop='none', mobile='none'}) => {
    return(
        <Typography variant='body2' sx={{display: {xs: mobile, md: desktop}, width: {md: '250px'}}}>
            <LocationOnOutlined sx={{fontSize: '16px', marginRight: '10px', position: 'relative', top: '2px'}}/>
            {welcome.location}
        </Typography>
    )
}

const WelcomeLabel = ({btn, appbar= false}) => {
    const welcome = api.welcome()

    return(
        <Box sx={{
            display: 'flex',
            flexDirection: {xs: 'column', md: 'row'},
            justifyContent: {xs: 'center', md: 'space-between'},
            alignItems: 'center',
            gap: '15px',
            height: {xs: '200px', md: '100px', ...(appbar && {xs: '150px'})},
            padding: '0 50px',
            color: 'white'
        }}>
            <LocationTypography welcome={welcome} desktop='block'/>
            <div style={{fontSize: '40px', fontFamily: 'Cinzel'}}>{welcome.company}</div>
            <Box sx={{width: {md: '230px'}, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: {xs: '50px', md: '25px'}}}>
                <Typography variant='body2' sx={{...(appbar && {display: {xs: 'none', md: 'block'}})}}>
                    <PhoneOutlined sx={{fontSize: '16px', marginRight: '10px', position: 'relative', top: '2px'}}/>
                    {welcome.phone}
                </Typography>
                <Button onClick={btn.onClick} variant='outlined' color='secondary' size='small' sx={{width: '95px'}}>{btn.label}</Button>
            </Box>
            {!appbar ? <LocationTypography welcome={welcome} mobile='block'/> : null}
        </Box>
    )
}

export default WelcomeLabel