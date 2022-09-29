import React from 'react';
import Header from "../../components/header";
import {Box, Button, Divider, Paper, TextField, Typography} from "@mui/material";
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import image from '../../assets/images/email.jpg'
import Footer from "../../components/footer";

const contactInfos = [
    {
        icon: <PlaceRoundedIcon sx={{fontSize: 75, color: 'primary.main'}} />,
        typo: "Cameroun site Yaoundé",
    },
    {
        icon: <PhoneAndroidRoundedIcon sx={{fontSize: 75, color: 'primary.main'}} />,
        typo: "(+237) 677889900) \\ \n (+237) 655443322",
    },
    {
        icon: <EmailRoundedIcon sx={{fontSize: 75, color: 'primary.main'}} />,
        typo: "contact@lkt.cm",
    },
]

const ContactUs = ({headerSetters, headerValues}) => {
    return (
        <>
            <Box sx={{zIndex: 100, position: 'sticky', top: 0 }}>
                <Header values={headerValues} setters={headerSetters} />
            </Box>
            <Box sx={{display: 'flex', width: "100%", mb: 10}}>
                <Box sx={{maxWidth: '50%'}}>
                    <img src={image} alt={"image"} width={"100%"} />
                </Box>
                <Box sx={{width: '50%'}}>
                    <Typography sx={{fontSize: 50, }}>Contactez <span style={{fontSize: 70, color: "#025579"}}>LeKwatt</span></Typography>
                    <Typography sx={{fontSize: '19'}}>N’hésitez pas de nous adresser vos demandes à l’aide de ce formulaire de contacts. Nous vous répondrons dans les plus brefs délais</Typography>
                    <Paper sx={{width: '90%', my: 2, boxShadow: "25px #efefef"}} elevation={0}>
                        <TextField sx={{border: 'none', width: '100%', outline: 'none'}} placeholder={"Votre nom"} />
                    </Paper>
                    <Paper sx={{width: '90%', my: 2, boxShadow: "25px #efefef"}} elevation={0}>
                        <TextField sx={{border: 'none', width: '100%', outline: 'none'}} placeholder={"Votre Courriel"} />
                    </Paper>
                    <Paper sx={{width: '90%', my: 2, boxShadow: "25px #efefef"}} elevation={0}>
                        <TextField sx={{border: 'none', width: '100%', outline: 'none'}} placeholder={"Sujet"} />
                    </Paper>
                    <Paper sx={{width: '90%', my: 2, boxShadow: "25px #efefef"}} elevation={0}>
                        <TextField sx={{border: 'none', width: '100%', outline: 'none'}} placeholder={"Votre Message"} />
                    </Paper>
                    <Button variant={"contained"} sx={{fontSize: "20px", textTransform: 'none'}}>Envoyer</Button>
                </Box>
            </Box>
            <Divider orientation={'horizontal'} variant={"middle"} />
            <Box sx={{display: 'flex', justifyContent: 'center', my: 5}}>
                <Box sx={{display: 'flex', justifyContent: 'space-evenly', width: {xs: "90%", md: "80%", lg: "70%",}}}>
                    {contactInfos.map((contact, index) => (
                        <Box key={index} sx={{textAlign: 'center'}}>
                            {contact.icon}
                            <Typography sx={{fontSize: '20px'}}>{contact.typo}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'center'}}>
                <Paper sx={{
                    width: {xs: "95%", md: '90%', lg: '85%', xl: '80%'},
                    p: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    color: 'common.white',
                    backgroundImage: "linear-gradient(to right, #025579, #dcb344)",
                }}
                       elevation={0}
                >
                    <Typography sx={{fontSize: 75}}>Soyez a jour</Typography>
                    <Typography sx={{fontSize: 20}}>Incrivez-vous a notre newsletter. Nous vous communiquons toutes nos activités et offres. </Typography>
                    <Box sx={{display: 'flex', flexGrow: 1, flexDirection: {xs: 'column', md: 'row'}, width: {xs: "95%", md: '80%', lg: '75%', xl: '70%'}, my: 5}}>
                        <TextField sx={{flexGrow: 1, bgcolor: 'white', outline: 'none', borderRadius: 2}} placeholder={"Entrez votre adresse mail"} />
                        <Button variant={"contained"} sx={{textTransform: 'none', ml: 2, }}><Typography sx={{fontSize: 20, mx: 3}}>S'inscrire</Typography></Button>
                    </Box>
                </Paper>
            </Box>
            <Box sx={{pb: 10}} />
            <Footer />
        </>
    );
};

export default ContactUs;