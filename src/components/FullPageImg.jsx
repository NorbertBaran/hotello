import {Box} from "@mui/material";

const FullPageImg = ({img, color='#ddd', children}) => {
    return(
        <Box sx={{
            //Full page image
            backgroundImage: `url(${img})`,
            height: '100vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            //Other
            color: `${color}`
        }}>
            {children}
        </Box>
    )
}

export default FullPageImg