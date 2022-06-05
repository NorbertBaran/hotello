import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {GalleryPage, WelcomePage} from "./pages";
import {createTheme, ThemeProvider} from "@mui/material";
import LoginPage from "./pages/LoginPage";
import BookPage from "./pages/BookPage";
import SignupPage from "./pages/SignupPage";
import AdminLoginPage from "./pages/AdminLoginPage";

const App = () => {
    return(
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route index element={<WelcomePage/>}/>
                    <Route path='gallery' element={<GalleryPage/>}/>
                    <Route path='login' element={<LoginPage/>}/>
                    <Route path='signup' element={<SignupPage/>}/>
                    <Route path='book' element={<BookPage/>}/>
                    <Route path='admin' element={<AdminLoginPage/>}/>
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