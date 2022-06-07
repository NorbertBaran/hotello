import AuthTemplate from "../components/AuthTemplate";
import {useState} from "react";
import api from "../api";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

const SignupPage = () => {
    const form = useForm()
    const navigate = useNavigate()
    const [created, setCreated] = useState(null)

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

    const [submit, setSubmit] = useState({
        _title: "Sign up",
        first_name: {
            state: true,
            validators: []
        },
        last_name: {
            state: true,
            validators: []
        },
        email: {
            state: true,
            validators: [{
                state: true,
                validate: (data) => {
                    let newSubmit = submit
                    const exist = api.email(data.email).exist
                    const state = !exist
                    newSubmit.email.state = state
                    newSubmit.email.validators[0] = state
                    setSubmit(newSubmit)
                },
                message: "User exists"
            }]
        },
        password: {
            state: true,
            validators: []
        },
        password_repeat: {
            state: true,
            validators: []
        },
        _other: {
            state: true,
            validators: [{
                state: true,
                validate: (data) => {
                    let newSubmit = submit
                    const _created = created !== null
                    console.log(_created)
                    newSubmit._other.state = _created
                    newSubmit._other.validators[0] = _created
                    setSubmit(newSubmit)
                },
                message: "Server error. Signup later."
            }]
        },
        _payload: null,
        _callback: (data) => {
            const created = api.signup(data)
            setCreated(created)
            if(created)
                navigate('/login')
        }
    })

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
    return <AuthTemplate form={form} subtitle='Sign Up' fields={fields} submit={submit} footer={footer}/>
}

export default SignupPage