import React from 'react';
import Header from "../../../components/header";
import {Box, Button, Divider, IconButton, Typography} from "@mui/material";
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Notifications = ({headerValues, headerSetters}) => {
    const datas = [
        {
            message: "Ajoutez votre adresse e-mail professionnelle pour bénéficier d'avantages supplémentaires pour vos voyages d'affaires, tels que des notes de frais simplifiées.",
            date: '12 août 2022',
            isReaded: false
        },
        {
            message: "Ajoutez votre adresse e-mail professionnelle pour bénéficier d'avantages supplémentaires pour vos voyages d'affaires, tels que des notes de frais simplifiées.",
            date: '12 août 2022',
            isReaded: true
        },
        {
            message: "Ajoutez votre adresse e-mail professionnelle pour bénéficier d'avantages supplémentaires pour vos voyages d'affaires, tels que des notes de frais simplifiées.",
            date: '12 août 2022',
            isReaded: false
        },
        {
            message: "Ajoutez votre adresse e-mail professionnelle pour bénéficier d'avantages supplémentaires pour vos voyages d'affaires, tels que des notes de frais simplifiées.",
            date: '12 août 2022',
            isReaded: false
        },
        {
            message: "Ajoutez votre adresse e-mail professionnelle pour bénéficier d'avantages supplémentaires pour vos voyages d'affaires, tels que des notes de frais simplifiées.",
            date: '12 août 2022',
            isReaded: true
        },
        {
            message: "Ajoutez votre adresse e-mail professionnelle pour bénéficier d'avantages supplémentaires pour vos voyages d'affaires, tels que des notes de frais simplifiées.",
            date: '12 août 2022',
            isReaded: false
        },
        {
            message: "Ajoutez votre adresse e-mail professionnelle pour bénéficier d'avantages supplémentaires pour vos voyages d'affaires, tels que des notes de frais simplifiées.",
            date: '12 août 2022',
            isReaded: false
        },
        {
            message: "Ajoutez votre adresse e-mail professionnelle pour bénéficier d'avantages supplémentaires pour vos voyages d'affaires, tels que des notes de frais simplifiées.",
            date: '12 août 2022',
            isReaded: true
        },
        {
            message: "Ajoutez votre adresse e-mail professionnelle pour bénéficier d'avantages supplémentaires pour vos voyages d'affaires, tels que des notes de frais simplifiées.",
            date: '12 août 2022',
            isReaded: false
        },
        {
            message: "Ajoutez votre adresse e-mail professionnelle pour bénéficier d'avantages supplémentaires pour vos voyages d'affaires, tels que des notes de frais simplifiées.",
            date: '12 août 2022',
            isReaded: false
        },
        {
            message: "Ajoutez votre adresse e-mail professionnelle pour bénéficier d'avantages supplémentaires pour vos voyages d'affaires, tels que des notes de frais simplifiées.",
            date: '12 août 2022',
            isReaded: true
        },
        {
            message: "Ajoutez votre adresse e-mail professionnelle pour bénéficier d'avantages supplémentaires pour vos voyages d'affaires, tels que des notes de frais simplifiées.",
            date: '12 août 2022',
            isReaded: false
        },
    ]

    return (
        <div style={{width: '100%'}}>
            <Box sx={{zIndex: 100, position: 'sticky', top: 0 }}>
                <Header values={headerValues} setters={headerSetters} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <Box sx={{width: "50%"}}>
                    <Typography sx={{fontSize: 25, fontWeight: 'bold', mt: 4, mb: 2}} >
                        Notifications
                    </Typography>
                </Box>
                <Box sx={{width: '50%'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        {
                            datas.map((data, key) => (
                                <div key={key}>
                                    <Button sx={{display: 'flex', textTransform: 'none', color: "common.black", textAlign: 'left'}}>
                                        <CircleNotificationsRoundedIcon sx={{fontSize: 60, mx: 2, color: data.isReaded ? 'common.black' : 'primary.main'}} />
                                        <Box sx={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                                            <Typography variant={'body2'} sx={{fontSize: 16, fontWeight: data.isReaded ? "" : 'bold', }} >
                                                {data.message}
                                            </Typography>
                                            <Typography sx={{fontSize: 16}} >
                                                {data.date}
                                            </Typography>
                                        </Box>
                                        <IconButton sx={{mx: 1.5, color: 'common.black'}}>
                                            <CloseRoundedIcon />
                                        </IconButton>
                                    </Button>
                                    <Divider variant={'middle'} orientation={'horizontal'} />
                                </div>
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default Notifications;