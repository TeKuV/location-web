import React from 'react';
import {Box, Button, Card, CardContent, Checkbox, Container, Divider, Typography} from "@mui/material";
import CarouselCard from "./CarouselCard";
import GradeTwoToneIcon from '@mui/icons-material/GradeTwoTone';
import {useNavigate} from 'react-router-dom'
import {Favorite, FavoriteBorder, FavoriteTwoTone} from "@mui/icons-material";

const renderCards = (items, navigate) => {
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
                width: 327,
                "&:hover": {
                    boxShadow: "2px 2px 5px 3px #E6E6E6",
                },
                borderRadius: 5,
                mb: 1,
                // p: 1,
                pb: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

            }}
                  elevation={0}
            >
                <Button sx={{textTransform: 'none', display: 'inherit', flexDirection: 'inherit', alignItems: 'inherit', textAlign: 'left', zIndex: 0}} onClick={(event) => handleClick(event, item.id)}>
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
                                        {item.place}, {item.city}
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
                        <Typography fontSize={14} component="div">
                            {item.precision}
                        </Typography>
                        <Typography fontSize={14} component="div">
                            {item.availibityDate}
                        </Typography>
                        <Divider />
                        <Typography fontSize={15} sx={{color: 'secondary.main'}} component="div">
                            <span style={{}}>{item.price}&nbsp;Fcfa</span>&nbsp;nuit
                        </Typography>
                    </CardContent>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}} />} sx={{position: 'sticky', bottom: "90%", left: "87%", zIndex: 1, color: 'red', p: 0}} />
                </Button>
            </Card>
        )
    })

    return cards;
}

const Cards = ({items}) => {
    const navigate = useNavigate();

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
                   {renderCards(items, navigate)}
               </Box>
           {/*</Container>*/}
        </Box>
    );
};

export default Cards;