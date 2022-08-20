import React from 'react';
import {Box, Button, Container, Divider, Typography} from "@mui/material";
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import CurrencyFrancRoundedIcon from '@mui/icons-material/CurrencyFrancRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

const FooterBar = () => {
    //Left side actions
    const privacy = () => {

    }

    //Right side actions


    const copyright = "2022 lekwatt, Inc."
    const leftSideButtons = [
        {
            label: "Confidentialité",
            action: privacy(),
        },
        {
            label: "Conditions",
            action: privacy(),
        },
        {
            label: "Plan du site",
            action: privacy(),
        },
        {
            label: "Destinations",
            action: privacy(),
        }
    ]
    const rightSideButtons = [
        {
            label: "Francais (FR)",
            action: privacy(),
        },
        {
            label: "Fcfa",
            action: privacy(),
        },
        {
            label: "Assistance et ressources",
            action: privacy(),
        }
    ]


    return (
        <>
            <Container maxWidth={false} sx={{display: 'flex', verticalAlign: 'middle', my: 1.7}}>
                <Box sx={{flexGrow: 1, display: 'inherit', justifyContent: "flex-start", alignItems: 'center'}}>
                    <Box sx={{display: 'inherit', alignItems: 'inherit'}}>
                        <CopyrightRoundedIcon fontSize={'small'} sx={{p: 0.4}} />
                        <Typography sx={{fontSize: 14}}>{copyright}</Typography>
                    </Box>
                    <Box sx={{display: 'inherit', alignItems: 'inherit'}}>
                        {leftSideButtons.map((item, index) => (
                            <Button key={index} sx={{textTransform: 'none', p: 0, "&:hover": {textDecoration: "underline"}}}>
                                <Typography variant={'subtitle1'} sx={{px: 1, color: 'black', fontSize: 14}}>{item.label}</Typography>
                            </Button>
                        ))}
                    </Box>
                </Box>
                <Box sx={{flexGrow: 1, display: 'inherit', justifyContent: "flex-end"}}>
                    <Box sx={{display: 'inherit', alignItems: 'inherit'}}>
                        {rightSideButtons.map((item, index) => (
                            (item.label === "Francais (FR)")? (
                                <Button key={index} sx={{textTransform: 'none', p: 0, color: 'common.black', "&:hover": {textDecoration: "underline"}}}>
                                    <LanguageRoundedIcon fontSize={'small'} />
                                    <Typography variant={'subtitle1'}
                                                sx={{px: 1, color: 'black', fontSize: 14}}>{item.label}</Typography>
                                </Button>
                            ) : ((item.label === "Fcfa") ? (
                                <Button key={index} sx={{textTransform: 'none', p: 0, color: 'common.black', "&:hover": {textDecoration: "underline"}}}>
                                    <CurrencyFrancRoundedIcon fontSize={'small'} />
                                <Typography variant={'subtitle1'} sx={{px: 1, color: 'black', fontSize: 14}}>{item.label}</Typography>
                                </Button>
                            )
                            : (
                                <Button key={index} sx={{textTransform: 'none', p: 0, color: 'common.black', "&:hover": {textDecoration: "underline"}}}>
                                    <Typography variant={'subtitle1'} sx={{px: 1, color: 'black', fontSize: 14}}>{item.label}</Typography>
                                    <KeyboardArrowUpRoundedIcon />
                                </Button>
                            ))
                        ))}
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default FooterBar;