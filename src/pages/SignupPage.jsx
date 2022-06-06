import AuthTemplate from "../components/AuthTemplate";
import {useState} from "react";
import api from "../api";
import {useForm} from "react-hook-form";

const SignupPage = () => {
    /*const [submitErrors, setSubmitErrors] = useState({
        first_name: [],
        last_name: [],
        email: [],
        password: [],
        password_repeat: [],
        other: [{
            state: false,
            validate: "",
            message: "Authentication failed"
        }]
    })
    const form = useForm()

    const fields = [{
        label: "First name",
        register: "first_name",
        validator: {
            required: "Required field",
        }
    },{
        label: "Last name",
        register: "last_name",
        validator: {
            required: "Required field",
        }
    },{
        label: "Email",
        register: "email",
        validator: {
            required: "Required field",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
            }
        }
    },{
        label: "Password",
        register: "password",
        type: "password",
        validator: {
            required: "Required field",
        }
    },{
        label: "Password repeat",
        register: "password_repeat",
        type: "password",
        validator: {
            required: "Required field",
            validate: (val) => {
                if (form.watch("password") !== val)
                    return "Passwords don't match"
            }
        }
    }]
    const mainError = {
        label: submitErrors.other[0].message,
        setter: (value) => setSubmitErrors({
            first_name: submitErrors.first_name,
            last_name: submitErrors.last_name,
            email: submitErrors.email,
            password: submitErrors.password,
            password_repeat: submitErrors.password_repeat,
            other: [{
                value: value,
                message: "Authentication failed"
            }]
        })
    }
    const submit = {
        label: "Sign up",
        callback: (data) => {
            const token = api.signin(data).token
            if(token === null)
                mainError.setter(true)
            else
                //TODO: Add token to session
                console.log(token)
        }
    }
    const footer = [{
        prelabel: "Do you have account? ",
        label: "Sign in",
        postlabel: "",
        path: "/login"
    },{
        prelabel: "",
        label: "Booking",
        postlabel: ' without account',
        path: "/book"
    }]
    return <AuthTemplate form={form} subtitle='Sign Up' fields={fields} mainError={mainError} submit={submit} footer={footer}/>*/
    return <>Signup page</>
}

export default SignupPage