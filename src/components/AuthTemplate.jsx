import api from "../api";
import {Box, Button, Card, TextField, Typography} from "@mui/material";
import {FullPageImg} from "../components";
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {Error} from "@mui/icons-material";

const AuthTemplate = ({subtitle, fields, submit, footer, error}) => {
    const signs = api.signs()
    const { handleSubmit, register, formState: { errors }} = useForm()
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
                    <div style={{fontSize: '36px', fontFamily: 'Cinzel'}}>{signs.company}</div>
                    <div style={{fontSize: '22px', fontFamily: 'Cinzel', marginBottom: '8vh', color: '#555'}}>{subtitle}</div>
                    <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        {fields.map((field, index) =>
                            <Box sx={{minHeight: '70px'}}>
                                <TextField
                                    type={field.type ? field.type : 'text'}
                                    size='small'
                                    label={field.label}
                                    variant="outlined"
                                    sx={{width: {sm: '300px'}}}
                                    {... register(field.register, field.validator)}
                                    error={errors[field.register] || field.valid !== ''}
                                    helperText={errors[field.register] ? errors[field.register].message : field.valid}
                                />
                            </Box>
                        )}
                        <Box sx={{display: 'flex', gap: '5px', height: '25px', marginBottom: '15px'}}>
                            {error !== '' ? <Error fontSize='small' color='error'/> : ' '}
                            <Typography variant='subtitle2' color='error' >
                                {error}
                            </Typography>
                        </Box>
                        <Button type='submit' variant="contained" sx={{marginBottom: '8vh', width: '150px'}}>{submit.label}</Button>
                    </form>
                    {footer.map((item, index) =>
                        <Typography variant='subtitle1'>
                            <span>{item.prelabel} </span>
                            <NavLink to={item.path} style={{textDecoration: 'none', color: '#1F345F'}}>{item.label}</NavLink>
                            <span>{item.postlabel} </span>
                        </Typography>
                    )}
                    <Typography variant='subtitle1'>
                        <NavLink to='/' style={{textDecoration: 'none', color: '#1F345F'}}>Home</NavLink>
                    </Typography>
                </Card>
            </Box>
        </FullPageImg>
    )
}

export default AuthTemplate