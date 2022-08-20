import React, {useState} from 'react';
import {AppBar, Box, Button, LinearProgress, Toolbar, Typography} from '@mui/material'
import lekwatt from '../../assets/logos/lekwatt-min.png'
import {page1, page2, page3, page4, page5} from "./typos";
import {useNavigate} from "react-router-dom";
import ListSelectIcon from "../../components/becomeHost/ListSelectIcon";
import ListSelect from "../../components/becomeHost/ListSelect";
import Who from "../../components/becomeHost/Who";
import Place from "../../components/becomeHost/Place";

const BecomeHost = () => {
    //State for pages
    const [page1D, setPage1] = useState("")
    const [page2D, setPage2] = useState("")
    const [page3D, setPage3] = useState("")
    const [page4D, setPage4] = useState("")
    const [page5D, setPage5] = useState("")
    const [page6D, setPage6] = useState("")
    const [page7D, setPage7] = useState("")
    const [page8D, setPage8] = useState("")
    const [page9D, setPage9] = useState("")

    //Place form
    const [Rue, setRue] = useState("");
    const [Apartment, setApartment] = useState("");
    const [Ville, setVille] = useState("");
    const [Etat, setEtat] = useState("");
    const [BP, setBP] = useState("");
    const [Pays, setPays] = useState("")

    //Locataires
    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [babies, setBabies] = useState(0)

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


    if(processStep === 0) {
        return (
            <Box sx={{height:"100vh", display:"flex", flexDirection:"row", width: '100%'}} >
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    width: '50%',
                    // bgcolor: 'red',
                    background: "linear-gradient(45deg, rgba(2,85,121,1) 0%, rgba(220,179,68,1) 100%)"
                }}>
                    <Box sx={{ flexGrow: 1,}}>
                        <AppBar position="static" sx={{bgcolor: 'transparent', py: 1}} elevation={0} >
                            <Toolbar>
                                <Button sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome} >
                                    <img src={lekwatt} alt={'lewatt'} width={90} height={70} />
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
                    // bgcolor: 'red',
                    background: "linear-gradient(45deg, rgba(2,85,121,1) 0%, rgba(220,179,68,1) 100%)"
                }}>
                    {/*<Box sx={{ width: }}>*/}
                        <AppBar position="fixed" sx={{bgcolor: 'transparent', py: 1}} elevation={0} >
                            <Toolbar>
                                <Button sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>
                                    <img src={lekwatt} alt={'lewatt'} width={90} height={70} />
                                </Button>
                            </Toolbar>
                        </AppBar>
                    {/*</Box>*/}
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%'}}>
                        <Box sx={{width: '90%', textAlign: 'center'}}>
                            <Typography sx={{fontSize: 40}}>Quel type de logement allez-vous proposer ?</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display:"flex", flexDirection:"column", width: '50%', bgcolor: 'transparent'}}>
                    <Box sx={{ width: '100',}}>
                        <AppBar position="static" sx={{bgcolor: 'common.white', py: 1}}>
                            <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>Aide</Button>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none', ml: 1}}>Enregistrer et quitter</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1,}}>
                        <Box sx={{width: '70%'}}>
                            <ListSelectIcon typos={page1} datas={page1D} setDatas={setPage1} />
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" color={'secondary'} value={progress} />
                    </Box>
                    <Box sx={{bottom: 0, py: 1, display: 'flex', width: '100%', borderTop: '0.5px solid #cdcdcd'}}>
                        <Box sx={{ display: 'flex',  width: '100%', flexGrow: 1}}>
                            <Button variant={'text'} sx={{"&:hover" : {textDecoration: 'underline'}, borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17,}} onClick={handleProcessRegress}>Retour</Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end',width: '100%', flexGrow: 1}}>
                            <Button variant={'contained'} sx={{borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17, bgcolor: 'common.black'}} onClick={handleProcessProgress}>Suivant</Button>
                        </Box>
                    </Box>
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
                    // bgcolor: 'red',
                    background: "linear-gradient(45deg, rgba(2,85,121,1) 0%, rgba(220,179,68,1) 100%)"
                }}>
                    {/*<Box sx={{ width: }}>*/}
                    <AppBar position="fixed" sx={{bgcolor: 'transparent', py: 1}} elevation={0} >
                        <Toolbar>
                            <Button sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>
                                <img src={lekwatt} alt={'lewatt'} width={90} height={70} />
                            </Button>
                        </Toolbar>
                    </AppBar>
                    {/*</Box>*/}
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%'}}>
                        <Box sx={{width: '90%', textAlign: 'center'}}>
                            <Typography sx={{fontSize: 40}}>Parmi les propositions suivantes, laquelle décrit le mieux votre logement ?</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display:"flex", flexDirection:"column", width: '50%', bgcolor: 'transparent'}}>
                    <Box sx={{ width: '100',}}>
                        <AppBar position="static" sx={{bgcolor: 'common.white', py: 1}}>
                            <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>Aide</Button>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none', ml: 1}}>Enregistrer et quitter</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1,}}>
                        <Box sx={{width: '70%'}}>
                            <ListSelect typos={page2} datas={page2D} setDatas={setPage2} />
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" color={'secondary'} value={progress} />
                    </Box>
                    <Box sx={{bottom: 0, py: 1, display: 'flex', width: '100%', borderTop: '0.5px solid #cdcdcd'}}>
                        <Box sx={{ display: 'flex',  width: '100%', flexGrow: 1}}>
                            <Button variant={'text'} sx={{"&:hover" : {textDecoration: 'underline'}, borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17,}} onClick={handleProcessRegress}>Retour</Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end',width: '100%', flexGrow: 1}}>
                            <Button variant={'contained'} sx={{borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17, bgcolor: 'common.black'}} onClick={handleProcessProgress}>Suivant</Button>
                        </Box>
                    </Box>
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
                    // bgcolor: 'red',
                    background: "linear-gradient(45deg, rgba(2,85,121,1) 0%, rgba(220,179,68,1) 100%)"
                }}>
                    {/*<Box sx={{ width: }}>*/}
                    <AppBar position="fixed" sx={{bgcolor: 'transparent', py: 1}} elevation={0} >
                        <Toolbar>
                            <Button sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>
                                <img src={lekwatt} alt={'lewatt'} width={90} height={70} />
                            </Button>
                        </Toolbar>
                    </AppBar>
                    {/*</Box>*/}
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%'}}>
                        <Box sx={{width: '90%', textAlign: 'center'}}>
                            <Typography sx={{fontSize: 40}}>Quel type de logement allez-vous proposer ?</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display:"flex", flexDirection:"column", width: '50%', bgcolor: 'transparent'}}>
                    <Box sx={{ width: '100',}}>
                        <AppBar position="static" sx={{bgcolor: 'common.white', py: 1}}>
                            <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>Aide</Button>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none', ml: 1}}>Enregistrer et quitter</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1,}}>
                        <Box sx={{width: '70%'}}>
                            <ListSelectIcon typos={page3} datas={page3D} setDatas={setPage3} />
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" color={'secondary'} value={progress} />
                    </Box>
                    <Box sx={{bottom: 0, py: 1, display: 'flex', width: '100%', borderTop: '0.5px solid #cdcdcd'}}>
                        <Box sx={{ display: 'flex',  width: '100%', flexGrow: 1}}>
                            <Button variant={'text'} sx={{"&:hover" : {textDecoration: 'underline'}, borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17,}} onClick={handleProcessRegress}>Retour</Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end',width: '100%', flexGrow: 1}}>
                            <Button variant={'contained'} sx={{borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17, bgcolor: 'common.black'}} onClick={handleProcessProgress}>Suivant</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
    if(processStep === 4) {
        return (
            <Box sx={{height:"100vh", display:"flex", flexDirection:"row", width: '100%'}} >
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    width: '50%',
                    // bgcolor: 'red',
                    background: "linear-gradient(45deg, rgba(2,85,121,1) 0%, rgba(220,179,68,1) 100%)"
                }}>
                    {/*<Box sx={{ width: }}>*/}
                    <AppBar position="fixed" sx={{bgcolor: 'transparent', py: 1}} elevation={0} >
                        <Toolbar>
                            <Button sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>
                                <img src={lekwatt} alt={'lewatt'} width={90} height={70} />
                            </Button>
                        </Toolbar>
                    </AppBar>
                    {/*</Box>*/}
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%'}}>
                        <Box sx={{width: '90%', textAlign: 'center'}}>
                            <Typography sx={{fontSize: 40}}>Combien de locataires souhaitez-vous accueillir ?</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display:"flex", flexDirection:"column", width: '50%', bgcolor: 'transparent'}}>
                    <Box sx={{ width: '100',}}>
                        <AppBar position="static" sx={{bgcolor: 'common.white', py: 1}}>
                            <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>Aide</Button>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none', ml: 1}}>Enregistrer et quitter</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1,}}>
                        <Box sx={{width: '70%'}}>
                            <Who typos={page4} who={[adults, children, babies]} setWho={[setAdults, setChildren, setBabies]} />
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" color={'secondary'} value={progress} />
                    </Box>
                    <Box sx={{bottom: 0, py: 1, display: 'flex', width: '100%', borderTop: '0.5px solid #cdcdcd'}}>
                        <Box sx={{ display: 'flex',  width: '100%', flexGrow: 1}}>
                            <Button variant={'text'} sx={{"&:hover" : {textDecoration: 'underline'}, borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17,}} onClick={handleProcessRegress}>Retour</Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end',width: '100%', flexGrow: 1}}>
                            <Button variant={'contained'} sx={{borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17, bgcolor: 'common.black'}} onClick={handleProcessProgress}>Suivant</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
    if(processStep === 5) {
        return (
            <Box sx={{height:"100vh", display:"flex", flexDirection:"row", width: '100%'}} >
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    width: '50%',
                    // bgcolor: 'red',
                    background: "linear-gradient(45deg, rgba(2,85,121,1) 0%, rgba(220,179,68,1) 100%)"
                }}>
                    {/*<Box sx={{ width: }}>*/}
                    <AppBar position="fixed" sx={{bgcolor: 'transparent', py: 1}} elevation={0} >
                        <Toolbar>
                            <Button sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>
                                <img src={lekwatt} alt={'lewatt'} width={90} height={70} />
                            </Button>
                        </Toolbar>
                    </AppBar>
                    {/*</Box>*/}
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%'}}>
                        <Box sx={{width: '90%', textAlign: 'center'}}>
                            <Typography sx={{fontSize: 50}}>Devenez hôte en 10 étapes simples</Typography>
                            <Typography sx={{fontSize: 18}}>Rejoignez-nous. Nous allons vous aider pour chacune de ces étapes.</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display:"flex", flexDirection:"column", width: '50%', bgcolor: 'transparent'}}>
                    <Box sx={{ width: '100',}}>
                        <AppBar position="static" sx={{bgcolor: 'common.white', py: 1}}>
                            <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>Aide</Button>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none', ml: 1}}>Enregistrer et quitter</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1,}}>
                        <Box sx={{width: '70%', textAlign: 'center'}}>
                            <Typography sx={{fontSize: 50}}>Devenez hôte en 10 étapes simples</Typography>
                            <Typography sx={{fontSize: 18}}>Rejoignez-nous. Nous allons vous aider pour chacune de ces étapes.</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" color={'secondary'} value={progress} />
                    </Box>
                    <Box sx={{bottom: 0, py: 1, display: 'flex', width: '100%', borderTop: '0.5px solid #cdcdcd'}}>
                        <Box sx={{ display: 'flex',  width: '100%', flexGrow: 1}}>
                            <Button variant={'text'} sx={{"&:hover" : {textDecoration: 'underline'}, borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17,}} onClick={handleProcessRegress}>Retour</Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end',width: '100%', flexGrow: 1}}>
                            <Button variant={'contained'} sx={{borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17, bgcolor: 'common.black'}} onClick={handleProcessProgress}>Suivant</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
    if(processStep === 6) {
        return (
            <Box sx={{height:"100vh", display:"flex", flexDirection:"row", width: '100%'}} >
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    width: '50%',
                    // bgcolor: 'red',
                    background: "linear-gradient(45deg, rgba(2,85,121,1) 0%, rgba(220,179,68,1) 100%)"
                }}>
                    {/*<Box sx={{ width: }}>*/}
                    <AppBar position="fixed" sx={{bgcolor: 'transparent', py: 1}} elevation={0} >
                        <Toolbar>
                            <Button sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>
                                <img src={lekwatt} alt={'lewatt'} width={90} height={70} />
                            </Button>
                        </Toolbar>
                    </AppBar>
                    {/*</Box>*/}
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%'}}>
                        <Box sx={{width: '90%', textAlign: 'center'}}>
                            <Typography sx={{fontSize: 40}}>Où est situé votre logement ?</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display:"flex", flexDirection:"column", width: '50%', bgcolor: 'transparent'}}>
                    <Box sx={{ width: '100',}}>
                        <AppBar position="static" sx={{bgcolor: 'common.white', py: 1}}>
                            <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>Aide</Button>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none', ml: 1}}>Enregistrer et quitter</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1,}}>
                        <Box sx={{width: '70%'}}>
                            <Place
                                Rue={Rue}
                                Apartment={Apartment}
                                Ville={Ville}
                                Etat={Etat}
                                BP={BP}
                                Pays={Pays}
                                setRue={setRue}
                                setApartment={setApartment}
                                setVille={setVille}
                                setEtat={setEtat}
                                setBP={setBP}
                                setPays={setPays}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" color={'secondary'} value={progress} />
                    </Box>
                    <Box sx={{bottom: 0, py: 1, display: 'flex', width: '100%', borderTop: '0.5px solid #cdcdcd'}}>
                        <Box sx={{ display: 'flex',  width: '100%', flexGrow: 1}}>
                            <Button variant={'text'} sx={{"&:hover" : {textDecoration: 'underline'}, borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17,}} onClick={handleProcessRegress}>Retour</Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end',width: '100%', flexGrow: 1}}>
                            <Button variant={'contained'} sx={{borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17, bgcolor: 'common.black'}} onClick={handleProcessProgress}>Suivant</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
    if(processStep === 7) {
        return (
            <Box sx={{height:"100vh", display:"flex", flexDirection:"row", width: '100%'}} >
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    width: '50%',
                    // bgcolor: 'red',
                    background: "linear-gradient(45deg, rgba(2,85,121,1) 0%, rgba(220,179,68,1) 100%)"
                }}>
                    {/*<Box sx={{ width: }}>*/}
                    <AppBar position="fixed" sx={{bgcolor: 'transparent', py: 1}} elevation={0} >
                        <Toolbar>
                            <Button sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>
                                <img src={lekwatt} alt={'lewatt'} width={90} height={70} />
                            </Button>
                        </Toolbar>
                    </AppBar>
                    {/*</Box>*/}
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%'}}>
                        <Box sx={{width: '90%', textAlign: 'center'}}>
                            <Typography sx={{fontSize: 50}}>Devenez hôte en 10 étapes simples</Typography>
                            <Typography sx={{fontSize: 18}}>Rejoignez-nous. Nous allons vous aider pour chacune de ces étapes.</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display:"flex", flexDirection:"column", width: '50%', bgcolor: 'transparent'}}>
                    <Box sx={{ width: '100',}}>
                        <AppBar position="static" sx={{bgcolor: 'common.white', py: 1}}>
                            <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>Aide</Button>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none', ml: 1}}>Enregistrer et quitter</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1,}}>
                        <Box sx={{width: '70%', textAlign: 'center'}}>
                            <Typography sx={{fontSize: 50}}>Devenez hôte en 10 étapes simples</Typography>
                            <Typography sx={{fontSize: 18}}>Rejoignez-nous. Nous allons vous aider pour chacune de ces étapes.</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" color={'secondary'} value={progress} />
                    </Box>
                    <Box sx={{bottom: 0, py: 1, display: 'flex', width: '100%', borderTop: '0.5px solid #cdcdcd'}}>
                        <Box sx={{ display: 'flex',  width: '100%', flexGrow: 1}}>
                            <Button variant={'text'} sx={{"&:hover" : {textDecoration: 'underline'}, borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17,}} onClick={handleProcessRegress}>Retour</Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end',width: '100%', flexGrow: 1}}>
                            <Button variant={'contained'} sx={{borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17, bgcolor: 'common.black'}} onClick={handleProcessProgress}>Suivant</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
    if(processStep === 8) {
        return (
            <Box sx={{height:"100vh", display:"flex", flexDirection:"row", width: '100%'}} >
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    width: '50%',
                    // bgcolor: 'red',
                    background: "linear-gradient(45deg, rgba(2,85,121,1) 0%, rgba(220,179,68,1) 100%)"
                }}>
                    {/*<Box sx={{ width: }}>*/}
                    <AppBar position="fixed" sx={{bgcolor: 'transparent', py: 1}} elevation={0} >
                        <Toolbar>
                            <Button sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>
                                <img src={lekwatt} alt={'lewatt'} width={90} height={70} />
                            </Button>
                        </Toolbar>
                    </AppBar>
                    {/*</Box>*/}
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%'}}>
                        <Box sx={{width: '90%', textAlign: 'center'}}>
                            <Typography sx={{fontSize: 50}}>Devenez hôte en 10 étapes simples</Typography>
                            <Typography sx={{fontSize: 18}}>Rejoignez-nous. Nous allons vous aider pour chacune de ces étapes.</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display:"flex", flexDirection:"column", width: '50%', bgcolor: 'transparent'}}>
                    <Box sx={{ width: '100',}}>
                        <AppBar position="static" sx={{bgcolor: 'common.white', py: 1}}>
                            <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>Aide</Button>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none', ml: 1}}>Enregistrer et quitter</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1,}}>
                        <Box sx={{width: '70%', textAlign: 'center'}}>
                            <Typography sx={{fontSize: 50}}>Devenez hôte en 10 étapes simples</Typography>
                            <Typography sx={{fontSize: 18}}>Rejoignez-nous. Nous allons vous aider pour chacune de ces étapes.</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" color={'secondary'} value={progress} />
                    </Box>
                    <Box sx={{bottom: 0, py: 1, display: 'flex', width: '100%', borderTop: '0.5px solid #cdcdcd'}}>
                        <Box sx={{ display: 'flex',  width: '100%', flexGrow: 1}}>
                            <Button variant={'text'} sx={{"&:hover" : {textDecoration: 'underline'}, borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17,}} onClick={handleProcessRegress}>Retour</Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end',width: '100%', flexGrow: 1}}>
                            <Button variant={'contained'} sx={{borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17, bgcolor: 'common.black'}} onClick={handleProcessProgress}>Suivant</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
    if(processStep === 9) {
        return (
            <Box sx={{height:"100vh", display:"flex", flexDirection:"row", width: '100%'}} >
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    width: '50%',
                    // bgcolor: 'red',
                    background: "linear-gradient(45deg, rgba(2,85,121,1) 0%, rgba(220,179,68,1) 100%)"
                }}>
                    {/*<Box sx={{ width: }}>*/}
                    <AppBar position="fixed" sx={{bgcolor: 'transparent', py: 1}} elevation={0} >
                        <Toolbar>
                            <Button sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>
                                <img src={lekwatt} alt={'lewatt'} width={90} height={70} />
                            </Button>
                        </Toolbar>
                    </AppBar>
                    {/*</Box>*/}
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%'}}>
                        <Box sx={{width: '90%', textAlign: 'center'}}>
                            <Typography sx={{fontSize: 50}}>Devenez hôte en 10 étapes simples</Typography>
                            <Typography sx={{fontSize: 18}}>Rejoignez-nous. Nous allons vous aider pour chacune de ces étapes.</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display:"flex", flexDirection:"column", width: '50%', bgcolor: 'transparent'}}>
                    <Box sx={{ width: '100',}}>
                        <AppBar position="static" sx={{bgcolor: 'common.white', py: 1}}>
                            <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none'}} onClick={handleGoToHome}>Aide</Button>
                                <Button variant={'outlined'} sx={{borderRadius: '100px', textTransform: 'none', ml: 1}}>Enregistrer et quitter</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1,}}>
                        <Box sx={{width: '70%', textAlign: 'center'}}>
                            <Typography sx={{fontSize: 50}}>Devenez hôte en 10 étapes simples</Typography>
                            <Typography sx={{fontSize: 18}}>Rejoignez-nous. Nous allons vous aider pour chacune de ces étapes.</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" color={'secondary'} value={progress} />
                    </Box>
                    <Box sx={{bottom: 0, py: 1, display: 'flex', width: '100%', borderTop: '0.5px solid #cdcdcd'}}>
                        <Box sx={{ display: 'flex',  width: '100%', flexGrow: 1}}>
                            <Button variant={'text'} sx={{"&:hover" : {textDecoration: 'underline'}, borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17,}} onClick={handleProcessRegress}>Retour</Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end',width: '100%', flexGrow: 1}}>
                            <Button variant={'contained'} sx={{borderRadius: 2, textTransform: 'none', mx: 3, py: 1.5, px: 3, fontSize: 17, bgcolor: 'common.black'}} onClick={handleProcessProgress}>Suivant</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
};

export default BecomeHost;

//Vérifier mon annonce
//Rue
//Appartement, bâtiment, etc.
//Ville
//Etat (facultatif)
//Code postal (facultatif)
//Pays/Région