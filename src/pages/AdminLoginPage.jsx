import AuthTemplate from "../components/AuthTemplate";
import {useState} from "react";
import api from "../api";

const AdminLoginPage = () => {
    /*const [mainErrorLabel, setMainErrorLabel] = useState('')

    const fields = [{
        label: "Username",
        register: "username",
        validator: {},
        error: mainErrorLabel
    },{
        label: "Password",
        register: "password",
        type: "password",
        validator: {},
        error: mainErrorLabel
    }]
    const mainError = {
        label: mainErrorLabel,
        setter: setMainErrorLabel
    }
    const submit = {
        label: "Sign in",
        callback: (data) => {
            const token = api.signin(data).token
            if(token === null)
                setMainErrorLabel('Authentication failed')
            else
                //TODO: Add token to session
                console.log(token)
        }
    }
    const footer = [{
        prelabel: "Go back to user ",
        label: "sign in",
        postlabel: ' panel.',
        path: "/login"
    }]
    return <AuthTemplate subtitle='Admin' fields={fields} mainError={mainError} submit={submit} footer={footer}/>*/
    return <>Admin login page</>
}

export default AdminLoginPage