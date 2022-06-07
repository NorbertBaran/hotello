import AuthTemplate from "../components/AuthTemplate";
import AuthFooterTypography from "../components/AuthFooterTypography";
import {useState} from "react";
import api from "../api";
import {useNavigate, useLocation} from "react-router-dom";
import {useForm} from "react-hook-form";
import {paths} from "./index";

const Footer = () => {
    const location = useLocation()
    return <>
        {location.pathname === '/sign_in' ?
            <>
                <AuthFooterTypography pre_label="Don't you have account yet? " link='Sign up' path='/sign_up'/>
                <AuthFooterTypography link='Booking' path={paths.book} post_label=' without account'/>
                <AuthFooterTypography link='Admin' path={paths.sign_in_admin} post_label=' panel.'/>
            </> : <AuthFooterTypography pre_label="Go back to user  " link='sign in' path={paths.sign_in} post_label=' panel.'/>
        }
    </>
}

const SignInPage = () => {
    const fields = [
        {label: "Email", register: "email", validator: {}},
        {label: "Password", register: "password", validator: {}, type: "password"}
    ]
    const [fieldSubmitErrors, setFieldSubmitErrors] = useState({
        email: {value: false, message: ''},
        password: {value: false, message: ''}
    })
    const [otherSubmitErrors, setOtherSubmitErrors] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    const handleSubmit = (data) => {
        const jwt = api.signin(data)
        if(jwt.token === null || (location.pathname === paths.sign_in_admin && jwt.role !== 'admin')){
            let newFieldSubmitErrors = fieldSubmitErrors
            newFieldSubmitErrors.email.value = true
            newFieldSubmitErrors.password.value = true
            setFieldSubmitErrors(newFieldSubmitErrors)
            setOtherSubmitErrors(['Authentication failed'])
        } else {
            localStorage.setItem('jwt', jwt)
            if(location.pathname === paths.sign_in)
                navigate(paths.dashboard)
            else
                navigate(paths.dashboard_admin)
        }
    }
    return <AuthTemplate
        form={useForm()}
        subtitle={location.pathname === paths.sign_in ? 'Sign In' : 'Admin'}
        fields={fields}
        submit_btn_text='Sign In'
        fieldSubmitErrors={fieldSubmitErrors}
        otherSubmitErrors={otherSubmitErrors}
        handleSubmit={handleSubmit}
        footer={<Footer/>}/>
}

export default SignInPage