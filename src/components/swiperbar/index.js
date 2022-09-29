import React from 'react';
import {AppBar, Box, Container} from "@mui/material";
import Swiper from "./Swiper";

const SwiperBar = ({value, setValue, handleChangeCategorie, types}) => {
    return (
        <Box sx={{flexGrow: 1, zIndex: 100,}}>
            <Box position={'static'} sx={{bgcolor: 'common.white'}} elevation={1}>
                <Container maxWidth={false}>
                    <Swiper value={value} setValue={setValue} handleChangeCategorie={handleChangeCategorie} types={types} />
                </Container>
            </Box>
        </Box>
    );
};

export default SwiperBar;