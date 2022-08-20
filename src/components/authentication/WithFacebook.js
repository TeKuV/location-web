import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const WithFacebook = () => {
    return (
        <Button variant={'outlined'} sx={{width: '100%', display: 'flex', py: 1.5, my: 1, color: 'common.black', borderColor: 'black'}}>
            <FacebookRoundedIcon sx={{color: 'blue'}} />
            <Typography sx={{flexGrow: 1, textTransform: 'none'}}>Continuer avec facebook</Typography>
        </Button>
    );
};

export default WithFacebook;