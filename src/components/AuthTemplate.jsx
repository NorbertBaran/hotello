import api from "../api";
import {Box, Button, Card, TextField, Typography} from "@mui/material";
import {FullPageImg} from "../components";
import {NavLink} from "react-router-dom";
import {Error} from "@mui/icons-material";

const AuthTemplate = ({form, subtitle, fields, submit, footer}) => {
    const signs = api.signs()

    const onSubmit = data => {
        //On submit validations maker
        fields.forEach(field => {
            submit[field.register].validators.forEach(validator => {
                validator.validate(data)
            })
        })
        submit._other.validators.forEach(validator => {
            validator.validate(data)
        })
        //On submit validations checker
        let correct = true
        fields.forEach(field => {
            if(!submit[field.register].state)
                correct = false
        })
        if(!submit._other.state)
            correct = false
        //Submit
        if(correct)
            submit._callback(data)
    }

    const getSubmitMessage = (field_name) => {
        let message = ''
        submit[field_name].validators.forEach(validator => {
            if(validator.state === false)
                message = validator.message
        })
        return message
    }

    return(
        <FullPageImg img={signs.img} color='black'>
            <Box sx={{display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
                <Card sx={{boxSizing: 'border-box', padding: {xs: '60px 35px', sm: '75px 90px'},  minHeight: '75vh', maxHeight: '95vh', overflow: 'auto', scrollbarWidth: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{fontSize: '36px', fontFamily: 'Cinzel'}}>{signs.company}</div>
                    <div style={{fontSize: '22px', fontFamily: 'Cinzel', marginBottom: '8vh', color: '#555'}}>{subtitle}</div>
                    <form onSubmit={form.handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        {fields.map((field, index) =>
                            <Box key={index} sx={{minHeight: '70px'}}>
                                <TextField
                                    type={field.type ? field.type : 'text'}
                                    size='small'
                                    label={field.label}
                                    variant="outlined"
                                    sx={{width: {sm: '300px'}}}
                                    {... form.register(field.register, field.validator)}
                                    error={form.formState.errors[field.register] || !submit[field.register].state}
                                    helperText={form.formState.errors[field.register]
                                        ? form.formState.errors[field.register].message
                                        : !submit[field.register].state
                                            ? getSubmitMessage(field.register)
                                            : ''}
                                />
                            </Box>
                        )}
                        <Box sx={{marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            {submit._other.validators.map((validator, index) =>
                                <Box key={index} sx={{display: 'flex', gap: '5px', height: '25px'}}>
                                    {validator.state === false ? <Error fontSize='small' color='error'/> : ' '}
                                    <Typography variant='subtitle2' color='error' >
                                        {validator.state === false ? validator.message : ' '}
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                        <Button type='submit' variant="contained" sx={{marginBottom: '8vh', width: '150px'}}>{submit._title}</Button>
                    </form>
                    {footer.map((item, index) =>
                        <Typography key={index} variant='subtitle1'>
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