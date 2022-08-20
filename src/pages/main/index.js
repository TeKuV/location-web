import React, {useEffect, useState} from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import SwiperBar from "../../components/swiperbar";
import Cards from "../../components/cards";
import {Box, Button, Fab, Paper} from "@mui/material";
import {cardItems} from "../../components/forTest/cardItems";
import Filter from "../../components/swiperbar/Filter";
import WhatshotRoundedIcon from '@mui/icons-material/WhatshotRounded';
import Suggestion from "../../components/header/suggestion";

const Main = ({headerValues, headerSetters}) => {
    const [value, setValue] = React.useState(1);
    const [cards, setCards] = React.useState([]);
    const [openSuggestion, setOpenSuggestion] = useState(false)

    //Filter States
    const [priceRange, setPriceRange] = useState([30000, 700000])
    const [housingType, setHousingType] = useState([])
    const [roomAndBed, setRoomAndBed] = useState({rooms: "0", beds: "0", bathrooms: "0"})
    const [propertyType, setPropertyType] = useState({house: false, appartments: false, guestHouse: false, hostel: false})
    const [equipments, setEquipments] = useState({basicProductsServices: [], characteritics: [], place: [], security: []})
    const [reservationOptions, setReservationOptions] = useState([])
    const [accessibilityElements, setAccessibilityElements] = useState({passengerParking: [], room: [], bathrooms: [], equipements: []})
    const [exceptionnalStays, setExceptionnalStays] = useState([])
    const [hostLanguage, setHostLanguage] = useState([])

    //Props for Filter
    const filterValues = {priceRange, housingType, roomAndBed, propertyType, equipments, reservationOptions, accessibilityElements, exceptionnalStays, hostLanguage}
    const filterSetters = {setPriceRange ,setHousingType, setRoomAndBed, setPropertyType, setEquipments, setReservationOptions, setAccessibilityElements, setExceptionnalStays, setHostLanguage}

    const refreshCards = (newValue) => {
        const items = [];
        cardItems.map((el) => {
            if(el.categorie.id === newValue) {
                items.push(el);
            }
        })
        setCards(items);
    }
    const handleOpenSuggestion = () => {
        setOpenSuggestion(true)
    }
    useEffect(() => {
        refreshCards(value);
    }, [])

    const handleChangeCategorie = (event, newValue) => {
        setValue(newValue);
        console.log("Nouvelle valeur: ", newValue)
        refreshCards(newValue);
    };

    return (
        <div>
            <Box sx={{zIndex: 100, position: 'sticky', top: 0 }}>
                <Header values={headerValues} setters={headerSetters} />
                <Paper sx={{display: 'flex', width: '100%'}}>
                    <Box sx={{width: '90%'}}>
                        <SwiperBar value={value} setValue={setValue} handleChangeCategorie={handleChangeCategorie} />
                    </Box>
                    <Box sx={{display: 'inherit', width: '10%', alignItems: 'center', justifyContent: 'center'}}>
                        <Filter filterValues={filterValues} filterSetters={filterSetters} />
                    </Box>
                </Paper>
            </Box>
            <Box sx={{zIndex: 200, position: 'fixed', top: '90%', left: '45%', display: 'flex', justifyContent: 'center',}}>
                <Fab variant="extended" color="white" aria-label="add" sx={{textTransform: 'none', color: '#e25822', border: '1px solid #e25822'}} onClick={handleOpenSuggestion}>
                    <WhatshotRoundedIcon sx={{ mr: 1, }} />
                    Suggestions
                </Fab>
            </Box>
            <Suggestion open={openSuggestion} setOpen={setOpenSuggestion} cards={cards} />
            <Cards items={cards} />
            <Footer />
        </div>
    );
};

export default Main;