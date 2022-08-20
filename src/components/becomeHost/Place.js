import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import NearMeRoundedIcon from '@mui/icons-material/NearMeRounded';
import {Popover, Typography} from "@mui/material";

export default function Place() {
    const [value, setValue] = React.useState('');
    const handleClose = () => {
        setValue('')
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
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
            <Popover
                open={parseInt(value) === 20}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 200, left: 400 }}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
            >
                The content of the Popover.
            </Popover>
        </Box>
    );
}
