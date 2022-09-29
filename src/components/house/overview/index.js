import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Dialog,
    Divider,
    IconButton,
    ImageList,
    ImageListItem,
    Paper,
    Slide,
    Typography
} from "@mui/material";
import GradeTwoToneIcon from "@mui/icons-material/GradeTwoTone";
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import Images from "./Images";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import CloseIcon from "@mui/icons-material/Close";
import HoverRating from "./Rating";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function FullScreenDialog({open, setOpen, images}) {
    // const [isLoading, setIsLoading] = useState(true)
    //
    // useEffect(() => {
    //     if(images !== undefined) {
    //         setIsLoading(false)
    //     }
    // }, [isLoading])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    if(images === undefined) {
        return <></>
    }

    return (
        <>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <Box sx={{m: 2}}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box sx={{m: 2, mt: 0, display: 'flex', alignItems: 'center'}}>
                    <>
                        <ImageList sx={{ width: 1200, height: 'auto' }} variant="masonry" cols={2} gap={8}>
                            {images.map((item, key) => (
                                <ImageListItem key={key} >
                                    <img
                                        style={{borderRadius: 10}}
                                        src={`${item}?w=161&fit=crop&auto=format`}
                                        alt={key}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </>
                </Box>
            </Dialog>
        </>
    );
}

const Overview = ({house}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [open, setOpen] = React.useState(false);
    const [rating, setRating] = React.useState(2);

    const handleShowAll = () => {
        setOpen(true)
    }
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: "center", flexGrow: 1, my: 3}}>
           <Box sx={{display: 'inherit', flexDirection: 'inherit', flexGrow: 'inherit'}}>
               <Box sx={{display: 'inherit', flexDirection: 'row'}}>
                   <Typography sx={{fontSize: 25}}>{house.name}</Typography>
               </Box>
               <Box sx={{display: 'inherit', flexDirection: 'row', flexGrow: 'inherit', alignItems: 'center'}}>
                    <Box sx={{
                        display: 'inherit',
                        flexGrow: 'inherit',
                    }}>
                        <Box sx={{
                            display: 'inherit',
                            flexDirection: 'row',
                        }}>
                            <GradeTwoToneIcon fontSize={'small'} />
                            <Typography fontSize={15}>
                                {house.rating ? house.rating : "Nouveau"}
                            </Typography>
                        </Box>
                        <Divider orientation={"vertical"} sx={{mx: 0.5}} />
                        <Box sx={{
                            display: 'inherit',
                            flexDirection: 'row',
                        }}>
                            <Typography fontSize={15}>
                                43 Commentaires
                            </Typography>
                        </Box>
                        <Divider orientation={"vertical"} sx={{mx: 0.5}} />
                        <Typography fontSize={15}>
                            {house.place}, {house.city}
                        </Typography>
                    </Box>
                   <Box sx={{
                       display: 'inherit',
                       justifyContent: 'flex-end'
                   }}>
                      <Button sx={{textTransform: 'none', color: 'common.black'}} startIcon={<ShareRoundedIcon fontSize={'small'} />}>
                          <Typography sx={{color: 'common.black', fontSize: 15}}>Partager</Typography>
                      </Button>
                       <Button sx={{textTransform: 'none', color: 'common.black'}} startIcon={<FavoriteBorderRoundedIcon fontSize={'small'} />}>
                           <Typography sx={{color: 'common.black', fontSize: 15}}>Enregistrer</Typography>
                       </Button>
                   </Box>
               </Box>
               <HoverRating value={rating} setValue={setRating} />
               <Box sx={{
                   display: 'inherit',
                   flexGrow: "inherit",
               }}>
                    <Images images={house.images} />
               </Box>
               <Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'flex-end'}}>
                   <Button variant={"outlined"} startIcon={<AppsRoundedIcon />} sx={{textTransform: 'none'}} onClick={handleShowAll}>Afficher toutes les images</Button>
                   <FullScreenDialog open={open} setOpen={setOpen} images={house.images} />
               </Box>
           </Box>

        </Box>
    );
};

export default Overview;