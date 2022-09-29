import React from 'react';
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import {Button, Typography, Modal, Fade, Backdrop, Box, Divider, IconButton} from "@mui/material";
import CheckEls from "./templates/CheckEls";
import {
    equipmentsTypos,
    hostLanguageTypos,
    housingTypeTypos,
    propertyTypesTypos,
    roomAndBedTypos
} from "./templates/typos";
import CheckElsWithoutDesc from "./templates/CheckElsWithoutDesc";
import ListSelect from "./templates/ListSelect";
import ListSelectIcon from "./templates/ListSelectIcon";
import ListOptions from "./templates/ListOptions";
import Chart from "./templates/Chart";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 5,
    width: 710,
    maxHeight: 630,
    bgcolor: 'background.paper',
    border: '2px solid #025579',
    boxShadow: 24,
    p: 2
};

const pricePerNight = 1000;

const Filter = ({filterValues, filterSetters}) => {
    const {priceRange, housingType, roomAndBed, propertyType, equipments, reservationOptions, accessibilityElements, exceptionnalStays, hostLanguage} = filterValues;
    const {setPriceRange, setHousingType, setRoomAndBed, setPropertyType, setEquipments, setReservationOptions, setAccessibilityElements, setExceptionnalStays, setHostLanguage} = filterSetters;

    const [open, setOpen] = React.useState(false);
    const handleCloseFilter = () => setOpen(false);

    const handleShowFilter = () => {
        setOpen(true)
    }

    const handleCloseAndSearch = () => {
        setOpen(false)
    }

    return (
        <>
            <Button variant={'outlined'} size={'large'} sx={{textTransform: 'none', color: 'primary.main'}} startIcon={<FilterAltRoundedIcon />} onClick={handleShowFilter} >Filtres</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleCloseFilter}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Box>

                    <Box sx={style}>
                        <Box sx={{display: 'flex', pb: 1, borderBottom: '1px solid black', alignItems: 'center',}}>
                            <Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'center',}}>
                                <Typography sx={{fontSize: 20}} component="h2">
                                    Filtres
                                </Typography>
                            </Box>
                            <IconButton onClick={handleCloseFilter} sx={{color: 'common.black'}}>
                                <CloseRoundedIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{
                            maxHeight: 500,
                            overflowY: 'auto',
                        }}>
                            <Box sx={{ my: 2}}>
                                <Typography sx={{ fontSize: 20 }}>
                                    Fourchette de prix
                                </Typography>
                                <Typography sx={{ fontSize: 15 }}>
                                    Le prix moyen par nuits est de {pricePerNight} Fcfa
                                </Typography>
                                <Chart datas={priceRange} setDatas={setPriceRange} />
                            </Box>
                            <Box sx={{ my: 2}}>
                                <Typography sx={{ fontSize: 20 }}>
                                    Type de logement
                                </Typography>
                                <CheckEls datas={housingType} setDatas={setHousingType} typos={housingTypeTypos}  />
                            </Box>
                            <Box sx={{ my: 2}}>
                                <Typography sx={{ fontSize: 20 }}>
                                    Chambres et lits
                                </Typography>
                                <ListSelect datas={roomAndBed} setDatas={setRoomAndBed} typos={roomAndBedTypos}  />
                            </Box>
                            <Box sx={{ my: 2}}>
                                <Typography sx={{ fontSize: 20 }}>
                                    Type de propriété
                                </Typography>
                                <ListSelectIcon datas={propertyType} setDatas={setPropertyType} typos={propertyTypesTypos}  />
                            </Box>
                            <Box sx={{ my: 2}}>
                                <Typography sx={{ fontSize: 20 }}>
                                    Équipements
                                </Typography>
                                <ListOptions datas={equipments} setDatas={setEquipments} typos={equipmentsTypos}  />
                            </Box>
                            <Box sx={{ my: 2}}>
                                <Typography sx={{ fontSize: 20 }}>
                                    Langue de l'hôte
                                </Typography>
                                <CheckElsWithoutDesc datas={hostLanguage} setDatas={setHostLanguage} typos={hostLanguageTypos}  />
                            </Box>
                        </Box>
                        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Box>

                            </Box>
                            <Button variant={'contained'} sx={{textTransform: 'none'}} onClick={handleCloseAndSearch}>
                                <Typography sx={{fontSize: 18}} component="h2">
                                    Rechercher
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
};

export default Filter;