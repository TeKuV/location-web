import React from 'react';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import {Button, Typography} from "@mui/material";

const WithEmail = () => {
    return (
        <Button variant={'outlined'} sx={{width: '100%', display: 'flex', py: 1.5, my: 1, color: 'common.black', borderColor: 'black'}}>
            <EmailRoundedIcon sx={{color: 'black'}} />
            <Typography sx={{flexGrow: 1, textTransform: 'none'}}>Continuer avec google</Typography>
        </Button>
    );
};

export default WithEmail;