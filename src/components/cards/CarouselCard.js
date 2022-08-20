import React, {useState} from 'react';
import Carousel from "react-material-ui-carousel"
import {Skeleton} from "@mui/material";


const CarouselCard = ({item}) => {
    const [isHover, setIsHover] = useState(false)
    const handleMouseEnter = () => {
        setIsHover(true)
    }
    const handleMouseLeave = () => {
        setIsHover(false)
    }
    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Carousel sx={{width: 319 , height: 303, borderRadius: "15px",}} animation={'slide'} duration={1200} autoPlay={isHover} navButtonsAlwaysVisible={isHover} indicatorContainerProps={{ style:{top : 250, position: 'absolute', zIndex: 99} }} indicatorIconButtonProps={{ style:{color: 'white'} }} activeIndicatorIconButtonProps={{style:{color: '#dcb344'}}} >
                {item.map((image, index) => (
                    <img key={index} src={image} alt={index} loading={'lazy'} width={319} height={303} style={{objectFit: 'cover'}} />
                ))}
            </Carousel>
        </div>
    );
};

export default CarouselCard;