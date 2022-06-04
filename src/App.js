import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {GalleryPage, WelcomePage} from "./pages";
import {createTheme, ThemeProvider} from "@mui/material";

const App = () => {
    return(
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route index element={<WelcomePage/>}/>
                    <Route path='gallery' element={<GalleryPage/>}/>
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