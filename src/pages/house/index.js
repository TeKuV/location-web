import React, {useState, useEffect} from 'react';
import Header from "../../components/header";
import {
    Avatar,
    Box,
    Container,
    Divider,
    ImageList, ImageListItem,
    Paper,
    Skeleton,
    Typography
} from "@mui/material";
import Overview from "../../components/house/overview";
import {cardItems} from "../../components/forTest/cardItems";
import {useParams} from "react-router-dom";
import Bookroom from "../../components/house/Bookroom";
import HouseFooter from "../../components/footer/HouseFooter";
import callApi from "../../components/callApi";
import AnimatedPage from "../utilities/AnimatedPage";

const House = ({headerValues, headerSetters}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [date, setDate] = React.useState("");
    const { where, arrival, adults, children, babies } = headerValues;
    const { setWhere, setArrival, setAdults, setChildren, setBabies } = headerSetters;
    const [house, setHouse] = useState({})
    let { houseId } = useParams()

    useEffect(() => {
        async function fetchDatas() {
            await callApi.listing().then(async (res) => {
                console.log("CallApi listing : ", res.data);
                await res.data.map( async (el) => {
                    if(el.code === houseId) {
                        await setHouse(el);
                    }
                })
            })
        }
        fetchDatas()
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [isLoading])

    if(isLoading) {
        return (
            <AnimatedPage>
                <Paper position="static" sx={{width: '100%', display: 'flex', alignItems: 'center', px: '55px', py: '8px', verticalAlign: 'middle', borderBottom: '1px solid grey'}} elevation={2}>
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
                <Container maxWidth={"lg"}>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: "center", flexGrow: 1, my: 3}}>
                        <Box sx={{display: 'inherit', flexDirection: 'inherit', flexGrow: 'inherit'}}>
                            <Box sx={{display: 'inherit', flexDirection: 'row', flexGrow: 'inherit', alignItems: 'center'}}>
                                <Box sx={{
                                    display: 'inherit',
                                    flexGrow: 'inherit',
                                }}>
                                    <Skeleton variant="text" sx={{fontSize: 25}} width={317} />
                                </Box>
                                <Box sx={{
                                    display: 'inherit',
                                    justifyContent: 'flex-end'
                                }}>
                                    <Skeleton variant="text" sx={{fontSize: 25, mr: 1}} width={110} />
                                    <Skeleton variant="text" sx={{fontSize: 25}} width={110} />
                                </Box>
                            </Box>
                            <Box sx={{display: 'inherit', flexDirection: 'row'}}>
                                <Skeleton variant="text" sx={{fontSize: 25}} width={350} />
                            </Box>
                            <Box sx={{
                                display: 'inherit',
                                flexGrow: "inherit",
                            }}>
                                <ImageList
                                    sx={{ width: 1200, height: 'auto', borderRadius: 5 }}
                                    variant="quilted"
                                    cols={4}
                                    rowHeight={90}
                                >
                                    <ImageListItem cols={2} rows={4}>
                                        <Skeleton variant="rectangular" height={370} />
                                    </ImageListItem>
                                    <ImageListItem cols={1} rows={2}>
                                        <Skeleton variant="rectangular" height={182} />
                                    </ImageListItem>
                                    <ImageListItem cols={1} rows={2}>
                                        <Skeleton variant="rectangular" height={182} />
                                    </ImageListItem>
                                    <ImageListItem cols={1} rows={2}>
                                        <Skeleton variant="rectangular" height={182} />
                                    </ImageListItem>
                                    <ImageListItem cols={1} rows={2}>
                                        <Skeleton variant="rectangular" height={182} />
                                    </ImageListItem>
                                </ImageList>
                            </Box>
                            <Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'flex-end'}}>
                                <Skeleton variant="rounded" width={300} height={35} />
                            </Box>
                        </Box>

                    </Box>
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
                            <Skeleton variant="text" sx={{fontSize: 30}} width={50} />
                            <Divider orientation={"horizontal"}  />
                            <Box sx={{p: 1}}>
                                <Box sx={{display: 'flex', alignItems: 'center'}}>
                                    <Skeleton variant="circular" height={41} width={41} />
                                    <Box sx={{ml: 2}}>
                                        <Skeleton variant="text" sx={{fontSize: 15}} width={250} />
                                        <Skeleton variant="text" sx={{fontSize: 15}} width={457} />
                                    </Box>
                                </Box>
                                <Skeleton variant="text" sx={{fontSize: 16}} maxWidth={614} />
                                <Skeleton variant="text" sx={{fontSize: 16}} maxWidth={625} />
                                <Divider orientation={"horizontal"} />
                            </Box>
                            <Box sx={{p: 1}}>
                                <Box sx={{display: 'flex', alignItems: 'center'}}>
                                    <Skeleton variant="circular" height={41} width={41} />
                                    <Box sx={{ml: 2}}>
                                        <Skeleton variant="text" sx={{fontSize: 15}} width={250} />
                                        <Skeleton variant="text" sx={{fontSize: 15}} width={457} />
                                    </Box>
                                </Box>
                                <Skeleton variant="text" sx={{fontSize: 16}} maxWidth={614} />
                                <Skeleton variant="text" sx={{fontSize: 16}} maxWidth={625} />
                                <Divider orientation={"horizontal"} />
                            </Box>
                        </Box>
                        <Paper sx={{display: 'inherit', width: '40%', justifyContent: 'center', alignItems: 'center', m: 1, p: 2, flexGrow: 1}}>
                             <Box sx={{textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%', p: 1}}>
                                        <Skeleton variant="rounded" height={28} width={218} />
                                        <Box sx={{paddingRight: 2}} />
                                        <Box sx={{
                                            display: 'inherit',
                                            flexDirection: 'row',
                                            flexGrow: 1,
                                            justifyContent: 'flex-end'
                                        }}>
                                            <Skeleton variant="text" sx={{fontSize: 18}} width={94} />
                                        </Box>
                                    </Box>
                                    <Divider orientation={"horizontal"} variant={'middle'} />
                                    <Skeleton variant="text" sx={{fontSize: 14, mt: 1}} width={140} />
                                    <Skeleton variant="rounded" height={55} width={"100%"} />
                                    <Skeleton variant="text" sx={{fontSize: 15, mt: 1}} width={140} />
                                    <Skeleton variant="rounded" height={55} width={"100%"} />
                                    <Skeleton variant="rounded" sx={{py: 1.5, my: 2, mx: 1}} height={50} width={"100%"} />
                                    <Box sx={{display: 'flex', flexGrow: 1, width: '100%', py: 1}}>
                                        <Box sx={{
                                            display: 'inherit',
                                            flexGrow: 'inherit'
                                        }}>
                                            <Skeleton variant="text" sx={{fontSize: 16}} width={200} />
                                        </Box>
                                        <Box sx={{
                                            display: 'inherit',
                                            justifyContent: 'flex-end',
                                            flexGrow: 'inherit'
                                        }}>
                                            <Skeleton variant="text" sx={{fontSize: 16}} width={100} />
                                        </Box>
                                    </Box>
                                    <Divider orientation={"horizontal"} />
                                    <Box sx={{display: 'flex', flexGrow: 1, width: '100%',}}>
                                        <Box sx={{
                                            display: 'inherit',
                                            flexGrow: 'inherit',
                                        }}>
                                            <Skeleton variant="text" sx={{fontSize: 16}} width={140} />
                                        </Box>
                                        <Box sx={{
                                            display: 'inherit',
                                            justifyContent: 'flex-end',
                                            flexGrow: 'inherit'
                                        }}>
                                            <Skeleton variant="rectangular" sx={{fontSize: 16}} width={150} />
                                        </Box>
                                    </Box>
                                </Box>
                        </Paper>
                    </Box>
                </Container>
                {/*<div style={{marginTop: 100}}>*/}
                {/*    <Box sx={{flexGrow: 1, bgcolor: 'common.white', borderTop: "1px solid #b8b8b8", position: 'fixed', bottom: 0, zIndex: 1000, width: '100%'}}>*/}
                {/*        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>*/}
                {/*            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{textAlign: 'center'}}>*/}
                {/*                <Grid item xs={4}>*/}
                {/*                    <Typography sx={{fontSize: 15, fontWeight: 'bold'}}>Assistance</Typography>*/}
                {/*                </Grid>*/}
                {/*                <Grid item xs={4}>*/}
                {/*                    <Typography sx={{fontSize: 15, fontWeight: 'bold'}}>Communauté</Typography>*/}
                {/*                </Grid>*/}
                {/*                <Grid item xs={4}>*/}
                {/*                    <Typography sx={{fontSize: 15, fontWeight: 'bold'}}>Accueillir des locataires</Typography>*/}
                {/*                </Grid>*/}
                {/*            </Grid>*/}
                {/*        </Box>*/}
                {/*        <Divider orientation={"horizontal"} variant={'middle'} />*/}
                {/*        <FooterBar />*/}
                {/*    </Box>*/}
                {/*</div>*/}
                {/*<div style={{marginTop: 100}}>*/}
                {/*    <Box sx={{flexGrow: 1, bgcolor: 'common.white', borderTop: "1px solid #b8b8b8", position: 'fixed', bottom: 0, zIndex: 1000, width: '100%'}}>*/}
                {/*        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>*/}
                {/*            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{textAlign: 'center'}}>*/}
                {/*                <Grid item xs={4}>*/}
                {/*                    <Typography sx={{fontSize: 15, fontWeight: 'bold'}}>Assistance</Typography>*/}
                {/*                </Grid>*/}
                {/*                <Grid item xs={4}>*/}
                {/*                    <Typography sx={{fontSize: 15, fontWeight: 'bold'}}>Communauté</Typography>*/}
                {/*                </Grid>*/}
                {/*                <Grid item xs={4}>*/}
                {/*                    <Typography sx={{fontSize: 15, fontWeight: 'bold'}}>Accueillir des locataires</Typography>*/}
                {/*                </Grid>*/}
                {/*            </Grid>*/}
                {/*        </Box>*/}
                {/*        <Divider orientation={"horizontal"} variant={'middle'} />*/}
                {/*        <FooterBar />*/}
                {/*    </Box>*/}
                {/*</div>*/}
            </AnimatedPage>
        )
    }

    return (
        <AnimatedPage>
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
        </AnimatedPage>
    );
};

export default House;