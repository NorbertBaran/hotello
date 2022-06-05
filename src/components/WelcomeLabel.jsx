import {Box, Button, Typography} from "@mui/material";
import {LocationOnOutlined, PhoneOutlined} from "@mui/icons-material";
import api from "../api";
import {NavLink} from "react-router-dom";

const WelcomeLabel = ({btn}) => {
    const welcome = api.welcome()
    return(
        <Box sx={{
            display: 'flex',
            flexDirection: {xs: 'column', md: 'row'},
            justifyContent: {xs: 'center', md: 'space-between'},
            alignItems: 'center',
            gap: '15px',
            height: {xs: '200px', md: '100px'},
            padding: '0 50px',
            color: 'white'
        }}>
            <Typography variant='body2' sx={{display: {xs: 'none', md: 'block'}, width: {md: '230px'}}}>
                <LocationOnOutlined sx={{fontSize: '16px', marginRight: '10px', position: 'relative', top: '2px'}}/>
                {welcome.location}
            </Typography>
            <div style={{fontSize: '40px', fontFamily: 'Cinzel'}}>{welcome.company}</div>
            <Box sx={{width: {md: '230px'}, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: {xs: '50px', md: '25px'}}}>
                <Typography variant='body2'>
                    <PhoneOutlined sx={{fontSize: '16px', marginRight: '10px', position: 'relative', top: '2px'}}/>
                    {welcome.phone}
                </Typography>
                <NavLink to={btn.nav}>
                    <Button variant='outlined' color='secondary' size='small' sx={{width: '95px'}}>{btn.label}</Button>
                </NavLink>
            </Box>
            <Typography variant='body2' sx={{display: {md: 'none'}, width: {md: '250px'}}}>
                <LocationOnOutlined sx={{fontSize: '16px', marginRight: '10px', position: 'relative', top: '2px'}}/>
                {welcome.location}
            </Typography>
        </Box>
    )
}

export default WelcomeLabel