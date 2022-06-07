import api from "../api";
import {Box, Button, Card, TextField, Typography} from "@mui/material";
import {FullPageImg} from "../components";
import {NavLink} from "react-router-dom";
import {Error} from "@mui/icons-material";
import {paths} from "../pages";

const AuthTemplate = ({form, subtitle, fields, submit_btn_text, fieldSubmitErrors, otherSubmitErrors, handleSubmit, footer}) => {
    const signs = api.signs()
    return(
        <FullPageImg img={signs.img} color='black'>
            <Box sx={{display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
                <Card sx={{boxSizing: 'border-box', padding: {xs: '60px 35px', sm: '75px 90px'},  minHeight: '76vh', maxHeight: '95vh', overflow: 'auto', scrollbarWidth: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{fontSize: '36px', fontFamily: 'Cinzel'}}>{signs.company}</div>
                    <div style={{fontSize: '22px', fontFamily: 'Cinzel', marginBottom: '8vh', color: '#555'}}>{subtitle}</div>
                    <form onSubmit={form.handleSubmit((data) => handleSubmit(data))} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        {fields.map((field, index) =>
                            <Box key={index} sx={{minHeight: '70px'}}>
                                <TextField
                                    type={field.type ? field.type : 'text'}
                                    size='small'
                                    label={field.label}
                                    variant="outlined"
                                    sx={{width: {sm: '300px'}}}
                                    {... form.register(field.register, field.validator)}
                                    error={form.formState.errors[field.register] || fieldSubmitErrors[field.register].value}
                                    helperText={form.formState.errors[field.register]
                                        ? form.formState.errors[field.register].message
                                        : fieldSubmitErrors[field.register].value
                                            ? fieldSubmitErrors[field.register].message
                                            : ''}
                                    inputProps={field.inputProps !== undefined ? field.inputProps : {}}
                                />
                            </Box>
                        )}
                        <Box sx={{marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '25px'}}>
                            {otherSubmitErrors.map((error, index) =>
                                <Box key={index} sx={{display: 'flex', gap: '5px', height: '25px'}}>
                                    <Error fontSize='small' color='error'/>
                                    <Typography variant='subtitle2' color='error'>
                                        {error}
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                        <Button type='submit' variant="contained" sx={{marginBottom: '8vh', width: '150px'}}>{submit_btn_text}</Button>
                    </form>
                    {footer}
                    <Typography variant='subtitle1'>
                        <NavLink to={paths.welcome} style={{textDecoration: 'none', color: '#1F345F'}}>Home</NavLink>
                    </Typography>
                </Card>
            </Box>
        </FullPageImg>
    )
}

export default AuthTemplate