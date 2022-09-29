import React from 'react';
import {Box, Button, Card, IconButton, Input, Popover, Typography} from "@mui/material";
import ViewCarouselRoundedIcon from '@mui/icons-material/ViewCarouselRounded';
import ScatterPlotRoundedIcon from '@mui/icons-material/ScatterPlotRounded';

const Image = ({image, index, selectedImages, setSelectedImages}) => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    const handleNotPrimary = () => {
        let filtered = selectedImages.filter((e) => e !== image)
        filtered.push(image)
        setSelectedImages(filtered)
    }
    const handleDefinePrimary = () => {
        let filtered = selectedImages.filter((e) => e !== image)
        filtered.unshift(image)
        setSelectedImages(filtered)
    }

    return (
        <>
            {index === 0 ? (
                <>
                    <Card sx={{zIndex: 0, height: 'auto'}}>
                        <img src={image} alt={index} width={'100%'} />
                        <Typography sx={{width: 180, position: 'sticky', bottom: "10%", left: "1%", zIndex: 1, color: 'common.black', bgcolor: 'common.white', p: 1}}>Photo de couverture</Typography>
                        <IconButton onClick={handleClick} sx={{ position: 'sticky', bottom: "90%", left: "90%", zIndex: 1, color: 'common.black', bgcolor: 'common.white'}}>
                            <ScatterPlotRoundedIcon />
                        </IconButton>
                        <Popover
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            sx={{display: 'flex', flexDirection: 'column',}}
                        >
                            <Button sx={{textTransform: 'none', width: '100%', px: 0 }} onClick={() => {handleNotPrimary(); handleClose()}}>
                                Retirer comme image de couverture
                            </Button>
                            <Button sx={{textTransform: 'none', width: '100%', px: 0}} onClick={() => { setSelectedImages(selectedImages.filter((e) => e !== image)); handleClose() }}>
                                Supprimer l'image
                            </Button>
                        </Popover>
                    </Card>
                </>
            ) : (
                <Card sx={{width: 312, height: 208, my: 1}}>
                    <img src={image} alt={index} height={208} width={312} />
                    <IconButton onClick={handleClick} sx={{ position: 'sticky', bottom: "80%", left: "85%", zIndex: 1, color: 'common.black', bgcolor: 'common.white'}}>
                        <ScatterPlotRoundedIcon fontSize={'small'} />
                    </IconButton>
                    <Popover
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        sx={{display: 'flex', flexDirection: 'column',}}
                    >
                        <Button sx={{textTransform: 'none', width: '100%', px: 0 }} onClick={() => {handleDefinePrimary(); handleClose();}}>
                            Définir comme image de couverture
                        </Button>
                        <Button sx={{textTransform: 'none', width: '100%', px: 0 }} onClick={() => { setSelectedImages(selectedImages.filter((e) => e !== image)); handleClose() }}>
                            Supprimer l'image
                        </Button>
                    </Popover>
                </Card>
            )}
        </>
    )
}

const UploadImages = ({uploadedImages, setUploadedImages}) => {
    const [selectedImages, setSelectedImages] = React.useState([])
    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        })

        setSelectedImages(imagesArray);
        console.log(imagesArray);
    }
    const handleUploadImages = () => {
        setUploadedImages(selectedImages)
    }

    return (
        <Box sx={{flexGrow: 1, my: 1}}>
            <Box sx={{flexGrow: 'inherit', border: '1px dashed black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 2}}>
                <label style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <ViewCarouselRoundedIcon sx={{fontSize: 100}} />
                    <Typography sx={{fontSize: 18}}>
                        Faites glisser vos photos ici
                    </Typography>
                    <Typography sx={{fontSize: 15}}>
                        Ajoutez au moins 5 photos
                    </Typography>
                    <input style={{display: 'none'}} name={'images'} type={'file'} multiple onChange={onSelectFile} onClick={() => setUploadedImages([])} accept={'image/png, image/jpeg, image/jpg, image/webp'} />
                </label>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', my: 2, justifyContent: 'space-evenly'}}>
                {selectedImages &&
                    selectedImages.map((image, key) => {
                        return (
                            <Box sx={{display: 'flex', flexDirection: 'column', }}>
                                <Image index={key} image={image} selectedImages={selectedImages} setSelectedImages={setSelectedImages} />
                            </Box>
                        )
                    })
                }
            </Box>
            {
                selectedImages.length >=5 && (
                    <Button variant={'contained'} sx={{textTransform: 'none', bgcolor: 'common.black', py: 1, px: 2}} disabled={uploadedImages.length !== 0} onClick={handleUploadImages}>
                        Uploader les images
                    </Button>
                )
            }
        </Box>
    );
};

export default UploadImages;