import AuthTemplate from "../components/AuthTemplate";
import {useState} from "react";
import api from "../api";
import {useForm} from "react-hook-form";

const AdminLoginPage = () => {
    const form = useForm()

    const fields = [{
        label: "Email",
        register: "email",
        validator: {},
    },{
        label: "Password",
        register: "password",
        type: "password",
        validator: {},
    }]

    const [submit, setSubmit] = useState({
        _title: "Sign in",
        email: {
            state: true,
            validators: []
        },
        password: {
            state: true,
            validators: []
        },
        _other: {
            state: true,
            validators: [{
                state: true,
                validate: (data) => {
                    let newSubmit = submit
                    const token = api.signin(data).token
                    const state = token !== null
                    newSubmit.email.state = state
                    newSubmit.password.state = state
                    newSubmit._other.validators[0].state = state
                    newSubmit._other.state = state
                    newSubmit._payload = {token: token}
                    setSubmit(newSubmit)
                },
                message: "Authentication failed"
            }]
        },
        _payload: null,
        _callback: (data) => {
            localStorage.setItem('jwt', submit._payload.token)
            console.log(localStorage.getItem('jwt'))
        }
    })

    const footer = [{
        prelabel: "Don't you have account yet? ",
        label: "Sign up",
        postlabel: "",
        path: "/signup"
    },{
        prelabel: "",
        label: "Booking",
        postlabel: ' without account',
        path: "/book"
    },{
        prelabel: "",
        label: "Admin",
        postlabel: ' panel.',
        path: "/admin"
    }]
    return <AuthTemplate form={form} subtitle='Sign In' fields={fields} submit={submit} footer={footer}/>
}

export default AdminLoginPage