import {Box} from "@mui/material";

const FullPageImg = ({img, children}) => {
    return(
        <Box sx={{
            backgroundImage: `url(${img})`,
            height: '100vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            {children}
        </Box>
    )
}

export default FullPageImg