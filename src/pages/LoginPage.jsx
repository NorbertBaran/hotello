import AuthTemplate from "../components/AuthTemplate";
import {useState} from "react";
import api from "../api";
import {useForm} from "react-hook-form";

const AdminLoginPage = () => {
    const [token, setToken] = useState(null)
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
            state: false,
            validators: [{
                state: false,
                callback: (data) => {
                    let newSubmit = submit
                    if(true){
                        newSubmit.email.validators[0].state = true
                        newSubmit.email.state = true
                    }
                    setSubmit(submit)
                },
                message: "Test1"
            }]
        },
        password: {
            state: true,
            validators: []
        },
        _other: {
            state: true,
            validators: [{
                state: true,
                callback: (data) => {
                    let newSubmit = submit
                    console.log(data)
                    const result = api.signin(data).token
                    setToken(result)
                    console.log(result)
                    console.log(token)
                    const state = result !== null;
                    newSubmit.email.state = state
                    newSubmit.password.state = state
                    newSubmit._other.state = state
                    newSubmit._other.validators[0].state = state
                    setSubmit(newSubmit)
                },
                message: "Authentication failed"
            }]
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