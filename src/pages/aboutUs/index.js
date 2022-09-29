import React from 'react';
import Header from "../../components/header";
import {Box, Typography} from "@mui/material";
import Footer from "../../components/footer";
import aboutUs from "../../assets/images/AboutUs.webp"
import profil1 from "../../assets/images/profil1.jpg"
import profil2 from "../../assets/images/profil2.jpg"
import profil3 from "../../assets/images/profil3.jpg"


const AboutUs = ({headerSetters, headerValues}) => {
    const profils = [
        {
            image: profil1,
            name: "TEUGA KETCHA Ulrich",
            description: 'Developpeur',
        },
        {
            image: profil2,
            name: "KEMDJOU Billy",
            description: 'Developpeur',
        },
        {
            image: profil3,
            name: "Name Thierry",
            description: 'Developpeur',
        },
    ]

    const cards = [
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
    ]

    return (
        <>
            <Box sx={{zIndex: 100, position: 'sticky', top: 0 }}>
                <Header values={headerValues} setters={headerSetters} />
            </Box>
            <img src={aboutUs} alt={"A propos de nous"} style={{width: '100%', maxHeight: "700px"}} />
            <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', my: 10,}} textAlign={"center"}>
                <Typography sx={{fontWeight: 'bold', fontSize: 30}} gutterBottom>A propos de nous</Typography>
                <Typography sx={{width: {xs: '80%', md: "60%", fontSize: 18}}}>
                    LeKwatt est né en 2022 lorsque deux Hôtes ont accueilli trois invités dans leur maison de San Francisco. Depuis, il compte plus de 4 millions d'Hôtes qui ont accueilli plus d'un milliard d'invités dans presque tous les pays du monde. Chaque jour, les Hôtes proposent des séjours et des expériences uniques qui permettent aux voyageurs de se connecter avec les communautés de manière plus authentique.
                </Typography>
            </Box>
            <Box sx={{width: '100%', p: 10, backgroundColor: '#f2f2f2', }}>
                <Typography sx={{fontSize: 35, mb: 1}} gutterBottom>Faits rapides</Typography>
                <Box sx={{display: 'flex', width: 'inherit', flexWrap: "wrap"}}>
                    {cards.map((card, index) => (
                        <Box key={index} sx={{width: 330, height: 250, bgcolor: 'common.white', borderRadius: 4, p: 3, my: 1, mr: 2}}>
                            <Typography sx={{fontWeight: 'bold', fontSize: 80}}>6000</Typography>
                            <Typography>Nombre total de locations</Typography>
                            <Typography sx={{mt: 5}}>au 31 Mars 2022</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box sx={{width: '100%', p: 10, display: 'flex', justifyContent: 'space-evenly'}}>
                {profils.map((profil, index) => (
                    <Box key={index}>
                        <img src={profil.image} alt={"index"} width={350} height={400} style={{borderRadius: 10}} />
                        <Box sx={{mt: 1}}>
                            <Typography sx={{fontWeight: 'bold'}}>{profil.name}</Typography>
                            <Typography>{profil.description}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
            <Box sx={{pb: "80px"}} />
            <Footer />
        </>
    );
};

export default AboutUs;