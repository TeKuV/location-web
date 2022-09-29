import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {Badge, Box, Button, ButtonBase, Divider, IconButton, Typography} from "@mui/material";
import { styled } from "@mui/material/styles";
import lekwatt from "../../assets/logos/lekwatt.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import MenuHeader from "./MenuHeader";
import MenuHeaderConnected from "./MenuHeaderConnected";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        // backgroundColor: '#44b700',
        // color: '#44b700',
        backgroundColor: 'green',
        color: "green",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '3px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

export const SearchBar = ({setIsSearchEngine, searchValues}) => {
    const { where, arrival, departure, adults, children, babies, animals } = searchValues;

    const options = [
        where === "" ? "N'importe où" : where,
        (arrival === "" ) ? "Semaine" : (departure === "") ? arrival.toDateString() : `${arrival.toDateString()} - ${departure.toDateString()}`,
        (adults === 0 && children === 0) ? "Qui vient?" : `${adults + children} Voyageurs`,
    ]
    const handleClicked = (e) => {
        setIsSearchEngine(true)
    }

    return (
        <Box sx={{display: 'flex',  flexGrow: 1, justifyContent: "center", verticalAlign: 'middle', alignItems: 'center'}}>
            <Box sx={{display: 'inherit', justifyContent: "center", verticalAlign: 'inherit', alignItems: 'center'}}>
                <Button sx={{textTransform: 'none'}} onClick={handleClicked}>
                    <Box sx={{display: 'flex',
                        alignItems: 'center',
                        width: 'fit-content',
                        borderRadius: "70px",
                        bgcolor: 'background.paper',
                        p: 0.5
                    }}>
                        {options.map((item, index) => (
                            <Box sx={{display: 'flex'}}>
                                <Typography sx={{px: 2}}>{item}</Typography>
                                <Divider orientation={'vertical'} flexItem />
                            </Box>
                        ))}
                        <SearchRoundedIcon fontSize={'large'} sx={{color: 'common.white', bgcolor: 'primary.main', borderRadius: '50%', p: 0.90}} />
                    </Box>
                </Button>
            </Box>
        </Box>
    )
}

export const RightSideElements = ({handleConnectOpen}) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [token, setToken] = React.useState(null)
    const open = Boolean(anchorEl);
    // let token = null
    useEffect(() => {
       let inter = sessionStorage.getItem("Connexion")
        if(inter !== null) {
            setToken(inter);
        }
    },[])
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleBecomeHost = () => {
        navigate("/becomehost")
    }

    return (
        <Box sx={{display: 'flex', justifyContent: "flex-end", verticalAlign: 'middle'}}>
            <Button variant={'outlined'} sx={{textTransform: 'none', color: 'white'}}> <Typography sx={{color: 'common.white', fontSize: '14px' }} onClick={handleBecomeHost} >Devenez hôte</Typography></Button>
            <ButtonBase sx={{p: 1, color: 'common.white'}}>
                <LanguageRoundedIcon sx={{display: 'inherit', color: 'common.white'}} />
            </ButtonBase>

                <Box sx={{display: 'inherit'}}>
                    {token !== null ? (
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            variant="dot"
                            fontSize={'large'}
                        >
                            <ButtonBase sx={{display: 'inherit', justifyContent: 'center', alignItems: 'center', borderRadius: '70px', bgcolor: 'common.white', m: 0, px: 1, py: 0.5}} onClick={(e) => handleClick(e)}>
                                <MenuRoundedIcon fontSize={'small'} sx={{display: 'inherit', color: 'primary.main'}} />
                                <PersonRoundedIcon fontSize={'large'} sx={{display: 'inherit', color: 'primary.main'}} />
                            </ButtonBase>
                        </StyledBadge>
                    ) : (
                        <ButtonBase sx={{display: 'inherit', justifyContent: 'center', alignItems: 'center', borderRadius: '70px', bgcolor: 'common.white', m: 1.5, px: 1, py: 0.5}} onClick={(e) => handleClick(e)}>
                            <MenuRoundedIcon fontSize={'small'} sx={{display: 'inherit', color: 'primary.main'}} />
                            <PersonRoundedIcon fontSize={'large'} sx={{display: 'inherit', color: 'primary.main'}} />
                        </ButtonBase>
                    )}
                </Box>
            {
                token !== null ? (
                    <MenuHeaderConnected anchorEl={anchorEl} handleClose={handleClose} open={open} handleConnectOpen={handleConnectOpen} />
                ) : (
                    <MenuHeader anchorEl={anchorEl} handleClose={handleClose} open={open} handleConnectOpen={handleConnectOpen} />
                )
            }
        </Box>
    )
}


export const HomeIcon = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/")
    }
    return (
        <Button sx={{display: 'flex',}} onClick={handleClick}>
            {/*<IconButton sx={{display: 'inherit', p: 0}}>*/}
                <img src={lekwatt} alt={"App logo"} width={140} />
            {/*</IconButton>*/}
        </Button>
    )
}