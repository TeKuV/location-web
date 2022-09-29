import React from 'react';
import {Box, Button, Divider, Paper, Popover, Typography} from "@mui/material";
import DateRangePicker from "./CustomDateRange";
import TextField from "@mui/material/TextField";
import {CurrencyFrancRounded} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import GradeTwoToneIcon from "@mui/icons-material/GradeTwoTone";
import CustomDate from "./CustomDate";
import {Who} from "../../header/MacroSearchBarElements";

const typos = [
    ["Adultes", "13 ans et plus"],
    ["Enfants", "de 2 à 12 ans"],
    ["Bébés", "Mois de 2 ans"],
]

const Bookroom = ({house, date, setDate, who, setWho}) => {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorTenant, setAnchorTenant] = React.useState(null);
    const [errorDate, setErrorDate] = React.useState(false)
    const [errorTenant, setErrorTenant] = React.useState(false)
    const open = Boolean(anchorEl);

    //Date handling
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //Tenant handling
    const handleSetTenant = (event) => {
        setAnchorTenant(event.currentTarget);
    };

    const handleTenantClose = () => {
        setAnchorTenant(null);
    };

    const checkErrorDate = () => {
        if(date === "") {
            setErrorDate(true)
            return true
        }
    }
    const checkErrorTenant = () => {
        if(who[0] === 0 && who[1] === 0) {
            setErrorTenant(true)
        }
    }
    const handleBook = () => {
        checkErrorDate()
        checkErrorTenant()
        if(errorTenant && errorDate) {
            navigate(`${window.location.pathname}/bookroom`)
        }
    }
    const dateWithoutTime = (date) => {
        if(date === undefined) {
            return ""
        }
        else {
            let d = new Date(date)
            return `${d.getDate()} / ${d.getMonth() + 1} / ${d.getFullYear()}`
        }

    }
    return (
        <Paper sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', m: 1, p: 1, flexGrow: 1}} elevation={3}>
            <Box sx={{textAlign: 'center', width: '100%'}}>
                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%', p: 1}}>
                    <Typography sx={{fontSize: 24, fontWeight: 'bolder'}}>{house.price}</Typography>
                    {/*<CurrencyFrancRounded />*/}
                    <Typography sx={{fontSize: 24, fontWeight: 'bolder'}}>&nbsp;Fcfa /Mois</Typography>
                    <Box sx={{paddingRight: 2}} />
                    <Box sx={{
                        display: 'inherit',
                        flexDirection: 'row',
                        flexGrow: 1,
                        justifyContent: 'flex-end'
                    }}>
                        <GradeTwoToneIcon fontSize={'small'} />
                        <Typography fontSize={17}>
                            {house.rating ? house.rating : "Nouveau"}
                        </Typography>
                    </Box>
                    {/*<Box sx={{paddingRight: 2}} />*/}
                    {/*<Typography fontSize={17}>*/}
                    {/*    43 Commentaires*/}
                    {/*</Typography>*/}
                </Box>
                <Divider orientation={"horizontal"} variant={'middle'} />
                <Typography sx={{fontSize: 14, mt: 1}}>Dates d'installation</Typography>
                <CustomDate value={date} setValue={setDate} error={errorDate} />
                {/*<Button onClick={handleClick} disableTouchRipple disableRipple>*/}
                <Box sx={{display: 'flex'}}>

                        {/*    <TextField id="outlined-basic" fullWidth variant="outlined" sx={{mr: 0.4}} defaultValue={new Date(date)} />*/}
                            {/*<TextField id="outlined-basic" fullWidth variant="outlined" defaultValue={dateWithoutTime(dateRange["endDate"])} />*/}
                </Box>
                {/*</Button>*/}
                <Typography sx={{fontSize: 14, mt: 1}}>Nombre de locataires</Typography>
                <Button fullWidth disableRipple disableFocusRipple onClick={handleSetTenant}>
                    <TextField id="outlined-basic" fullWidth variant="outlined" value={`${who[0] + who[1]} Voyageurs`} error={errorTenant} />
                </Button>
                <Popover
                    open={Boolean(anchorTenant)}
                    anchorEl={anchorTenant}
                    onClose={handleTenantClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Who who={who} setWho={setWho} typos={typos} />
                </Popover>
                <Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'center'}}>
                    <Button variant={'contained'} sx={{textTransform: 'none', bgcolor: 'secondary.main', width: '100%', py: 1.5, my: 1, mx: 1}} fullWidth onClick={handleBook}>
                        <Typography sx={{}}>Réserver</Typography>
                    </Button>
                </Box>
                <Box sx={{display: 'flex', flexGrow: 1, width: '100%', p: 1}}>
                   <Box sx={{
                       display: 'inherit',
                        flexGrow: 'inherit'
                   }}>
                       <Typography>Frais de service</Typography>
                   </Box>
                    <Box sx={{
                        display: 'inherit',
                        justifyContent: 'flex-end',
                        flexGrow: 'inherit'
                    }}>
                        <Typography>2000 Fcfa</Typography>
                    </Box>
                </Box>
                <Divider orientation={"horizontal"} />
                <Box sx={{display: 'flex', flexGrow: 1, width: '100%', p: 1, my: 1}}>
                    <Box sx={{
                        display: 'inherit',
                        flexGrow: 'inherit',
                    }}>
                        <Typography sx={{fontWeight: 'bold'}}>Total hors taxes</Typography>
                    </Box>
                    <Box sx={{
                        display: 'inherit',
                        justifyContent: 'flex-end',
                        flexGrow: 'inherit'
                    }}>
                        <Typography sx={{fontWeight: 'bold'}}>{parseInt(house.price)} Fcfa / Mois + 2000 Fcfa</Typography>
                    </Box>
                </Box>
                {/*<DateRangePicker open={open} handleClose={handleClose} anchorEl={anchorEl} dateRange={dateRange} setDateRange={setDateRange} />*/}
            </Box>
        </Paper>
    );
};

export default Bookroom;