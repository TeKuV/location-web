import React from 'react'
//Icons
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';

export const page1 = [
    {
        label:  "Maison",
        icon: <HomeRoundedIcon sx={{fontSize: "70px", color: 'common.black'}} />,
    },
    {
        label:  "Appartement",
        icon: <ApartmentRoundedIcon sx={{fontSize: "70px", color: 'common.black'}} />,
    },
]

export const page2 = [
    {
        label:  "Logement",
        desc: "Un logement qui peut être indépendant ou avoir des murs mitoyens.",
    },
    {
        label:  "Cabane",
        desc: "Une maison construite avec des matériaux naturels comme le bois et située dans un cadre naturel.",
    },
    {
        label:  "Villa",
        desc: "Un logement de luxe qui peut avoir des espaces intérieurs et extérieurs, des jardins et des piscines.",
    },
    {
        label:  "Maison de ville",
        desc: "Une maison en rangée ou en terrasse sur plusieurs niveaux avec des murs mitoyens et éventuellement des espaces extérieurs",
    },
    {
        label:  "Pension",
        desc: "Une maison avec barbecue et espace commun dans la campagne coréenne.",
    },
]

export const page3 = [
    {
        label:  "Un logement entier",
    },
    {
        label:  "Une chambre privée",
    },
    {
        label:  "Une chambre partagée",
    },
]

export const page4 = [
    ["Adultes", "13 ans et plus"],
    ["Enfants", "de 2 à 12 ans"],
    ["Bébés", "Mois de 2 ans"],
]