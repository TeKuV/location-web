import React from 'react';
import {MenuItem, Paper, Menu, Button, Divider} from "@mui/material";
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import Authentication from "../authentication";

const MenuHeader = ({anchorEl, handleClose, open, handleConnectOpen}) => {
    const upperOptions = [
        {
            label: "Inscription",
            icon: <PersonAddRoundedIcon fontSize={'small'} color={'primary'} />,
        },
        {
            label: "Connexion",
            icon: <LoginRoundedIcon fontSize={'small'} color={'primary'} />,
        }
    ]

    const lowerOptions = [
        "Accueillez des voyageurs",
        "Organisez une expérience",
        "Aide"
    ]

    return (
        <>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                sx={{borderRadius: 6}}
            >
                <Paper sx={{width: 220,}} elevation={0}>
                    {upperOptions.map((item, index) =>
                        <MenuItem key={index} sx={{fontSize: '15px', py: 1}} onClick={handleConnectOpen}>
                            {item.icon} &nbsp; {item.label}
                        </MenuItem>
                    )}
                    <Divider />
                    {lowerOptions.map((item, index) =>
                        <MenuItem key={index} sx={{fontSize: '15px', py: 1}}>
                            {item}
                        </MenuItem>
                    )}
                </Paper>
            </Menu>
        </>
    );
};

export default MenuHeader;