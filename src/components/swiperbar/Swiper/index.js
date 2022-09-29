import React, {useEffect, useState} from 'react';
import {items} from './items'
import {Tab, Tabs, Typography} from "@mui/material";
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import callApi from "../../callApi";

const Swiper = ({value, handleChangeCategorie, types}) => {
    // const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     async function fetchaDatas() {
    //         callApi.getTypeOfLocation().then( async (res) => {
    //             await setTypes(res.data)
    //         })
    //     }
    //     fetchaDatas()
    //     setIsLoading(false)
    // }, [isLoading])
    //
    // if(isLoading) {
    //     return (
    //         <></>
    //     )
    // }

    return (
        <Tabs value={value}
              onChange={handleChangeCategorie}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
        >
            {
                types.map((item, index) => (
                    <Tab value={item.slug} label={<Typography sx={{fontSize: 12, color: '#757f8e', textTransform: 'none',}}>{item.name}</Typography>} icon={<img src={item.icon} alt={item.name} width={30} height={30} style={{textTransform: 'none', color: '#757f8e'}} />} />
                ))
            }
        </Tabs>
    );
};

export default Swiper;