import {NavLink} from "react-router-dom";
import {Typography} from "@mui/material";

const AuthFooterTypography = ({pre_label, path, link, post_label}) => {
    return(
        <Typography variant='subtitle1'>
            <span>{pre_label}</span>
            <NavLink to={path} style={{textDecoration: 'none', color: '#1F345F'}}>{link}</NavLink>
            <span>{post_label}</span>
        </Typography>
    )
}

export default AuthFooterTypography