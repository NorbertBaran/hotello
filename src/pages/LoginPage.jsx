import api from "../api";
import {Box, Button, Card, TextField, Typography} from "@mui/material";
import {FullPageImg} from "../components";
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {Error} from "@mui/icons-material";

const LoginPage = () => {
    const signs = api.signs()
    const { handleSubmit, register} = useForm()
    const [signinError, setSigninError] = useState('')

    const onSubmit = data => {
        const token = api.signin(data).token
        setSigninError('')
        if(token === null)
            setSigninError('Authentication failed')
    }

    return(
        <FullPageImg img={signs.img} color='black'>
            <Box sx={{display: 'flex', width: '100vw', height: '90vh', justifyContent: 'center', alignItems: 'center'}}>
                <Card sx={{padding: {xs: '60px 35px', sm: '75px 90px'}, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{fontSize: '36px', fontFamily: 'Cinzel', marginBottom: '8vh'}}>{signs.company}</div>
                    <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
                        <TextField size='small' label="Username" variant="outlined" sx={{width: {sm: '300px'}}} {...register('username')}/>
                        <TextField type='password' size='small' label="Password" variant="outlined" sx={{width: {sm: '300px'}}} {...register('password')}/>
                        <Box sx={{display: 'flex', gap: '5px', height: '25px', paddingTop: '5px'}}>
                            {signinError !== '' ? <Error fontSize='small' color='error'/> : ' '}
                            <Typography variant='subtitle2' color='error' >
                                {signinError}
                            </Typography>
                        </Box>
                        <Button type='submit' variant="contained" sx={{marginBottom: '8vh', width: '150px'}}>Sign in</Button>
                    </form>
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
                </Card>
            </Box>
        </FullPageImg>
    )
}

export default LoginPage