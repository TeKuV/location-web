import React from 'react';
import {MenuItem, Paper, Menu, Button, Divider} from "@mui/material";
import { useNavigate } from 'react-router-dom'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import {FavoriteRounded} from "@mui/icons-material";

const MenuHeaderConnected = ({anchorEl, handleClose, open, handleConnectOpen}) => {
    const navigate = useNavigate();

    const handleMessages = () => {
        navigate("/account/message")
    }


    const handleNotifications = () => {
        navigate("/account/notifications")
    }

    const handleFavoris = () => {
        navigate("/account/favorite")
    }

    const handleCompte = () => {

    }

    const handleDeconnexion = () => {
        sessionStorage.removeItem('Connexion')
        window.location.reload()
    }

    const handleAide = () => {

    }

    const upperOptions = [
        {
            label: "Message",
            action: handleMessages,
            icon: <EmailRoundedIcon fontSize={'small'} sx={{color: 'common.black'}} />,
        },
        {
            label: "Notifications",
            action: handleNotifications,
            icon: <NotificationsActiveRoundedIcon fontSize={'small'} sx={{color: 'common.black'}} />,
        },
        {
            label: "Favoris",
            action: handleFavoris,
            icon: <FavoriteRounded fontSize={'small'} sx={{color: 'common.black'}} />,
        },
    ]

    const lowerOptions = [
        {
            label: "Compte",
            action: handleCompte,
        },
        {
            label: "Deconnexion",
            action: handleDeconnexion,
        },
        {
            label: "Aide",
            action: handleAide,
        }
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
                        <MenuItem key={index} sx={{fontSize: '15px', py: 1}} onClick={item.action}>
                            {item.icon} &nbsp; {item.label}
                        </MenuItem>
                    )}
                    <Divider />
                    {lowerOptions.map((item, index) =>
                        <MenuItem key={index} sx={{fontSize: '15px', py: 1}} onClick={item.action}>
                            {item.label}
                        </MenuItem>
                    )}
                </Paper>
            </Menu>
        </>
    );
};

export default MenuHeaderConnected;