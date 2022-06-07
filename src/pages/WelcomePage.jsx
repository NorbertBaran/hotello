import api from '../api'
import {Box, Button, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {FullPageImg} from "../components";
import WelcomeLabel from "../components/WelcomeLabel";
import {paths} from "./index";

const WelcomePage = () => {
    const welcome = api.welcome()
    return(
        <FullPageImg img={welcome.img}>
            <WelcomeLabel btn={{label: 'Book now', nav: paths.sign_in}}/>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '25px',
                height: {xs: 'calc(100vh - 300px)', md: 'calc(100vh - 200px)'},
                padding: '0 150px',
                textAlign: 'center'
            }}>
                <Typography variant='h2' sx={{ overflow: 'hidden', maxHeight: '8.5em'}}>{welcome.slogan}</Typography>
                <NavLink to={paths.gallery}>
                    <Button variant='contained' size='large' sx={{width: '250px'}}>Gallery</Button>
                </NavLink>
            </Box>
        </FullPageImg>
    )
}

export default WelcomePage