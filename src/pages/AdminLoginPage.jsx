import AuthTemplate from "../components/AuthTemplate";
import {useState} from "react";

const AdminLoginPage = () => {
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [error, setError] = useState('Authentication failed')

    const fields = [{
        label: "Username",
        register: "username",
        validator: {
            required: "Required field",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
            }},
        errors: [],
        valid: usernameError
    },{
        label: "Password",
        register: "password",
        type: "password",
        validator: {
            required: "Required field",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
            }},
        errors: [],
        valid: passwordError
    }]
    const submit = {
        label: "Sign in",
        callback: console.log('callback')
    }
    const footer = [{
        prelabel: "Go back to user ",
        label: "sign in",
        postlabel: ' panel.',
        path: "/login"
    }]
    return <AuthTemplate subtitle='Admin' fields={fields} error={error} submit={submit} footer={footer}/>
}

export default AdminLoginPage