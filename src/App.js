import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {
    BookingPage,
    DashboardBookingCalendarPage,
    DashboardBookingListPage,
    DashboardBookingPage,
    DashboardPage,
    GalleryPage,
    paths, Secure,
    SignInPage,
    SignUpPage,
    WelcomePage
} from "./pages";
import {createTheme, ThemeProvider} from "@mui/material";
import api from "./api"

const App = () => {
    return(
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route index element={<WelcomePage/>}/>
                    <Route path={paths.gallery} element={<GalleryPage/>}/>
                    <Route path={paths.sign_in} element={<SignInPage/>}/>
                    {/*<Route path={paths.sign_in} element={<Secure
                        secure={() => localStorage.getItem('jwt') !== null && api.check_jwt(localStorage.getItem('jwt'))}
                        correct={<SignInPage/>}
                        failed={<Navigate to={paths.dashboard}/>}
                    />}/>*/}
                    <Route path={paths.sign_in_admin} element={<SignInPage/>}/>
                    {/*<Route path={paths.sign_in_admin} element={<Secure
                        secure={() => localStorage.getItem('jwt') !== null && api.check_admin_jwt(localStorage.getItem('jwt'))}
                        correct={<SignInPage/>}
                        failed={<Navigate to={paths.dashboard_admin}/>}
                    />}/>*/}
                    <Route path={paths.sign_up} element={<SignUpPage/>}/>
                    <Route path={paths.book} element={<BookingPage/>}/>
                    <Route path={paths.dashboard} element={<DashboardPage/>}>
                        <Route index element={<Navigate to={paths.dashboard_booking}/>}/>
                        {/*<Route index element={<Secure
                            secure={() => localStorage.getItem('jwt') === null || !api.check_jwt(localStorage.getItem('jwt'))}
                            correct={<Navigate to={paths.dashboard_booking}/>}
                            failed={<Navigate to={paths.sign_in}/>}/>} />*/}
                        <Route path={paths.dashboard_booking} element={<DashboardBookingPage/>}>
                            <Route index element={<Navigate to={paths.dashboard_booking_list} replace />} />
                            <Route path={paths.dashboard_booking_list} element={<DashboardBookingListPage/>}/>
                            <Route path={paths.dashboard_booking_calendar} element={<DashboardBookingCalendarPage/>}/>
                        </Route>
                    </Route>
                    <Route path={paths.dashboard_admin} element={<Navigate to={paths.dashboard_admin_booking}/>}/>
                    {/*<Route path={paths.dashboard_admin} element={<Secure
                        secure={() => localStorage.getItem('jwt') === null || !api.check_admin_jwt(localStorage.getItem('jwt'))}
                        correct={<Navigate to={paths.dashboard_admin_booking}/>}
                        failed={<Navigate to={paths.sign_in_admin}/>}/>} />*/}
                </Routes>
            </Router>
        </ThemeProvider>
    )
}

export default App

const theme = createTheme({
    palette: {
        primary: {
            main: '#1F345F'
        },
        secondary: {
            main: '#ddd'
        }
    }
})