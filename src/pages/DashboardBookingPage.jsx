import {Tab, Tabs} from "@mui/material";
import {Outlet, useNavigate} from "react-router-dom";
import {paths} from "./index";
import {useState} from "react";

const DashboardBookingPage = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue)
        if(newValue === 0)
            navigate(paths.dashboard_booking_list)
        else
            navigate(paths.dashboard_booking_calendar)
    };

    return <>
        <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Booking list" sx={{width: '50vw'}}/>
            <Tab label="Calendar" sx={{width: '50vw'}}/>
        </Tabs>
        <Outlet/>
    </>
}

export default DashboardBookingPage