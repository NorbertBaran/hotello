import api from "../api";
import {paths} from "../pages";
import {Navigate} from "react-router-dom";

export const SignedUser = ({element}) => {
    const signed_in = () => localStorage.getItem('jwt') && api.check_jwt(localStorage.getItem('jwt'))
    return signed_in() ? element : <Navigate to={paths.sign_in} replace/>
}

export const SignedAdmin = ({element}) => {
    const signed_in_admin = () => localStorage.getItem('jwt') && api.check_admin_jwt(localStorage.getItem('jwt'))
    return signed_in_admin() ? element : <Navigate to={paths.sign_in_admin} replace/>
}

export const UnsignedUser = ({element}) => {
    const signed_in = () => localStorage.getItem('jwt') && api.check_jwt(localStorage.getItem('jwt'))
    return !signed_in() ? element : <Navigate to={paths.dashboard} replace/>
}

export const UnsignedAdmin = ({element}) => {
    const signed_in_admin = () => localStorage.getItem('jwt') && api.check_admin_jwt(localStorage.getItem('jwt'))
    return !signed_in_admin() ? element : <Navigate to={paths.sign_in_admin} replace/>
}