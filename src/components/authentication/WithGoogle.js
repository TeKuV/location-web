import React from 'react';
import google from '../../assets/logos/google.png'
import {Button, Typography} from "@mui/material";

const WithGoogle = () => {
    return (
        <Button variant={'outlined'} sx={{width: '100%', display: 'flex', py: 1.5, my: 1, color: 'common.black', borderColor: 'black'}}>
            <img src={google} alt={"google"} width={18} height={18} />
            <Typography sx={{flexGrow: 1, textTransform: 'none'}}>Continuer avec google</Typography>
        </Button>
    );
};

export default WithGoogle;