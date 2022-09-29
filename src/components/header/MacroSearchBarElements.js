import React from 'react'
import {Box, Card, CardActionArea, Divider, IconButton, Paper, Typography} from "@mui/material";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

export const CountryCards = ({areas, setWhere, where}) => {
    const handleClick = (value) => {
        setWhere(value);
    }
    return (
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
            {areas.map((area, index) => (
                <Card sx={{m: 2, p: 1, border: null }} elevation={ where === area.value ? 1 :0 } key={index}>
                    <CardActionArea onClick={() => handleClick(area.value)}>
                        <img src={area.image} alt={area.label} width={140} height={140}/>
                        <Typography sx={{fontSize: 13,}}>
                            {area.label}
                        </Typography>
                    </CardActionArea>
                </Card>
            ))}
        </Box>

    )
}

export const Who = ({who, setWho, typos}) => {
    const Element = ({value, setValue, typos}) => {
        const handleMinusClick = () => {
            setValue(--value);
        }
        const handlePlusClick = () => {
            setValue(++value);
        }

        return (
            <>
                <Box sx={{display: 'flex',}}>
                    <Box sx={{display: 'inherit', flexDirection: 'column', flexGrow: 1}}>
                        <Typography sx={{fontSize: 17, fontWeight: 'bolder'}}>{typos[0]}</Typography>
                        <Typography sx={{fontSize: 15,}}>{typos[1]}</Typography>
                    </Box>
                    <Box sx={{display: 'inherit', justifyContent: 'center', alignItems: 'center'}}>
                        <IconButton disabled={value === 0} onClick={handleMinusClick}><RemoveCircleOutlineRoundedIcon fontSize={'large'} /></IconButton>
                        <Typography sx={{px: 1}}>{value}</Typography>
                        <IconButton disabled={value === 12} onClick={handlePlusClick}><AddCircleOutlineRoundedIcon fontSize={'large'} /></IconButton>
                    </Box>
                </Box>
                <Divider sx={{my: 1}} />
            </>
        )
    }
    return (
        <Paper sx={{p: 2,  border: '1px solid #025579', width: 400}}>
            {who.map((val, index) => <Element key={index} value={val} setValue={setWho[index]} typos={typos[index]} />)}
        </Paper>
    )
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}