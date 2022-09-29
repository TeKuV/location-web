import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import NearMeRoundedIcon from '@mui/icons-material/NearMeRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import {Popover, Typography, Button, Paper, TextField, IconButton} from "@mui/material";
import {useState} from "react";

export default function Place({
    rue, bp, setBp, setRue, setVille, setPays, pays, setApartment, apartment, setEtat, etat, ville
                              })
{
    const [value, setValue] = React.useState('');
    const [isEnter, setIsEnter] = React.useState(false)
    const [errorRue, setErrorRue] = useState(false)
    const [errorVille, setErrorVille] = useState(false)
    const [errorPays, setErrorPays] = useState(false)
    const [rueL, setRueL] = useState("")
    const [villeL, setVilleL] = useState("")
    const [paysL, setPaysL] = useState("")
    const handleClose = () => {
        setValue('')
    }

    const handleChange = (event) => {
        setValue(event.target.value);
        if(event.target.value === 20) {
            setIsEnter(true)
        }
    };

    const handleSubmitAddress = () => {
        let i = false
        if(rueL === "") {
            setErrorRue(true)
            i = true
        }
        if(villeL === "") {
           setErrorVille(true)
            i = true
        }
        if(paysL === "") {
            setErrorPays(true)
            i = true
        }
        if(!i) {
            setRue(rueL)
            setVille(villeL)
            setPays(paysL)
            setValue('')
            setIsEnter(false)
        }
    }

    const handleQuitEnterAddress = () => {
        setValue('')
        setIsEnter(false)
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            {!isEnter ? (
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                        <Box sx={{fontSize: 19 , fontWeight: 'bold', display: 'flex', alignItems: 'center', borderRadius: 20,}}>
                            <PlaceRoundedIcon fontSize={'large'} />
                            <Typography sx={{fontSize: 19 , fontWeight: 'bold', ml: 2}}>Saisissez votre adresse</Typography>
                        </Box>
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        label={
                            <Box sx={{fontSize: 19 , fontWeight: 'bold', display: 'flex', alignItems: 'center', borderRadius: 20}}>
                                <PlaceRoundedIcon />
                                <Typography sx={{fontSize: 19 , fontWeight: 'bold', ml: 2}}>Saisissez votre adresse</Typography>
                            </Box>
                        }
                        sx={{borderRadius: 20,}}
                        onChange={handleChange}
                    >
                        <MenuItem value={10} sx={{p: 2}}>
                            <Box sx={{fontSize: 19 , fontWeight: 'bold', display: 'flex', alignItems: 'center', borderRadius: 20}}>
                                <NearMeRoundedIcon sx={{bgcolor: '#f7f7f7', borderRadius: 100, m: 1}} />
                                <Typography sx={{fontSize: 16 , ml: 2}}>Utiliser mon emplacement actuel</Typography>
                            </Box>
                        </MenuItem>
                        <MenuItem value={20} sx={{p: 2}}>
                            <Typography sx={{fontSize: 16, m: 1 , textDecoration: 'underline'}}>Saisissez votre adresse manuellement</Typography>
                        </MenuItem>
                    </Select>
                </FormControl>
            ) : (
                <Paper sx={{p: 2}} elevation={2}>
                    <Box sx={{width: '100%', display: 'flex', alignItems: 'center', mb: 2}}>
                        <IconButton sx={{}} onClick={handleQuitEnterAddress}>
                            <ArrowBackIosNewRoundedIcon />
                        </IconButton>
                        <Box sx={{display: 'inherit', flexGrow: 1, justifyContent: 'center'}}>
                            <Typography sx={{fontSize: 20}}>Confirmez votre addresse</Typography>
                        </Box>
                    </Box>
                    <Box sx={{flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
                        <TextField sx={{my: 0.5}} label={'Rue'} value={rueL} onChange={(event) => setRueL(event.target.value)} error={errorRue}  />
                        <TextField sx={{my: 0.5}} label={'Appartement, bâtiment, etc. (Facultatif)'} value={apartment} onChange={(event) => setApartment(event.target.value)} />
                        <TextField sx={{my: 0.5}} label={'Code Postal (Facultatif)'} value={bp} onChange={(event) => setBp(event.target.value)} />
                        <TextField sx={{my: 0.5}} label={'Ville'} value={villeL} onChange={(event) => setVilleL(event.target.value)} error={errorVille} />
                        <TextField sx={{my: 0.5}} label={'Pays/Région'} value={paysL} onChange={(event) => setPaysL(event.target.value)} error={errorPays}  />
                    </Box>
                    <Button variant={'contained'} sx={{textTransform: 'none', py: 1.5, px: 3, my: 1, borderRadius: 2}} disabled={(ville !== "" && pays !== "" && rue !== "") && ((ville === villeL && ville !== "") && (pays === paysL && pays !== "") && (rue === rueL && rue !== "")) } onClick={handleSubmitAddress}>
                        <Typography sx={{fontSize: 16}}>Parfait</Typography>
                    </Button>
                </Paper>
            )}
        </Box>
    );
}
