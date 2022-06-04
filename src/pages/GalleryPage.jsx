import api from '../api'
import {FullPageImg} from "../components";
import {useState} from "react";
import WelcomeLabel from "../components/WelcomeLabel";
import {Box, Button} from "@mui/material";
import {ArrowBack, ArrowForward} from "@mui/icons-material";

const GalleryPage = () => {
    const gallery = api.gallery()
    const [active, setActive] = useState(0)
    return(
        <FullPageImg img={gallery.images[active]}>
            <WelcomeLabel btn={{label: 'Home', nav: '/'}}/>
            <Box sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                zIndex: 2
            }}>
                <Button color='secondary' size='small' sx={{width: '65px', height: '120px'}}>
                    <ArrowBack/>
                </Button>
            </Box>
            <Box sx={{
                position: 'fixed',
                bottom: 0,
                width: '100vw',
                /*left: '65px',
                width: 'calc(100vw - 130px)',
                overflow: 'hidden',*/
                height: '120px',
                display: 'flex',
                cursor: 'pointer',
                zIndex: 1
            }}>
                {gallery.images.map((image, index) =>
                    <img src={image} width='180px' style={index === active ? {boxSizing: 'border-box', borderBottom: '4px solid #1F345F', objectFit: 'cover'} : {objectFit: 'cover', margin: '5px'}} onClick={()=>setActive(index)}/>
                )}

            </Box>
            <Box sx={{
                position: 'fixed',
                bottom: 0,
                right: 0,
                zIndex: 2
            }}>
                <Button color='secondary' size='small' sx={{width: '65px', height: '120px'}}>
                    <ArrowForward/>
                </Button>
            </Box>
        </FullPageImg>
    )
}

export default GalleryPage