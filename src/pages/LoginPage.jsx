import api from "../api";
import {Box, Button, TextField, Typography} from "@mui/material";
import {FullPageImg} from "../components";
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useState} from "react";

const LoginPage = () => {
    const signs = api.signs()
    const { handleSubmit, register} = useForm()
    const [loginError, setLoginError] = useState(null)

    const onSubmit = data => {
        const token = api.signin(data).token
        console.log(token)
        setLoginError(null)
        if(token === null)
            setLoginError('Authentication failed')
    }

    return(
        <FullPageImg img={signs.img} color='black'>
            <Box sx={{display: 'flex', width: '100vw', height: '90vh', justifyContent: 'center', alignItems: 'center'}}>
                <Box sx={{border: '1px solid #ddd', background: '#fff', borderRadius: '15px', padding: '75px 90px', boxShadow: '0px 2px 3px 0px rgba(0,0,0,0.5);', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{fontSize: '36px', fontFamily: 'Cinzel', marginBottom: '8vh'}}>{signs.company}</div>
                    <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <TextField size='small' label="Login" variant="outlined" sx={{width: '300px'}}/>
                        <TextField size='small' label="Password" variant="outlined" sx={{width: '300px'}}/>
                    </form>
                    <Button variant="contained" sx={{marginTop: '5vh', marginBottom: '5vh', width: '150px'}}>Sign in</Button>
                    <Typography variant='subtitle1'>
                        <span>Don't you have account yet? </span>
                        <NavLink to='/signup' style={{textDecoration: 'none', color: '#1F345F'}}>Sign up</NavLink>
                    </Typography>
                    <Typography variant='subtitle1'>
                        <NavLink to='/anonymous-book' style={{textDecoration: 'none', color: '#1F345F'}}>
                            Booking
                        </NavLink>
                        <span> without account</span>
                    </Typography>
                    <Typography variant='subtitle1'>
                        <NavLink to='/' style={{textDecoration: 'none', color: '#1F345F'}}>Home</NavLink>
                    </Typography>
                </Box>
            </Box>
        </FullPageImg>
    )
}

export default LoginPage