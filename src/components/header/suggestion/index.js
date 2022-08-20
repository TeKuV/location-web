import React, { useRef, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CarouselItem from "./CarouselItem";
import {Popover} from "@mui/material";
import { Carousel } from 'react-material-ui-carousel'

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

    useEffect(() => {
        if(cards !== []) {
            setIsLoading(false)
        }
    }, [])

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
                <Box sx={style}>
                    <Box sx={{textAlign: 'center', width: '100%'}}>
                        <Typography sx={{fontSize: 24, fontWeight: 'bold', p: 1}}>Tendances</Typography>
                    </Box>

            {/*<Popover*/}
            {/*    open={open}*/}
            {/*    onClose={handleClose}*/}
            {/*    anchorReference="anchorPosition"*/}
            {/*    anchorPosition={{ top: 80, left: 0 }}*/}
            {/*    anchorOrigin={{*/}
            {/*        vertical: 'center',*/}
            {/*        horizontal: 'center',*/}
            {/*    }}*/}
            {/*    transformOrigin={{*/}
            {/*        vertical: 'center',*/}
            {/*        horizontal: 'center',*/}
            {/*    }}*/}
            {/*>*/}
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
                    // className="mySwiper"
                    style={{width: 800, height: 500, backgroundColor: "black"}}
                >
                    {cards.map((card, key) => (
                        <SwiperSlide key={key} style={{display: 'flex', flexDirection: 'column', height: 500, width: 800}}>
                            <CarouselItem images={card.images} typos={[card.name, card.place, card.city]} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            {/*</Popover>*/}
                </Box>
            </Modal>
        </div>
    );
}