import {AuthTemplate, AuthFooterTypography} from "../components";
import {useState} from "react";
import api from "../api";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {paths} from "./index"

const Footer = () => {
    return <>
        <AuthFooterTypography pre_label="Do you have account? " link='Sign in' path={paths.sign_in}/>
        <AuthFooterTypography link='Booking' path={paths.booking} post_label=' without account'/>
    </>
}

const SignUpPage = () => {
    const form = useForm()
    const fields = [
        {label: "First name", register: "first_name", validator: {required: "Required field"}},
        {label: "Last name", register: "last_name", validator: {required: "Required field",}},
        {label: "Email", register: "email", validator: {required: "Required field", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address"}}},
        {label: "Phone", register: "phone", validator: {required: "Required field", pattern: {value: /^[\+]?[0-9]*$/i, message: "Invalid phone number"}}},
        {label: "Password", register: "password", type: "password", validator: {required: "Required field"}},
        {label: "Password repeat", register: "password_repeat", type: "password", validator: {required: "Required field", validate: (val) => {
            if (form.watch("password") !== val)
                return "Passwords don't match"
        }}}]
    const [fieldSubmitErrors, setFieldSubmitErrors] = useState({
        first_name: {value: false, message: ''},
        last_name: {value: false, message: ''},
        email: {value: false, message: ''},
        phone: {value: false, message: ''},
        password: {value: false, message: ''},
        password_repeat: {value: false, message: ''}
    })
    const [otherSubmitErrors, setOtherSubmitErrors] = useState([])
    const navigate = useNavigate()
    const handleSubmit = (data) => {
        const email_state = api.email(data.email)
        if(email_state.exist){
            let newFieldSubmitErrors = fieldSubmitErrors
            newFieldSubmitErrors.email.value = true
            newFieldSubmitErrors.email.message = 'User email exists'
            setFieldSubmitErrors(newFieldSubmitErrors)
        } else {
            const created = api.sign_up(data).created
            if(!created)
                setOtherSubmitErrors(['Server error. Sign up later.'])
            else
                navigate(paths.sign_in)
        }
    }
    return <AuthTemplate
        form={form}
        subtitle='Sign Up'
        fields={fields}
        submit_btn_text='Sign Up'
        fieldSubmitErrors={fieldSubmitErrors}
        otherSubmitErrors={otherSubmitErrors}
        handleSubmit={handleSubmit}
        footer={<Footer/>}/>
}

export default SignUpPage