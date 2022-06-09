import {paths} from "./index";
import {AppBar, ListItemIcon, Menu, MenuItem} from "@mui/material";
import {useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {Logout, Settings} from "@mui/icons-material";
import {WelcomeLabel} from "../components";

const DashboardPage = () => {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return <>
        <AppBar position='sticky'>
            <WelcomeLabel appbar={true} btn={{label: 'Menu', onClick: handleClick}}/>
            <Menu
                id="menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <MenuItem onClick={() => navigate(paths.dashboard_settings)} sx={{minWidth: {xs: '300px', md: '150px'}}}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={() => {
                    localStorage.removeItem('jwt')
                    navigate(paths.sign_in)
                }
                }>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </AppBar>
        <Outlet/>
    </>
}

export default DashboardPage