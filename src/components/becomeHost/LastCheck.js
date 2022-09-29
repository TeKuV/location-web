import React from 'react';
import {Box, Divider, Paper, Typography} from "@mui/material";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

const LastCheck = ({primaryImage, Ville, typeOfHousing, typeOfRooms, user}) => {
    return (
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Paper sx={{width: 331, display: 'inherit', flexDirection: 'column', justifyContent: 'inherit', alignItems: 'inherit', py: 1.5, borderRadius: 5,}} elevation={7}>
                <img src={primaryImage} alt={"Primary Image"} width={311} height={208} style={{borderRadius: "15px 15px 0px 0px"}} />
                <Box sx={{p: 3, width: 311}}>
                    <Typography sx={{fontSize: 30, mb: 2}}>{Ville}</Typography>
                    <Divider orientation={"horizontal"} />
                    <Box sx={{display: 'flex', flexGrow: 1, my: 2}}>
                        <Typography sx={{fontSize: 17, width: '50%'}}>{typeOfHousing} dans : {typeOfRooms}. Chez {user}</Typography>
                        <Box sx={{display: 'inherit', justifyContent: 'center', flexGrow: 1, alignItems: 'center'}}>
                            <AccountCircleTwoToneIcon fontSize={'large'} />
                        </Box>
                    </Box>
                    <Divider orientation={"horizontal"} />
                </Box>
            </Paper>
        </Box>
    );
};

export default LastCheck;