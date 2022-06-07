import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {
    BookingPage,
    DashboardBookingCalendarPage,
    DashboardBookingListPage,
    DashboardBookingPage,
    DashboardPage,
    GalleryPage,
    paths,
    SignInPage,
    SignUpPage,
    WelcomePage
} from "./pages";
import {createTheme, ThemeProvider} from "@mui/material";

const App = () => {
    return(
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route index element={<WelcomePage/>}/>
                    <Route path={paths.gallery} element={<GalleryPage/>}/>
                    <Route path={paths.sign_in} element={<SignInPage/>}/>
                    <Route path={paths.sign_in_admin} element={<SignInPage/>}/>
                    <Route path={paths.sign_up} element={<SignUpPage/>}/>
                    <Route path={paths.book} element={<BookingPage/>}/>
                    <Route path={paths.dashboard} element={<DashboardPage/>}>
                        <Route index element={<Navigate to={paths.dashboard_booking} replace />} />
                        <Route path={paths.dashboard_booking} element={<DashboardBookingPage/>}>
                            <Route index element={<Navigate to={paths.dashboard_booking_list} replace />} />
                            <Route path={paths.dashboard_booking_list} element={<DashboardBookingListPage/>}/>
                            <Route path={paths.dashboard_booking_calendar} element={<DashboardBookingCalendarPage/>}/>
                        </Route>
                    </Route>
                    <Route path={paths.dashboard_admin} element={<DashboardPage/>}/>
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