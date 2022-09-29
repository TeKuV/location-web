import React, { useRef, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CarouselItem from "./CarouselItem";
import {IconButton, Popover, Zoom, Grow} from "@mui/material";
import { Carousel } from 'react-material-ui-carousel'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import "./styles.css";
// import required modules
import { FreeMode, Navigation, Autoplay, Pagination } from "swiper";
import callApi from "../../callApi";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
    // p: 4,
};

export default function Suggestion({open, setOpen, cards}) {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [thumbsSwiper, setThumbsSwiper] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [hotItems, setHotItems] = useState([]);

    useEffect(() => {
        async function fetchdatas() {
            await callApi.getHot().then(async (res) => {
                await setHotItems(res.data)
            })
        }
        fetchdatas()
        setIsLoading(false)
    }, [isLoading])

    if(isLoading) {
        return (
            <>
            </>
        )
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {/*<Grow in={open}>*/}
                    <Box sx={style}>
                        <Box sx={{ width: '100%', display: 'flex'}}>
                            <IconButton onClick={handleClose} sx={{color: 'common.black'}}>
                                <CloseRoundedIcon fontSize={'large'} />
                            </IconButton>
                            <Box sx={{flexGrow: 1, textAlign: 'center',}}>
                                <Typography sx={{fontSize: 24, fontWeight: 'bold', p: 1}}>Tendances</Typography>
                            </Box>
                        </Box>
                        <Swiper
                            pagination={{
                                type: "progressbar",
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            autoplay={{
                                delay: 7500,
                                disableOnInteraction: false,
                            }}
                            style={{width: 800, height: 500, backgroundColor: "black"}}
                        >
                            {hotItems.map((item, key) => (
                                <SwiperSlide key={key} style={{display: 'flex', flexDirection: 'column', height: 500, width: 800}}>
                                    <CarouselItem item={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                {/*</Grow>*/}
            </Modal>
        </div>
    );
}