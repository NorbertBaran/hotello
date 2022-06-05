import api from '../api'
import {FullPageImg} from "../components";
import {useState} from "react";
import WelcomeLabel from "../components/WelcomeLabel";
import {Box, Button} from "@mui/material";
import {ArrowBack, ArrowForward} from "@mui/icons-material";

const GalleryPage = () => {
    const gallery = api.gallery()
    const [active, setActive] = useState(0)
    const [thumbnailsOffset, setThumbnailsOffset] = useState(0)
    return(
        <FullPageImg img={gallery.images[active]}>
            <WelcomeLabel btn={{label: 'Home', nav: '/'}}/>
            <Box sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                zIndex: 2,
                padding: '5px'
            }}>
                <Button color='secondary' size='small' sx={{width: '65px', height: '110px'}} onClick={() => thumbnailsOffset >= 190 ? setThumbnailsOffset(thumbnailsOffset-190) : setThumbnailsOffset(0)}>
                    <ArrowBack/>
                </Button>
            </Box>
            <Box sx={{
                position: 'fixed',
                bottom: 0,
                // width: '100vw',
                left: '75px',
                width: 'calc(100vw - 150px)',
                overflow: 'hidden',
                height: '120px',
                display: 'flex',
                zIndex: 1,
                boxSizing: 'border-box',
                padding: '5px 0',
            }}>
                <Box sx={{
                    display: 'flex',
                    position: 'relative',
                    left: `${-thumbnailsOffset}px`
                }}>
                    {gallery.images.map((image, index) =>
                        <img src={image} style={index === active ? {width: '190px', objectFit: 'cover', margin: 0} : {width: '180px', objectFit: 'cover', margin: '5px', cursor: 'pointer'}} onClick={()=>setActive(index)}/>
                    )}
                </Box>
            </Box>
            <Box sx={{
                position: 'fixed',
                bottom: 0,
                right: 0,
                zIndex: 2,
                boxSizing: 'border-box',
                padding: '5px'
            }}>
                <Button color='secondary' size='small' sx={{width: '65px', height: '110px'}} onClick={() => {
                    if(190 * gallery.images.length > window.innerWidth - 150)
                        thumbnailsOffset + (window.innerWidth - 150) <= 190 * (gallery.images.length - 1) ? setThumbnailsOffset(thumbnailsOffset+190) : setThumbnailsOffset(190 * gallery.images.length  - (window.innerWidth - 150))
                }}>
                    <ArrowForward/>
                </Button>
            </Box>
        </FullPageImg>
    )
}

export default GalleryPage