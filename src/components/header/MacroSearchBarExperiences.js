import React, {useState} from 'react';
import {
    Button,
    Paper,
    InputBase,
    Typography,
    Box,
    Tab,
    Tabs,
    Card,
    CardMedia,
    CardContent,
    CardActionArea, IconButton, Divider
} from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
//Importation d'images
import flexible from "../../assets/images/Cartes/flexible.jpg"
import afrique from "../../assets/images/Cartes/afrique.webp"
import canada from "../../assets/images/Cartes/canada.webp"
import usa from "../../assets/images/Cartes/usa.webp"
import moyenOrient from "../../assets/images/Cartes/moyen-orient.webp"
import france from "../../assets/images/Cartes/france.webp"
import CustomDatePicker from "./CustomDatePicker";

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import {CountryCards, Who} from "./MacroSearchBarElements";


const areas = [
    {
        label: "Flexible",
        value: "Flexible",
        image: flexible
    },
    {
        label: "Afrique",
        value: "Afrique",
        image: afrique
    },
    {
        label: "France",
        value: "France",
        image: france
    },
    {
        label: "Etats Unies",
        value: "USA",
        image: usa
    },
    {
        label: "Canada",
        value: "Canada",
        image: canada
    },
    {
        label: "Moyen Orient",
        value: "Moyen Orient",
        image: moyenOrient
    },
]

const typos = [
    ["Adultes", "13 ans et plus"],
    ["Enfants", "de 2 à 12 ans"],
    ["Bébés", "Mois de 2 ans"],
]

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const MacroSearchBarExperiences = ({values, setters}) => {
    const { where, arrival, adults, children, babies } = values;
    const { setWhere, setArrival, setDeparture, setAdults, setChildren, setBabies } = setters;

    //Tab
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClearWhoDatas = () => {
        setChildren(0)
        setBabies(0)
        setAdults(0)
    }

    const handleWhere = (e) => {
        setWhere(e.target.value)
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Paper sx={{display: 'flex', flexDirection: 'column', borderRadius: '100px', flexGrow: 'inherit'}} elevation={0} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', flexDirection: 'row', flexGrow: 'inherit' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{flexGrow: 1, display: 'flex', p: 0, m: 0}}>
                        <Tab
                            sx={{my: 0, py: 0.5}}
                            label={
                                <Box sx={{display: 'flex', flexDirection: 'column',px: 1, textTransform: 'none', borderRadius: 'inherit'}}>
                                    <Typography sx={{fontSize: 13, fontWeight: 'bold'}}>Où</Typography>
                                    <InputBase id="outlined-basic" placeholder="Rechercher les destinations" size={'9px'} value={where} onChange={handleWhere} variant="standard" />
                                </Box>
                            }
                            {...a11yProps(0)}

                        />
                        <Tab
                            sx={{my: 0, py: 0.5}}
                            label={
                                <Box sx={{display: 'flex', flexDirection: 'column',px: 1, textTransform: 'none', borderRadius: 'inherit', }}>
                                    <Typography sx={{fontSize: 13, fontWeight: 'bold'}}>Visite</Typography>
                                    <InputBase id="outlined-basic" placeholder="Date" variant="standard" size={'9px'} sx={{width: 120}} margin={'none'} value={arrival} disabled />
                                </Box>
                            }
                            {...a11yProps(1)}

                        />
                        <Tab
                            sx={{my: 0, py: 0.5, px: 0}}
                            label={
                                   <Box sx={{display: 'inherit', flexDirection: 'column',px: 2, textTransform: 'none', borderRadius: 'inherit'}}>
                                        <Typography sx={{fontSize: 13, fontWeight: 'bold'}}>Qui</Typography>
                                        <Box sx={{display: 'inherit', justifyContent: 'center', alignItems: 'center'}}>
                                            <IconButton onClick={handleClearWhoDatas} disabled={adults === 0 && children === 0}><CloseRoundedIcon fontSize={'small'} /></IconButton>
                                            <InputBase id="outlined-basic" placeholder="Qui" variant="standard" value={`${adults + children} Voyageurs`} size={'9px'} sx={{width: 80}} margin={'none'} disabled />
                                        </Box>
                                   </Box>
                            }
                            {...a11yProps(2)}
                        />
                    </Tabs>
                    <Box >
                        <Button variant={'contained'} sx={{px: 2, textTransform: 'none', borderRadius: '100px', m: 0.5, bgcolor: 'secondary.main', height: '90%'}} size={"large"} startIcon={<SearchRoundedIcon fontSize={"large"} />}>
                            <Typography sx={{fontSize: 16,}}>Rechercher</Typography>
                        </Button>
                    </Box>
                </Box>
            </Paper>
            <Paper sx={{mt: 3, display: 'flex', borderRadius: "30px"}}>
                {value === 0 ?
                    (
                        <Box>
                            <CountryCards areas={areas} setWhere={setWhere} where={where} />
                        </Box>
                    ) : value === 1 ?
                        (
                            <Paper sx={{border: '1px solid #025579'}}>
                                <CustomDatePicker value={arrival} setValue={setArrival} />
                            </Paper>
                        ) : value === 2 ?
                            (
                                <Box>
                                    <Who who={[adults, children, babies]} setWho={[setAdults, setChildren, setBabies]} typos={typos} />
                                </Box>
                            ): null}
            </Paper>
        </Box>
    );
};

export default MacroSearchBarExperiences;