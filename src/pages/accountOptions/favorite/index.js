import React from 'react';
import Header from "../../../components/header";
import {Box, Typography} from "@mui/material";

const Favorite = ({headerValues, headerSetters}) => {
    return (
        <div style={{width: '100%'}}>
            <Box sx={{zIndex: 100, position: 'sticky', top: 0 }}>
                <Header values={headerValues} setters={headerSetters} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <Box sx={{width: "90%"}}>
                    <Typography sx={{fontSize: 25, fontWeight: 'bold', mt: 4, mb: 2}} >
                        Favoris
                    </Typography>
                </Box>
                <Box sx={{width: '90%'}}>

                </Box>
            </Box>
        </div>
    );
};

export default Favorite;