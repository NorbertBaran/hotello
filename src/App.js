import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {
    BookedInfoPage,
    BookingPage, DashboardAdminAnalyticsPage,
    DashboardAdminBlackListAddPage,
    DashboardAdminBlackListCustomersPage, DashboardAdminBlackListPage,
    DashboardAdminBookingNewPage,
    DashboardAdminEmployeesListPage,
    DashboardAdminEmployeesNewPage, DashboardAdminRoomsAllPage,
    DashboardAdminRoomsCleanPage,
    DashboardAdminRoomsGetPage,
    DashboardAdminRoomsGivePage, DashboardAdminRoomsNewPage,
    DashboardAdminRoomsPage, DashboardAdminSettingsPage,
    DashboardAdminTasksEmployeePage,
    DashboardAdminTasksNewPage,
    DashboardAdminTasksPage,
    DashboardBookingCalendarPage,
    DashboardBookingListPage,
    DashboardBookingPage,
    DashboardEmployeesPage,
    DashboardPage,
    DashboardSettingsPage,
    GalleryPage,
    paths, SignedUpInfoPage,
    SignInPage,
    SignUpPage,
    WelcomePage
} from "./pages";
import {createTheme, ThemeProvider} from "@mui/material";
import {SignedAdmin, SignedUser, UnsignedAdmin, UnsignedUser} from "./components";

const App = () => {
    return(
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route index element={<WelcomePage/>}/>
                    <Route path={paths.gallery} element={<GalleryPage/>}/>
                    <Route path={paths.booking} element={<BookingPage/>}/>
                    <Route path={paths.booked_info} element={<BookedInfoPage/>}/>
                    <Route path={paths.sign_in} element={<UnsignedUser element={<SignInPage/>}/>}/>
                    <Route path={paths.sign_in_admin} element={<UnsignedAdmin element={<SignInPage/>}/>}/>
                    <Route path={paths.sign_up} element={<UnsignedUser element={<SignUpPage/>}/> }/>
                    <Route path={paths.signed_up_info} element={<UnsignedUser element={<SignedUpInfoPage/>}/> }/>
                    <Route path={paths.dashboard} element={<SignedUser element={<DashboardPage/>}/>}>
                        <Route index element={<Navigate to={paths.dashboard_booking}/>}/>
                        <Route path={paths.dashboard_booking} element={<DashboardBookingPage/>}>
                            <Route index element={<Navigate to={paths.dashboard_booking_list} replace />} />
                            <Route path={paths.dashboard_booking_list} element={<DashboardBookingListPage/>}/>
                            <Route path={paths.dashboard_booking_calendar} element={<DashboardBookingCalendarPage/>} />
                        </Route>
                        <Route path={paths.dashboard_settings} element={<DashboardSettingsPage/>}/>
                    </Route>
                    <Route path={paths.dashboard_admin} element={<SignedAdmin element={<DashboardPage/>}/>}>
                        <Route index element={<Navigate to={paths.dashboard_admin_booking}/>}/>
                        <Route path={paths.dashboard_admin_booking} element={<DashboardBookingPage/>}>
                            <Route index element={<Navigate to={paths.dashboard_admin_booking_list} replace />} />
                            <Route path={paths.dashboard_admin_booking_list} element={<DashboardBookingListPage/>}/>
                            <Route path={paths.dashboard_admin_booking_calendar} element={<DashboardBookingCalendarPage/>} />
                            <Route path={paths.dashboard_admin_booking_new} element={<DashboardAdminBookingNewPage/>}/>
                        </Route>
                        <Route path={paths.dashboard_admin_tasks} element={<DashboardAdminTasksPage/>}>
                            <Route index element={<Navigate to={paths.dashboard_admin_tasks}/>}/>
                            <Route path={paths.dashboard_admin_tasks_employee} element={<DashboardAdminTasksEmployeePage/>}/>
                            <Route path={paths.dashboard_admin_tasks_new} element={<DashboardAdminTasksNewPage/>}/>
                        </Route>
                        <Route path={paths.dashboard_admin_employees} element={<DashboardEmployeesPage/>}>
                            <Route index element={<Navigate to={paths.dashboard_admin_tasks}/>}/>
                            <Route path={paths.dashboard_admin_employees_list} element={<DashboardAdminEmployeesListPage/>}/>
                            <Route path={paths.dashboard_admin_employees_new} element={<DashboardAdminEmployeesNewPage/>}/>
                        </Route>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <Route path={paths.dashboard_admin_black_list} element={<DashboardAdminBlackListPage/>}>
                            <Route path={paths.dashboard_admin_black_list_customers} element={<DashboardAdminBlackListCustomersPage/>}/>
                            <Route path={paths.dashboard_admin_black_list_add} element={<DashboardAdminBlackListAddPage/>}/>
                        </Route>
                        <Route path={paths.dashboard_admin_rooms} element={<DashboardAdminRoomsPage/>}>
                        {/* Clean / All / To  give / To get keys / New  */}
                            <Route index element={<Navigate to={paths.dashboard_admin_rooms_clean}/>}/>
                            <Route path={paths.dashboard_admin_rooms_clean} element={<DashboardAdminRoomsCleanPage/>}/>
                            <Route path={paths.dashboard_admin_rooms_give} element={<DashboardAdminRoomsGivePage/>}/>
                            <Route path={paths.dashboard_admin_rooms_get} element={<DashboardAdminRoomsGetPage/>}/>
                            <Route path={paths.dashboard_admin_rooms_all} element={<DashboardAdminRoomsAllPage/>}/>
                            <Route path={paths.dashboard_admin_rooms_new} element={<DashboardAdminRoomsNewPage/>}/>
                        </Route>
                        <Route path={paths.dashboard_admin_analytics} element={<DashboardAdminAnalyticsPage/>}/>
                        <Route path={paths.dashboard_admin_settings} element={<DashboardAdminSettingsPage/>}/>
                    </Route>
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