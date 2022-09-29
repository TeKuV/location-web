import React, {useEffect, useState} from 'react';
import {Box, Button, Card, CardContent, Checkbox, Container, Divider, Typography} from "@mui/material";
import CarouselCard from "./CarouselCard";
import GradeTwoToneIcon from '@mui/icons-material/GradeTwoTone';
import {useNavigate} from 'react-router-dom'
import {Favorite, FavoriteBorder, FavoriteTwoTone} from "@mui/icons-material";

const renderCards = (items, navigate, isToken) => {
    const cards = [];

    const handleClick = (event, i) => {
        if(event.target.checked !== undefined) {

        } else {
            navigate(`/house/${i}`);
        }
    };
    items.map((item, index) => {
        cards.push(
            <Card sx={{
                width: 329,
                "&:hover": {
                    boxShadow: "2px 2px 5px 3px #E6E6E6",
                },
                borderRadius: 5,
                mb: 1,
                pb: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "1px solid #dddddd"
            }}
                  elevation={0}
            >
                <Button sx={{textTransform: 'none', display: 'inherit', flexDirection: 'inherit', alignItems: 'inherit', textAlign: 'left', zIndex: 0,}} onClick={(event) => handleClick(event, item.code)}>
                    <CarouselCard item={item.images} />
                    <CardContent sx={{display: 'flex', flexDirection: 'column',px: 0, py: 1.5, width: '100%'}}>
                        <Box sx={{
                                display: 'flex',
                                flexGrow: 1
                            }}>
                                <Box sx={{
                                    display: 'inherit',
                                    flexGrow: 1,
                                }}>
                                    <Typography fontSize={15} sx={{color: 'primary.main'}} component="div">
                                        {item.quartier.name}, Yaoundé
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    display: 'inherit',
                                    flexGrow: 1,
                                    justifyContent: 'flex-end'
                                }}>
                                    <GradeTwoToneIcon fontSize={'small'} />
                                    <Typography fontSize={15} component="div">
                                        {item.rating ? item.rating : "Nouveau"}
                                    </Typography>
                                </Box>
                        </Box>
                        {/*<Typography fontSize={14} component="div">*/}
                        {/*    {item.precision}*/}
                        {/*</Typography>*/}
                        <Typography fontSize={14} component="div">
                            {item.created_at}
                        </Typography>
                        <Divider />
                        <Typography fontSize={15} sx={{color: 'secondary.main'}} component="div">
                            <span style={{}}>{item.price}&nbsp;Fcfa</span>&nbsp;/&nbsp;Mois
                        </Typography>
                    </CardContent>
                    {
                        isToken ? (
                            <Checkbox icon={<FavoriteTwoTone sx={{color: "black"}} />} checkedIcon={<Favorite sx={{color: 'red'}} />} sx={{position: 'sticky', bottom: "90%", left: "87%", zIndex: 1, color: 'red', p: 0}} />
                        ) :
                        (
                            <Checkbox disabled icon={<FavoriteTwoTone sx={{color: "black"}} />} checkedIcon={<Favorite sx={{color: 'red'}} />} sx={{position: 'sticky', bottom: "90%", left: "87%", zIndex: 1, color: 'red', p: 0}} />
                        )
                    }
                </Button>
            </Card>
        )
    })

    return cards;
}

const Cards = ({items}) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true)
    const [token, setToken] = useState(null)

    useEffect(() => {
        console.log("Elements cartes : ", items)
        setIsLoading(false)
    }, [isLoading])

    useEffect(() => {
        let inter = sessionStorage.getItem('Connexion')
        if(inter !== null) {
            setToken(inter)
        }
    }, [])

    if(isLoading) {
        return (
            <></>
        )
    }

    return (
        <Box sx={{flexGrow: 1}}>
           {/*<Container sx={{*/}

           {/*}} >*/}
               <Box
                   sx={{
                       m: 2,
                       display: "flex",
                       flexDirection: "row",
                       flexWrap: "wrap",
                       justifyContent: "space-evenly",
                   }}
               >
                   {renderCards(items, navigate, Boolean(token))}
               </Box>
           {/*</Container>*/}
        </Box>
    );
};

export default Cards;