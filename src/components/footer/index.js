import React from 'react';
import FooterBar from "./FooterBar";
import {Box} from "@mui/material";

const Footer = () => {
    return (
        <div style={{marginTop: 50}}>
            <Box sx={{flexGrow: 1, bgcolor: 'common.white', borderTop: "1px solid #b8b8b8", position: 'fixed', bottom: 0, zIndex: 1000, width: '100%', marginTop: 50}}>
                <FooterBar />
            </Box>
        </div>
    );
};

export default Footer;