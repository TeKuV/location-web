import React from 'react';
import {Box, Button, Chip, Divider, Fade, Modal, Typography} from "@mui/material";
import WithPhoneNumber from "./WithPhoneNumber";
import WithFacebook from "./WithFacebook";
import WithGoogle from "./WithGoogle";
import WithEmail from "./WithEmail";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 5,
    width: 550  ,
    maxHeight: 600,
    bgcolor: 'background.paper',
    border: '2px solid #025579',
    boxShadow: 24,
    p: 2
};

const Authentication = ({connectOpen, handleCloseOpen}) => {

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={connectOpen}
                onClose={handleCloseOpen}
                closeAfterTransition
            >
                <Fade in={connectOpen}>
                    <Box>
                        <Box sx={style}>
                            <Box sx={{display: 'flex', justifyContent: 'center', pb: 1, borderBottom: '1px solid black'}}>
                                <Box>

                                </Box>
                                <Typography sx={{fontSize: 20}} component="h1">
                                    Inscription ou Connexion
                                </Typography>
                            </Box>
                            <Box sx={{
                                maxHeight: 500,
                                overflowY: 'auto',
                                px: 2
                            }}>
                                <Typography sx={{fontSize: 24, my: 3, fontWeight: 'bold'}} component="h2">
                                    Bienvenue sur leKwatt
                                </Typography>
                                <WithPhoneNumber />
                                <Divider orientation={"horizontal"} sx={{mt: 1, mb: 3}}><Chip label="Ou" /></Divider>
                                <WithFacebook />
                                <WithGoogle />
                                <WithEmail />
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
};

export default Authentication;