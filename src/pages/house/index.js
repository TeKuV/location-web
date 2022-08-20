import React, {useState, useEffect} from 'react';
import Header from "../../components/header";
import {Avatar, Box, Container, Divider, Paper, Typography} from "@mui/material";
import Overview from "../../components/house/overview";
import {cardItems} from "../../components/forTest/cardItems";
import {useParams} from "react-router-dom";
import Bookroom from "../../components/house/Bookroom";
import HouseFooter from "../../components/footer/HouseFooter";

const House = ({headerValues, headerSetters}) => {
    const [date, setDate] = React.useState("");
    const { where, arrival, adults, children, babies } = headerValues;
    const { setWhere, setArrival, setAdults, setChildren, setBabies } = headerSetters;

    let { houseId } = useParams()
    const [house, setHouse] = useState({})
    const refreshCard = (id) => {
        cardItems.map((el) => {
            if(el.id === id) {
                setHouse(el);
            }
        })
    }
    useEffect(() => {
        console.log("HouseId : ", houseId)
        refreshCard(parseInt(houseId));
    }, [])

    return (
        <div>
            <Box sx={{zIndex: 100, position: 'sticky', top: 0 }}>
                <Header values={headerValues} setters={headerSetters} />
            </Box>
            <Container maxWidth={"lg"}>
                <Overview house={house} />
                <Box sx={{display: 'flex', flexGrow: 1}}>
                    <Box sx={{
                        width: '60%',
                        mr: 2,
                        // m: 2,
                        // p: 2,
                        // borderTop: "1px solid black",
                        // borderRight: "1px solid black",
                        // borderRadius: 3,
                        // borderBottom: "1px solid black"
                    }}>
                        <Typography sx={{fontSize: 20, fontWeight: 'bold',}}>Avis</Typography>
                        <Divider orientation={"horizontal"}  />
                        <Box sx={{p: 1}}>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <Avatar>H</Avatar>
                                <Box sx={{ml: 2}}>
                                    <Typography sx={{fontSize: '14'}}>Emmanuel</Typography>
                                    <Typography sx={{fontSize: '12', color: '#cdcdcd'}}>{`${new Date()}`}</Typography>
                                </Box>
                            </Box>
                            <Typography sx={{fontSize: '16'}}>
                                A beautiful place to stay and relax with a gorgeous pool. Lovely breakfast in the morning. Would recommend.
                            </Typography>
                            <Divider orientation={"horizontal"} />
                        </Box>
                        <Box sx={{p: 1}}>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <Avatar>H</Avatar>
                                <Box sx={{ml: 2}}>
                                    <Typography sx={{fontSize: '14'}}>Emmanuel</Typography>
                                    <Typography sx={{fontSize: '12', color: '#cdcdcd'}}>{`${new Date()}`}</Typography>
                                </Box>
                            </Box>
                            <Typography sx={{fontSize: '16'}}>
                                A beautiful place to stay and relax with a gorgeous pool. Lovely breakfast in the morning. Would recommend.
                            </Typography>
                            <Divider orientation={"horizontal"} />
                        </Box>
                        <Box sx={{p: 1}}>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <Avatar>H</Avatar>
                                <Box sx={{ml: 2}}>
                                    <Typography sx={{fontSize: '14'}}>Emmanuel</Typography>
                                    <Typography sx={{fontSize: '12', color: '#cdcdcd'}}>{`${new Date()}`}</Typography>
                                </Box>
                            </Box>
                            <Typography sx={{fontSize: '16'}}>
                                A beautiful place to stay and relax with a gorgeous pool. Lovely breakfast in the morning. Would recommend.
                            </Typography>
                            <Divider orientation={"horizontal"} />
                        </Box>
                        <Box sx={{p: 1}}>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <Avatar>H</Avatar>
                                <Box sx={{ml: 2}}>
                                    <Typography sx={{fontSize: '14'}}>Emmanuel</Typography>
                                    <Typography sx={{fontSize: '12', color: '#cdcdcd'}}>{`${new Date()}`}</Typography>
                                </Box>
                            </Box>
                            <Typography sx={{fontSize: '16'}}>
                                A beautiful place to stay and relax with a gorgeous pool. Lovely breakfast in the morning. Would recommend.
                            </Typography>
                            <Divider orientation={"horizontal"} />
                        </Box>
                        <Box sx={{p: 1}}>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <Avatar>H</Avatar>
                                <Box sx={{ml: 2}}>
                                    <Typography sx={{fontSize: '14'}}>Emmanuel</Typography>
                                    <Typography sx={{fontSize: '12', color: '#cdcdcd'}}>{`${new Date()}`}</Typography>
                                </Box>
                            </Box>
                            <Typography sx={{fontSize: '16'}}>
                                A beautiful place to stay and relax with a gorgeous pool. Lovely breakfast in the morning. Would recommend.
                            </Typography>
                            <Divider orientation={"horizontal"} />
                        </Box>
                    </Box>
                    <Box sx={{display: 'inherit', width: '40%', height: 420}}>
                        <Bookroom house={house} date={date} setDate={setDate} who={[adults, children, babies]} setWho={[setAdults, setChildren, setBabies]} />
                    </Box>
                </Box>
            </Container>
            <HouseFooter />
        </div>
    );
};

export default House;