import React from 'react';
import {Box, Button, Grid, IconButton, Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Header from "../../../components/header";
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';

const Message = ({headerValues, headerSetters}) => {
    const navigate = useNavigate()
    return (
        <Box sx={{height: '100vh'}}>
            {/*<Box sx={{zIndex: 100, position: 'sticky', top: 0 }}>*/}
                <Header values={headerValues} setters={headerSetters} />
            {/*</Box>*/}
            {/*<Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', }}>*/}
                <Grid container rowSpacing={0} columnSpacing={0} sx={{display: 'flex', height: '100%', flex: "1 1 auto"}}>
                    <Grid item sx={{border: '1px solid #cdcdcd', p: 2, display: 'flex', alignItems: 'center'}} xs={4}>
                        <Box sx={{flexGrow: 1, display: 'flex',}}>
                            <Typography sx={{fontSize: 18}}>Messages</Typography>
                        </Box>
                        <Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'flex-end'}}>
                            <IconButton sx={{color: 'black'}}>
                                <FilterAltRoundedIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid item sx={{border: '1px solid #cdcdcd', p: 2, display: 'flex', alignItems: 'center'}} xs={8}>

                    </Grid>
                    <Grid item xs={4} sx={{border: '1px solid #cdcdcd', p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%', flex: "1 1 auto"}}>
                        <Typography sx={{fontSize: 20}}>Vous n'avez pas de messages non lus</Typography>
                        <Typography sx={{fontSize: 16}}>Lorsque vous réservez un voyage ou une expérience, les messages de votre hôte s'affichent ici.</Typography>
                        <Button variant={'outlined'} sx={{textTransform: 'none'}} onClick={() => {navigate("/")}} >
                            <Typography sx={{fontSize: 18, p: 1}}>Explorez LeKwatt</Typography>
                        </Button>
                    </Grid>
                    <Grid item sx={{border: '1px solid #cdcdcd', p: 2, display: 'flex', alignItems: 'center'}} xs={8}>

                    </Grid>
                </Grid>
            {/*</Box>*/}
        </Box>
    );
};

export default Message ;