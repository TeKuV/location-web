import React from 'react';
import FooterBar from "./FooterBar";
import {Box, Divider, Grid, Typography} from "@mui/material";

const HouseFooter = () => {
    return (
        <div style={{marginTop: 100}}>
            <Box sx={{flexGrow: 1, bgcolor: 'common.white', borderTop: "1px solid #b8b8b8", position: 'fixed', bottom: 0, zIndex: 1000, width: '100%'}}>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{textAlign: 'center'}}>
                        <Grid item xs={4}>
                            <Typography sx={{fontSize: 15, fontWeight: 'bold'}}>Assistance</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{fontSize: 15, fontWeight: 'bold'}}>Communauté</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{fontSize: 15, fontWeight: 'bold'}}>Accueillir des locataires</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Divider orientation={"horizontal"} variant={'middle'} />
                <FooterBar />
            </Box>
        </div>
    );
};

export default HouseFooter;