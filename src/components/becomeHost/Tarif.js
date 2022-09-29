import React from 'react';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import {Box, IconButton, Input, InputAdornment, Popover, Typography} from "@mui/material";
import {CurrencyFrancRounded} from "@mui/icons-material";
import './styles.css'

const Tarif = ({tarif, setTarif}) => {
    const handleMinusClick = () => {
        setTarif(parseInt(tarif) - 500);
    }
    const handlePlusClick = () => {
        setTarif(parseInt(tarif) + 500);
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Box sx={{display: 'inherit', justifyContent: 'center', alignItems: 'center'}}>
                    <IconButton disabled={tarif === 0} onClick={handleMinusClick}><RemoveCircleOutlinedIcon sx={{color: 'common.black', fontSize: 70}}/></IconButton>
                    <Box sx={{px: 1, width: 320, borderRadius: 2, border: "2px solid black", p: 2, mx: 2}}>
                        <Input
                            type={'number'}
                            value={tarif}
                            sx={{fontSize: 45, textAlign: 'center',}}
                            disableUnderline
                            onChange={(event) => {if(event.target.value >= 0 && event.target.value <= 700000) { setTarif(event.target.value) }}}
                            endAdornment={
                                <InputAdornment position="end">
                                    <CurrencyFrancRounded fontSize={'large'}     />
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </Box>
                    <IconButton disabled={tarif === 400000} onClick={handlePlusClick}><AddCircleOutlinedIcon sx={{color: 'common.black', fontSize: 70}} /></IconButton>
                </Box>
                <Typography sx={{color: '#858585'}}>Par mois</Typography>
                <Typography sx={{fontSize: 20, mt: 5, width: 320, textAlign: 'center'}}>Pour rappel, le prix de logements varie généralement de 20000 à 400000. <IconButton onClick={handleClick}><HelpRoundedIcon color={'common.black'} /></IconButton></Typography>
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Typography sx={{ p: 2, width: 300 }} onClick={handleClose}>Les prix suggérés tiennent compte de l'emplacement de votre logement et des équipements offerts, ainsi que des prix pratiqués et de la demande dans votre secteur. Vous fixez votre prix, mais vous pouvez le modifier à tout moment.</Typography>
                </Popover>
            </Box>
        </>
    )
};

export default Tarif;