import React, {useState} from 'react';
import {
    Alert,
    AppBar,
    BottomNavigation,
    Box,
    Button,
    LinearProgress, Paper, Snackbar,
    TextareaAutosize,
    Toolbar,
    Typography
} from '@mui/material'
import lekwatt from '../../assets/logos/lekwatt.png'
import {page1, page2, page3, page4, page5} from "./typos";
import {useNavigate} from "react-router-dom";
import ListSelectIcon from "../../components/becomeHost/ListSelectIcon";
import ListSelect from "../../components/becomeHost/ListSelect";
import Who from "../../components/becomeHost/Who";
import Place from "../../components/becomeHost/Place";
import UploadImages from "../../components/becomeHost/UploadImages";
import cameroon from '../../assets/images/cameroon.jpg'
import Tarif from "../../components/becomeHost/Tarif";
import LastCheck from "../../components/becomeHost/LastCheck";
import icon from "../../assets/logos/lekwatt.png"

const BecomeHost = () => {
    //State for pages
    const [page1D, setPage1] = useState("")
    const [page2D, setPage2] = useState("")
    const [page3D, setPage3] = useState("")
    const [uploadedImages, setUploadedImages] = useState([])

    //Place form
    const [rue, setRue] = useState("");
    const [apartment, setApartment] = useState("");
    const [ville, setVille] = useState("");
    const [etat, setEtat] = useState("");
    const [bp, setBp] = useState("");
    const [pays, setPays] = useState("")

    //Locataires
    // const [adults, setAdults] = useState(0)
    // const [children, setChildren] = useState(0)
    // const [babies, setBabies] = useState(0)

    //Name of location
    const [name, setName] = useState("")
    const [description, setDescription] = useState("Vous apprécierez votre séjour dans ce logement plein de gaité.")

    //Tarif
    const [tarif, setTarif] = useState(0)

    const navigate = useNavigate()
    const [progress, setProgress] = useState(0)
    const [processStep, setProcessStep] = useState(0)
    const handleStartProcess = () => {
        setProgress(10)
        setProcessStep(1)
    }

    const handleProcessProgress = () => {
        setProgress(progress+10)
        setProcessStep(processStep+1)
    }

    const handleProcessRegress = () => {
        setProgress(progress-10)
        setProcessStep(processStep-1)
    }

    const handleGoToHome = () => {
        navigate("/")
    }

    const handleQuit = () => {
        navigate("/")
    }

    const [openSuccess, setOpenSuccess] = useState(false)

    const sendNotification = () => {
        setTimeout(() => {
            const notify = new Notification(name, {
                body: "Nouvelle location sur LeKwatt",
                icon: lekwatt,
                image: uploadedImages[0],
                data: {id: 1}
            })
            notify.onclick = () => {
                window.location.href="http://localhost:3000/";
            }
        }, 3000)
    }

    const handlePublish = () => {
        setOpenSuccess(true)
        setTimeout(() => {
            navigate("/")
            sendNotification()
        }, 5000)
    }

    const handleCloseSuccessMessage = () => {
        setOpenSuccess(false)
    }


    if(processStep === 0) {
        return (
            <Box sx={{height:"100vh", display:"flex", flexDirection:"row", width: '100%'}} >
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    width: '50%',
                    background: "linear-gradient(45deg, rgba(2,85,121,1) 0%, rgba(220,179,68,1) 100%)"
                }}>
                    <Box sx={{ flexGrow: 1,}}>
                        <AppBar position="static" sx={{bgcolor: 'transparent', py: 1}} elevation={0} >
                            <Toolbar>
                                <Button sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome} >
                                    <img src={lekwatt} alt={'lewatt'} width={120} height={35} />
                                </Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                </Box>
                <Box sx={{ display:"flex", flexDirection:"column", width: '50%', bgcolor: 'transparent'}}>
                    <Box sx={{ width: '100',}}>
                        <AppBar position="static" sx={{bgcolor: 'common.white', py: 1}}>
                            <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none', ml: 1}}>Quitter</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1,}}>
                        <Box sx={{width: '70%', textAlign: 'center'}}>
                            <Typography sx={{fontSize: 50}}>Devenez hôte en 10 étapes simples</Typography>
                            <Typography sx={{fontSize: 18}}>Rejoignez-nous. Nous allons vous aider pour chacune de ces étapes.</Typography>
                        </Box>
                    </Box>
                    <Box sx={{bottom: 0, py: 1, display: 'flex', justifyContent: 'flex-end', width: '100%', borderTop: '0.5px solid #cdcdcd'}}>
                        <Button variant={'contained'} sx={{borderRadius: 100, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17, bgcolor: '#dcb344'}} onClick={handleStartProcess}>Démarrer</Button>
                    </Box>
                </Box>
            </Box>
        )
    }
    if(processStep === 1) {
        return (
            <Box sx={{height:"100vh", display:"flex", flexDirection:"row", width: '100%'}} >
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    width: '50%',
                    background: "linear-gradient(45deg, rgba(2,85,121,1) 0%, rgba(220,179,68,1) 100%)"
                }}>
                    <Paper position="fixed" sx={{bgcolor: 'transparent', py: 1}} elevation={0} >
                        <Toolbar>
                            <Button sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>
                                <img src={lekwatt} alt={'lewatt'} width={120} height={35} />
                            </Button>
                        </Toolbar>
                    </Paper>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%'}}>
                        <Box sx={{width: '90%', textAlign: 'center', color: 'common.white'}}>
                            <Typography sx={{fontSize: 40}}>Quel type de logement allez-vous proposer ?</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display:"flex", flexDirection:"column", width: '50%', bgcolor: 'transparent'}}>
                    {/*<Box sx={{ width: '100%',}}>*/}
                        <AppBar position="static" sx={{bgcolor: 'common.white', py: 1}}>
                            <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>Aide</Button>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none', ml: 1}} onClick={handleQuit}>Enregistrer et quitter</Button>
                            </Toolbar>
                      </AppBar>
                    {/*</Box>*/}
                    <Box sx={{width: '100%', flexGrow: 1, overflow: 'auto', display: 'inherit', flexDirection: 'inherit',}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1,}}>
                            <Box sx={{width: '70%'}}>
                                <ListSelectIcon typos={page1} datas={page1D} setDatas={setPage1} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" color={'secondary'} value={progress} />
                    </Box>
                    <BottomNavigation sx={{bottom: 0, py: 1, display: 'flex', width: '100%', height: 70, borderTop: '0.5px solid #cdcdcd'}}>
                        <Box sx={{ display: 'flex',  width: '100%', flexGrow: 1}}>
                            <Button variant={'text'} sx={{"&:hover" : {textDecoration: 'underline'}, borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17,}} onClick={handleProcessRegress}>Retour</Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end',width: '100%', flexGrow: 1}}>
                            <Button variant={'contained'} sx={{borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17, bgcolor: 'common.black'}} disabled={page1D === ""} onClick={handleProcessProgress}>Suivant</Button>
                        </Box>
                    </BottomNavigation>
                </Box>
            </Box>
        )
    }
    if(processStep === 2) {
        return (
            <Box sx={{height:"100vh", maxHeight: "100vh", display:"flex", flexDirection:"row", width: '100%'}} >
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    width: '50%',
                    background: "linear-gradient(45deg, rgba(2,85,121,1) 0%, rgba(220,179,68,1) 100%)"
                }}>
                <Paper position="fixed" sx={{bgcolor: 'transparent', py: 1}} elevation={0} >
                    <Toolbar>
                        <Button sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>
                            <img src={lekwatt} alt={'lewatt'} width={120} height={35} />
                        </Button>
                    </Toolbar>
                </Paper>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%'}}>
                        <Box sx={{width: '90%', textAlign: 'center', color: 'common.white'}}>
                            <Typography sx={{fontSize: 40}}>Parmi les propositions suivantes, laquelle décrit le mieux votre logement ?</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display:"flex", flexDirection:"column", width: '50%', bgcolor: 'transparent'}}>
                    <Box sx={{ width: '100%', position:"static"}}>
                        <AppBar position="static" sx={{bgcolor: 'common.white', py: 1}}>
                            <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>Aide</Button>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none', ml: 1}}>Enregistrer et quitter</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{width: '100%', flexGrow: 1, overflow: 'auto', display: 'inherit', flexDirection: 'inherit',}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1,}}>
                            <Box sx={{width: '70%'}}>
                                <ListSelect typos={page2} datas={page2D} setDatas={setPage2} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" color={'secondary'} value={progress} />
                    </Box>
                    <BottomNavigation sx={{bottom: 0, py: 1, display: 'flex', width: '100%', height: 70, borderTop: '0.5px solid #cdcdcd'}}>
                        <Box sx={{ display: 'flex',  width: '100%', flexGrow: 1}}>
                            <Button variant={'text'} sx={{"&:hover" : {textDecoration: 'underline'}, borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17,}} onClick={handleProcessRegress}>Retour</Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end',width: '100%', flexGrow: 1}}>
                            <Button variant={'contained'} sx={{borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17, bgcolor: 'common.black'}} disabled={page2D === ""} onClick={handleProcessProgress}>Suivant</Button>
                        </Box>
                    </BottomNavigation>
                </Box>
            </Box>
        )
    }
    if(processStep === 3) {
        return (
            <Box sx={{height:"100vh", display:"flex", flexDirection:"row", width: '100%'}} >
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    width: '50%',
                    background: "linear-gradient(45deg, rgba(2,85,121,1) 0%, rgba(220,179,68,1) 100%)"
                }}>
                <Paper position="fixed" sx={{bgcolor: 'transparent', py: 1}} elevation={0} >
                    <Toolbar>
                        <Button sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>
                            <img src={lekwatt} alt={'lewatt'} width={120} height={35} />
                        </Button>
                    </Toolbar>
                </Paper>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%'}}>
                        <Box sx={{width: '90%', textAlign: 'center', color: 'common.white'}}>
                            <Typography sx={{fontSize: 40}}>Quel type de logement allez-vous proposer ?</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display:"flex", flexDirection:"column", width: '50%', bgcolor: 'transparent'}}>
                    <Box sx={{ width: '100%', position:"static"}}>
                        <AppBar position="static" sx={{bgcolor: 'common.white', py: 1}}>
                            <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>Aide</Button>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none', ml: 1}}>Enregistrer et quitter</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{width: '100%', flexGrow: 1, overflow: 'auto', display: 'inherit', flexDirection: 'inherit',}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1,}}>
                            <Box sx={{width: '70%'}}>
                                <ListSelectIcon typos={page3} datas={page3D} setDatas={setPage3} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" color={'secondary'} value={progress} />
                    </Box>
                    <BottomNavigation sx={{bottom: 0, py: 1, display: 'flex', width: '100%', height: 70, borderTop: '0.5px solid #cdcdcd'}}>
                        <Box sx={{ display: 'flex',  width: '100%', flexGrow: 1}}>
                            <Button variant={'text'} sx={{"&:hover" : {textDecoration: 'underline'}, borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17,}} onClick={handleProcessRegress}>Retour</Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end',width: '100%', flexGrow: 1}}>
                            <Button variant={'contained'} sx={{borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17, bgcolor: 'common.black'}} disabled={page3D === ""} onClick={handleProcessProgress}>Suivant</Button>
                        </Box>
                    </BottomNavigation>
                </Box>
            </Box>
        )
    }
    // if(processStep === 4) {
    //     return (
    //         <Box sx={{height:"100vh", display:"flex", flexDirection:"row", width: '100%'}} >
    //             <Box sx={{
    //                 display:"flex",
    //                 flexDirection:"column",
    //                 width: '50%',
    //                 background: "linear-gradient(45deg, rgba(2,85,121,1) 0%, rgba(220,179,68,1) 100%)"
    //             }}>
    //             <Paper position="fixed" sx={{bgcolor: 'transparent', py: 1}} elevation={0} >
    //                 <Toolbar>
    //                     <Button sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>
    //                         <img src={lekwatt} alt={'lewatt'} width={120} height={35} />
    //                     </Button>
    //                 </Toolbar>
    //             </Paper>
    //                 <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%'}}>
    //                     <Box sx={{width: '90%', textAlign: 'center', color: 'common.white'}}>
    //                         <Typography sx={{fontSize: 40}}>Combien de locataires souhaitez-vous accueillir ?</Typography>
    //                     </Box>
    //                 </Box>
    //             </Box>
    //             <Box sx={{ display:"flex", flexDirection:"column", width: '50%', bgcolor: 'transparent'}}>
    //                 <Box sx={{ width: '100%', position:"static"}}>
    //                     <AppBar position="static" sx={{bgcolor: 'common.white', py: 1}}>
    //                         <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
    //                             <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>Aide</Button>
    //                             <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none', ml: 1}}>Enregistrer et quitter</Button>
    //                         </Toolbar>
    //                     </AppBar>
    //                 </Box>
    //                 <Box sx={{width: '100%', flexGrow: 1, overflow: 'auto', display: 'inherit', flexDirection: 'inherit',}}>
    //                     <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%'}}>
    //                         <Box sx={{width: '70%'}}>
    //                             <Who typos={page4} who={[adults, children, babies]} setWho={[setAdults, setChildren, setBabies]} />
    //                         </Box>
    //                     </Box>
    //                 </Box>
    //                 <Box sx={{ width: '100%' }}>
    //                     <LinearProgress variant="determinate" color={'secondary'} value={progress} />
    //                 </Box>
    //                 <BottomNavigation sx={{bottom: 0, py: 1, display: 'flex', width: '100%', height: 70, borderTop: '0.5px solid #cdcdcd'}}>
    //                     <Box sx={{ display: 'flex',  width: '100%', flexGrow: 1}}>
    //                         <Button variant={'text'} sx={{"&:hover" : {textDecoration: 'underline'}, borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17,}} onClick={handleProcessRegress}>Retour</Button>
    //                     </Box>
    //                     <Box sx={{ display: 'flex', justifyContent: 'flex-end',width: '100%', flexGrow: 1}}>
    //                         <Button variant={'contained'} sx={{borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17, bgcolor: 'common.black'}} disabled={adults === 0 && children === 0 && babies ===0} onClick={handleProcessProgress}>Suivant</Button>
    //                     </Box>
    //                 </BottomNavigation>
    //             </Box>
    //         </Box>
    //     )
    // }
    if(processStep === 4) {
        return (
            <Box sx={{height:"100vh", display:"flex", flexDirection:"row", width: '100%'}} >
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    width: '50%',
                    background: "linear-gradient(45deg, rgba(2,85,121,1) 0%, rgba(220,179,68,1) 100%)"
                }}>
                    <Paper position="fixed" sx={{bgcolor: 'transparent', py: 1}} elevation={0} >
                        <Toolbar>
                            <Button sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>
                                <img src={lekwatt} alt={'lewatt'} width={120} height={35} />
                            </Button>
                        </Toolbar>
                    </Paper>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%',}}>
                        <Box sx={{width: '90%', textAlign: 'center', color: 'common.white'}}>
                            <Typography sx={{fontSize: 40}}>Où est situé votre logement ?</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display:"flex", flexDirection:"column", width: '50%', bgcolor: 'transparent',}}>
                    <Box sx={{ width: '100%', position:"static"}}>
                        <AppBar position="static" sx={{bgcolor: 'common.white', py: 1}}>
                            <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>Aide</Button>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none', ml: 1}}>Enregistrer et quitter</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{width: '100%', flexGrow: 1, overflow: 'auto', display: 'inherit', flexDirection: 'inherit',}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, backgroundImage: `url(${cameroon})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}>
                            <Box sx={{width: '70%'}}>
                                <Place
                                    rue={rue}
                                    apartment={apartment}
                                    ville={ville}
                                    etat={etat}
                                    bp={bp}
                                    pays={pays}
                                    setRue={setRue}
                                    setApartment={setApartment}
                                    setVille={setVille}
                                    setEtat={setEtat}
                                    setBp={setBp}
                                    setPays={setPays}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" color={'secondary'} value={progress} />
                    </Box>
                    <BottomNavigation sx={{bottom: 0, py: 1, display: 'flex', width: '100%', height: 70, borderTop: '0.5px solid #cdcdcd'}}>
                        <Box sx={{ display: 'flex',  width: '100%', flexGrow: 1}}>
                            <Button variant={'text'} sx={{"&:hover" : {textDecoration: 'underline'}, borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17,}} onClick={handleProcessRegress}>Retour</Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end',width: '100%', flexGrow: 1}}>
                            <Button variant={'contained'} sx={{borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17, bgcolor: 'common.black'}} disabled={ville === "" || rue === "" || pays === ""} onClick={handleProcessProgress}>Suivant</Button>
                        </Box>
                    </BottomNavigation>
                </Box>
            </Box>
        )
    }
    if(processStep === 5) {
        return (
            <Box sx={{height:"100vh", maxHeight: '100vh', display:"flex", flexDirection:"row", width: '100%'}} >
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    width: '50%',
                    background: "linear-gradient(45deg, rgba(2,85,121,1) 0%, rgba(220,179,68,1) 100%)"
                }}>
                    <Paper position="fixed" sx={{bgcolor: 'transparent', py: 1}} elevation={0} >
                        <Toolbar>
                            <Button sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>
                                <img src={lekwatt} alt={'lewatt'} width={120} height={35} />
                            </Button>
                        </Toolbar>
                    </Paper>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%'}}>
                        <Box sx={{width: '90%', textAlign: 'center', color: 'common.white'}}>
                            <Typography sx={{fontSize: 40}}>Ajoutez maintenant quelques photos de votre logement</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display:"flex", flexDirection:"column", width: '50%', bgcolor: 'transparent',}}>
                        <Box sx={{width: '100%', flexGrow: 1, overflow: 'auto', display: 'inherit', flexDirection: 'inherit',}}>
                        <Box sx={{ width: '100%', position:"static"}}>
                            <AppBar position="static" sx={{bgcolor: 'common.white', py: 1}}>
                                <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                    <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>Aide</Button>
                                    <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none', ml: 1}}>Enregistrer et quitter</Button>
                                </Toolbar>
                            </AppBar>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, }}>
                            <Box sx={{width: '90%'}}>
                                <UploadImages uploadedImages={uploadedImages} setUploadedImages={setUploadedImages} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" color={'secondary'} value={progress} />
                    </Box>
                    <BottomNavigation sx={{bottom: 0, py: 1, display: 'flex', width: '100%', height: 70, borderTop: '0.5px solid #cdcdcd'}}>
                        <Box sx={{ display: 'flex',  width: '100%', flexGrow: 1}}>
                            <Button variant={'text'} sx={{"&:hover" : {textDecoration: 'underline'}, borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17,}} onClick={handleProcessRegress}>Retour</Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end',width: '100%', flexGrow: 1}}>
                            <Button variant={'contained'} sx={{borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17, bgcolor: 'common.black'}} disabled={uploadedImages.length === 0} onClick={handleProcessProgress}>Suivant</Button>
                        </Box>
                    </BottomNavigation>
                </Box>
            </Box>
        )
    }
    if(processStep === 6) {
        return (
            <Box sx={{height:"100vh", maxHeight: '100vh', display:"flex", flexDirection:"row", width: '100%'}} >
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    width: '50%',
                    background: "linear-gradient(45deg, rgba(2,85,121,1) 0%, rgba(220,179,68,1) 100%)"
                }}>
                <Paper position="fixed" sx={{bgcolor: 'transparent', py: 1}} elevation={0} >
                    <Toolbar>
                        <Button sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>
                            <img src={lekwatt} alt={'lewatt'} width={120} height={35} />
                        </Button>
                    </Toolbar>
                </Paper>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%'}}>
                        <Box sx={{width: '90%', textAlign: 'center', color: 'common.white'}}>
                            <Typography sx={{fontSize: 40}}>Donnez un nom à votre logement</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display:"flex", flexDirection:"column", width: '50%', bgcolor: 'transparent',}}>
                    <Box sx={{width: '100%', flexGrow: 1, overflow: 'auto', display: 'inherit', flexDirection: 'inherit',}}>
                        <Box sx={{ width: '100%', position:"static"}}>
                            <AppBar position="static" sx={{bgcolor: 'common.white', py: 1}}>
                                <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                    <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>Aide</Button>
                                    <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none', ml: 1}}>Enregistrer et quitter</Button>
                                </Toolbar>
                            </AppBar>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, }}>
                            <Box sx={{width: '70%', fontSize: 50}}>
                                <Typography sx={{fontSize: 24, fontWeight: 'bold', mb: 2}}>Donnez-lui un titre</Typography>
                                {/*<TextareaAutosize*/}
                                {/*    aria-label="minimum height"*/}
                                {/*    minRows={3}*/}
                                {/*    placeholder="Yaoundé : Agréable chambre d'hôtes"*/}
                                {/*    style={{ width: '100%', fontSize: 30,}}*/}
                                {/*    value={name}*/}
                                {/*    onChange={(event) => setName(event.target.value)}*/}
                                {/*/>*/}
                                <textarea
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    placeholder={"Yaoundé : Agréable chambre d'hôtes"}
                                    rows={4}
                                    style={{
                                        width: '100%',
                                        padding: '12px 20px',
                                        boxSizing: 'border-box',
                                        border: '2px solid #ccc',
                                        borderRadius: '4px',
                                        backgroundColor: '#f8f8f8',
                                        fontSize: 30,
                                        resize: 'vertical'
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" color={'secondary'} value={progress} />
                    </Box>
                    <BottomNavigation sx={{bottom: 0, py: 1, display: 'flex', width: '100%', height: 70, borderTop: '0.5px solid #cdcdcd'}}>
                        <Box sx={{ display: 'flex',  width: '100%', flexGrow: 1}}>
                            <Button variant={'text'} sx={{"&:hover" : {textDecoration: 'underline'}, borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17,}} onClick={handleProcessRegress}>Retour</Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end',width: '100%', flexGrow: 1}}>
                            <Button variant={'contained'} sx={{borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17, bgcolor: 'common.black'}} disabled={name === ""} onClick={handleProcessProgress}>Suivant</Button>
                        </Box>
                    </BottomNavigation>
                </Box>
            </Box>
        )
    }
    if(processStep === 7) {
        return (
            <Box sx={{height:"100vh", maxHeight: '100vh', display:"flex", flexDirection:"row", width: '100%'}} >
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    width: '50%',
                    background: "linear-gradient(45deg, rgba(2,85,121,1) 0%, rgba(220,179,68,1) 100%)"
                }}>
                <Paper position="fixed" sx={{bgcolor: 'transparent', py: 1}} elevation={0} >
                    <Toolbar>
                        <Button sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>
                            <img src={lekwatt} alt={'lewatt'} width={120} height={35} />
                        </Button>
                    </Toolbar>
                </Paper>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%'}}>
                        <Box sx={{width: '90%', textAlign: 'center', color: 'common.white'}}>
                            <Typography sx={{fontSize: 40}}>Donnez un nom à votre logement</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display:"flex", flexDirection:"column", width: '50%', bgcolor: 'transparent',}}>
                    <Box sx={{width: '100%', flexGrow: 1, overflow: 'auto', display: 'inherit', flexDirection: 'inherit',}}>
                        <Box sx={{ width: '100%', position:"static"}}>
                            <AppBar position="static" sx={{bgcolor: 'common.white', py: 1}}>
                                <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                    <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>Aide</Button>
                                    <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none', ml: 1}}>Enregistrer et quitter</Button>
                                </Toolbar>
                            </AppBar>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, }}>
                            <Box sx={{width: '70%', fontSize: 50}}>
                                <Typography sx={{fontSize: 24, fontWeight: 'bold', mb: 2}}>Créez votre description</Typography>
                                {/*<TextareaAutosize*/}
                                {/*    aria-label="minimum height"*/}
                                {/*    minRows={6}*/}
                                {/*    style={{ width: '100%', fontSize: 20, paddingTop: '2px'}}*/}
                                {/*    value={description}*/}
                                {/*    onChange={(event) => setDescription(event.target.value)}*/}
                                {/*/>*/}
                                <textarea
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}
                                    rows={5}
                                    style={{
                                        width: '100%',
                                        padding: '12px 20px',
                                        boxSizing: 'border-box',
                                        border: '2px solid #ccc',
                                        borderRadius: '4px',
                                        backgroundColor: '#f8f8f8',
                                        fontSize: 20,
                                        resize: 'vertical',
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" color={'secondary'} value={progress} />
                    </Box>
                    <BottomNavigation sx={{bottom: 0, py: 1, display: 'flex', width: '100%', height: 70, borderTop: '0.5px solid #cdcdcd'}}>
                        <Box sx={{ display: 'flex',  width: '100%', flexGrow: 1}}>
                            <Button variant={'text'} sx={{"&:hover" : {textDecoration: 'underline'}, borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17,}} onClick={handleProcessRegress}>Retour</Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end',width: '100%', flexGrow: 1}}>
                            <Button variant={'contained'} sx={{borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17, bgcolor: 'common.black'}} disabled={description === ""} onClick={handleProcessProgress}>Suivant</Button>
                        </Box>
                    </BottomNavigation>
                </Box>
            </Box>
        )
    }
    if(processStep === 8) {
        return (
            <Box sx={{height:"100vh", maxHeight: '100vh', display:"flex", flexDirection:"row", width: '100%'}} >
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    width: '50%',
                    background: "linear-gradient(45deg, rgba(2,85,121,1) 0%, rgba(220,179,68,1) 100%)"
                }}>
                    <Paper position="fixed" sx={{bgcolor: 'transparent', py: 1}} elevation={0} >
                        <Toolbar>
                            <Button sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>
                                <img src={lekwatt} alt={'lewatt'} width={120} height={35} />
                            </Button>
                        </Toolbar>
                    </Paper>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%'}}>
                        <Box sx={{width: '90%', textAlign: 'center', color: 'common.white'}}>
                            <Typography sx={{fontSize: 40}}>Passons maintenant aux choses sérieuses : votre tarif</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display:"flex", flexDirection:"column", width: '50%', bgcolor: 'transparent',}}>
                    <Box sx={{width: '100%', flexGrow: 1, overflow: 'auto', display: 'inherit', flexDirection: 'inherit',}}>
                        <Box sx={{ width: '100%', position:"static"}}>
                            <AppBar position="static" sx={{bgcolor: 'common.white', py: 1}}>
                                <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                    <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>Aide</Button>
                                    <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none', ml: 1}}>Enregistrer et quitter</Button>
                                </Toolbar>
                            </AppBar>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, }}>
                            <Box sx={{width: '80%', fontSize: 50}}>
                               <Tarif tarif={tarif} setTarif={setTarif} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" color={'secondary'} value={progress} />
                    </Box>
                    <BottomNavigation sx={{bottom: 0, py: 1, display: 'flex', width: '100%', height: 70, borderTop: '0.5px solid #cdcdcd'}}>
                        <Box sx={{ display: 'flex',  width: '100%', flexGrow: 1}}>
                            <Button variant={'text'} sx={{"&:hover" : {textDecoration: 'underline'}, borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17,}} onClick={handleProcessRegress}>Retour</Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end',width: '100%', flexGrow: 1}}>
                            <Button variant={'contained'} sx={{borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17, bgcolor: 'common.black'}} disabled={tarif === 0} onClick={handleProcessProgress}>Suivant</Button>
                        </Box>
                    </BottomNavigation>
                </Box>
            </Box>
        )
    }
    if(processStep === 9) {
        return (
            <Box sx={{height:"100vh", maxHeight: '100vh', display:"flex", flexDirection:"row", width: '100%'}} >
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    width: '50%',
                    background: "linear-gradient(45deg, rgba(2,85,121,1) 0%, rgba(220,179,68,1) 100%)"
                }}>
                    <Paper position="fixed" sx={{bgcolor: 'transparent', py: 1}} elevation={0} >
                        <Toolbar>
                            <Button sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>
                                <img src={lekwatt} alt={'lewatt'} width={120} height={35} />
                            </Button>
                        </Toolbar>
                    </Paper>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%'}}>
                        <Box sx={{width: '90%', textAlign: 'center', color: 'common.white'}}>
                            <Typography sx={{fontSize: 40}}>Jetez un œil à votre annonce !</Typography>
                            <Typography sx={{fontSize: 22}}>L'annonce sera visible par les potentiels locataires directement après sa publication. Vous pouvez ajouter des informations ou faire des modifications à tout moment.</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display:"flex", flexDirection:"column", width: '50%', bgcolor: 'transparent',}}>
                    <Box sx={{width: '100%', flexGrow: 1, overflow: 'auto', display: 'inherit', flexDirection: 'inherit',}}>
                        <Box sx={{ width: '100%', position:"static"}}>
                            <AppBar position="static" sx={{bgcolor: 'common.white', py: 1}}>
                                <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                    <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>Aide</Button>
                                    <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none', ml: 1}}>Enregistrer et quitter</Button>
                                </Toolbar>
                            </AppBar>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, }}>
                            <Box sx={{width: '80%', fontSize: 50}}>
                                <LastCheck typeOfHousing={page2D} primaryImage={uploadedImages[0]} typeOfRooms={page1D} user={"Emmanuel"} Ville={ville} />
                            </Box>
                        </Box>
                    </Box>
                    <Snackbar open={openSuccess} autoHideDuration={4000} onClose={handleCloseSuccessMessage}>
                        <Alert onClose={handleCloseSuccessMessage} severity="success" sx={{ width: '100%' }}>
                            Félicatations vous venez le placer votre annonce !!!
                        </Alert>
                    </Snackbar>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" color={'secondary'} value={progress} />
                    </Box>
                    <BottomNavigation sx={{bottom: 0, py: 1, display: 'flex', width: '100%', height: 70, borderTop: '0.5px solid #cdcdcd'}}>
                        <Box sx={{ display: 'flex',  width: '100%', flexGrow: 1}}>
                            <Button variant={'text'} sx={{"&:hover" : {textDecoration: 'underline'}, borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17,}} onClick={handleProcessRegress}>Retour</Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end',width: '100%', flexGrow: 1}}>
                            <Button variant={'contained'} sx={{borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17, bgcolor: 'secondary.main'}} disabled={openSuccess} onClick={handlePublish}>Publier mon anonce</Button>
                        </Box>
                    </BottomNavigation>
                </Box>
            </Box>
        )
    }
};

export default BecomeHost;
