import React from 'react';
import {Box, Divider, IconButton, Paper, Typography} from "@mui/material";
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

const Who = ({who, setWho, typos}) => {
    const Element = ({value, setValue, typos}) => {
        const handleMinusClick = () => {
            setValue(--value);
        }
        const handlePlusClick = () => {
            setValue(++value);
        }

        return (
            <>
                <Box sx={{display: 'flex', p: 2, mb: 2, border: '1px solid black', borderRadius: 2 }}>
                    <Box sx={{display: 'inherit', flexDirection: 'column', flexGrow: 1}}>
                        <Typography sx={{fontSize: 22,}}>{typos[0]}</Typography>
                        <Typography sx={{fontSize: 15,}}>{typos[1]}</Typography>
                    </Box>
                    <Box sx={{display: 'inherit', justifyContent: 'center', alignItems: 'center'}}>
                        <IconButton disabled={value === 0} onClick={handleMinusClick}><IndeterminateCheckBoxRoundedIcon fontSize={'large'} /></IconButton>
                        <Typography sx={{px: 1}}>{value}</Typography>
                        <IconButton disabled={value === 12} onClick={handlePlusClick}><AddBoxRoundedIcon fontSize={'large'} /></IconButton>
                    </Box>
                </Box>
            </>
        )
    }
    return (
        <>
            {who.map((val, index) => <Element key={index} value={val} setValue={setWho[index]} typos={typos[index]} />)}
        </>
    )
};

export default Who;