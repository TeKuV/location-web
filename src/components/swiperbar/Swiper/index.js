import React, {useState} from 'react';
import {items} from './items'
import {Tab, Tabs, Typography} from "@mui/material";
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Swiper = ({value, handleChangeCategorie}) => {

    return (
        <Tabs value={value}
              onChange={handleChangeCategorie}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
        >
            {
                items.map((item, index) => (
                    <Tab value={item.id} label={<Typography sx={{fontSize: 12, color: 'common.black', textTransform: 'none',}}>{item.label}</Typography>} icon={<img src={item.icon} alt={item.label} width={30} height={30} sx={{textTransform: 'none'}} />} />
                ))
            }
        </Tabs>
    );
};

export default Swiper;