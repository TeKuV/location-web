import React, {useEffect, useState} from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import SwiperBar from "../../components/swiperbar";
import Cards from "../../components/cards";
import {Box, Button, Card, CardContent, Divider, Fab, Paper, Skeleton, Typography} from "@mui/material";
import {cardItems} from "../../components/forTest/cardItems";
import Filter from "../../components/swiperbar/Filter";
import WhatshotRoundedIcon from '@mui/icons-material/WhatshotRounded';
import Suggestion from "../../components/header/suggestion";
import callApi from "../../components/callApi";
import noFoundDatas from "../../assets/images/No data-pana.svg"
import AnimatedPage from "../utilities/AnimatedPage";

const Main = ({headerValues, headerSetters}) => {
    const [cards, setCards] = React.useState([]);
    const [fetched, setFetched] = useState([])
    const [types, setTypes] = useState([])
    const [value, setValue] = React.useState("");
    const [openSuggestion, setOpenSuggestion] = useState(false)
    const [isLoading, setIsLoading] = React.useState(true)

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

    const refreshCards = async (newValue, datas) => {
        const items = [];
        if(datas.length !== 0) {
            datas.map((el) => {
                if(el.type.slug === newValue) {
                    items.push(el);
                }
            })
            setCards(items);
        }
    }

    const handleOpenSuggestion = () => {
        setOpenSuggestion(true)
    }
    useEffect(() => {
        async function fetchDatas() {
            await callApi.getTypeOfLocation().then(async (res) => { await setTypes(res.data ); if(res.data.length !== 0) { await setValue(res.data[0].slug)}})
            await callApi.listing().then(async (res) => { await setFetched(res.data); console.log("CallApi listing : ", res.data); refreshCards(value, res.data); })
        }
        fetchDatas()
        setTimeout(() => {
            setIsLoading(false)
            setTimeout(() => {
                if(Notification.permission==="granted") {
                    //Not
                }
                else {
                    Notification.requestPermission().then((response) => {
                        if(response==="granted") {
                            const notify = new Notification("Desormais vous recevrez les annonces provenant de l'application LeKwatt.")
                        }

                    })
                }
            }, 2000)
        }, 3000)
        console.log("CallApi listing : ", fetched)
    }, [isLoading])

    const handleChangeCategorie = (event, newValue) => {
        setValue(newValue);
        refreshCards(newValue, fetched)
        console.log("Nouvelle valeur: ", newValue)
        // refreshCards(newValue);
    };

    if(isLoading) {
        const cat = 16
        const cats = [];
        const cardN = 8
        const cards = []
        for(let i=0; i<cardN; i++) {
            cards.push(
                <Card sx={{width: 330, display: 'flex', mb: 1, pt: 0.8, pb: 3, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: 5}} elevation={0}>
                    <Skeleton variant={"rectangular"} width={318} height={301} sx={{borderRadius: 5}} />
                    <CardContent sx={{display: 'flex', flexDirection: 'column', px: 1, py: 1.5, width: '100%'}}>
                        <Box sx={{
                            display: 'flex',
                            flexGrow: 1
                        }}>
                            <Box sx={{
                                display: 'inherit',
                                flexGrow: 1,
                            }}>
                                <Skeleton variant={"text"} width={115} sx={{fontSize: 15}} />
                            </Box>
                            <Box sx={{
                                display: 'inherit',
                                flexGrow: 1,
                                justifyContent: 'flex-end',
                                alignItems: 'center'
                            }}>
                                <Skeleton variant={"circular"} width={15} height={15} sx={{mr: 0.5}} />
                                <Skeleton variant={"text"} width={80} sx={{fontSize: 15}} />
                            </Box>
                        </Box>
                        <Skeleton variant={"text"} width={165} sx={{fontSize: 14}} />
                        <Divider />
                        <Skeleton variant={"text"} width={140} sx={{fontSize: 15}} />
                    </CardContent>
                </Card>
            )
        }

        for(let i=0; i<cat; i++) {
            cats.push(
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', px: 1}}>
                    <Skeleton variant={"circular"} width={44} height={44} />
                    <Skeleton variant={"text"} width={113} sx={{mt: 0.5}} />
                </Box>
            )
        }
        return (
            <AnimatedPage>
                <Box sx={{width: '100%', height: '100vh'}}>
                    <Paper variant="rectangular" width={'inherit'} sx={{display: 'flex', alignItems: 'center', px: '55px', py: '8px', verticalAlign: 'middle', borderBottom: '1px solid grey'}} elevation={4}>
                        <Skeleton variant={"rectangular"} width={138} height={44} sx={{borderRadius: 100}} />
                        <Box sx={{display: 'flex',  flexGrow: 1, justifyContent: "center", verticalAlign: 'middle', alignItems: 'center'}}>
                            <Skeleton variant={"rectangular"} width={371} height={44} sx={{borderRadius: 100}} />
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', verticalAlign: 'middle'}}>
                            <Skeleton variant={"text"} width={95} />
                            <Skeleton variant={"circular"} width={38} height={38} sx={{borderRadius: 100, mx: 1.5}} />
                            <Skeleton variant={"rectangular"} width={73} height={44} sx={{borderRadius: 100}} />
                        </Box>
                    </Paper>
                    <Paper variant="rectangular" width={'inherit'} sx={{display: 'flex', alignItems: 'center', pl: '55px', pr: 2, py: '2px', verticalAlign: 'middle', borderBottom: '1px solid grey' }} elevation={4}>
                        <Box sx={{display: 'flex', flexGrow: 1, verticalAlign: 'middle', alignItems: 'center', overflow: 'hidden'}}>
                            {cats}
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', verticalAlign: 'middle', px: 2}}>
                            <Skeleton variant={"rectangular"} width={113} height={44} sx={{borderRadius: 1}} />
                        </Box>
                    </Paper>
                    <Paper width={'inherit'} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', px: '55px', py: '5px', flexGrow: 1, }} elevation={4}>
                        <Box sx={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                            {cards}
                        </Box>
                    </Paper>
                    <div style={{position: 'fixed', bottom: 0, overflow: 'hidden', width: '100%', }}>
                        <Paper sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', px: '35px', py: '14px', flexGrow: 1, borderTop: '1px solid black', borderRadius: 0, overflow: 'hidden'}} elevation={0}>
                            <Box sx={{flexGrow: 1, display: 'flex',}}>
                                <Skeleton variant={"text"} width={145} sx={{mx: 1}} />
                                <Skeleton variant={"text"} width={115} sx={{mx: 1}} />
                                <Skeleton variant={"text"} width={115} sx={{mx: 1}} />
                                <Skeleton variant={"text"} width={115} sx={{mx: 1}} />
                            </Box>
                            <Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'flex-end'}}>
                                <Skeleton variant={"text"} width={115} sx={{mx: 1}} />
                                <Skeleton variant={"text"} width={115} sx={{mx: 1}} />
                                <Skeleton variant={"text"} width={115} sx={{mx: 1}} />
                            </Box>
                        </Paper>
                    </div>
                </Box>
            </AnimatedPage>
        )
    }

    return (
        <AnimatedPage>
            <Box sx={{zIndex: 100, position: 'sticky', top: 0 }}>
                <Header values={headerValues} setters={headerSetters} />
                <Paper sx={{display: 'flex', width: '100%'}}>
                    <Box sx={{width: '90%'}}>
                        <SwiperBar value={value} setValue={setValue} handleChangeCategorie={handleChangeCategorie} types={types} />
                    </Box>
                    <Box sx={{display: 'inherit', width: '10%', alignItems: 'center', justifyContent: 'center'}}>
                        <Filter filterValues={filterValues} filterSetters={filterSetters} />
                    </Box>
                </Paper>
            </Box>
            <Box sx={{zIndex: 200, position: 'fixed', top: '82%', left: '45%', display: 'flex', justifyContent: 'center',}}>
                <Fab variant="extended" aria-label="add" sx={{bgcolor: 'common.white', fontSize: 17, textTransform: 'none', color: '#e25822', p: 2, border: '1px solid #e25822'}} onClick={handleOpenSuggestion}>
                    <WhatshotRoundedIcon sx={{ mr: 1,}} />
                    Suggestions
                </Fab>
            </Box>
            <Suggestion open={openSuggestion} setOpen={setOpenSuggestion} cards={cards} />
            {cards.length === 0 ?
                (
                    <Box sx={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <img src={noFoundDatas} height={350} alt={"No found datas"} />
                    </Box>
                ) :
                (
                    <Cards items={cards}/>
                )
            }
            <Footer />
        </AnimatedPage>
    );
};

export default Main;