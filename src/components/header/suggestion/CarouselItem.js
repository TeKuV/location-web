import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination"
import "swiper/css/effect-flip"
import "swiper/css/effect-fade"

import "./styles.css";

// import required modules
import { EffectFade, FreeMode, Navigation, Thumbs, Autoplay } from "swiper";
import {Box, Typography} from "@mui/material";
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';

export default function CarouselItem({item}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(0);

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    width: 800,
                    height: 500
                }}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                effect={"fade"}
                grabCursor={true}
                modules={[Autoplay, EffectFade, Navigation, Thumbs]}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                // modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {item.locations.map((location, index) => (
                    <SwiperSlide style={{width: 800, height: 500, display: 'flex', flexDirection: 'column'}}>
                        <img src={location.images[0]} alt={""} width={800} height={500} />
                        <Box sx={{
                            display: 'flex',
                            position: 'sticky',
                            bottom: '0%',
                            left: '0%',
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(transparent, black)',
                            color: 'white'
                        }}>
                            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', m: 2, mt: 4}}>
                                <Typography sx={{fontSize: 16}}>{location.type.name} au prix unique de {location.price} Fcfa</Typography>
                                <Typography sx={{fontSize: 19, display: 'flex', flexDirection: 'row', alignItems: 'center', color: "secondary.main"}}><PlaceRoundedIcon /> {item.name}</Typography>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {item.locations.map((location, index) => (
                    <SwiperSlide>
                        <img src={location.images[0]} alt={""} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
