import React, {useEffect, useRef, useState} from 'react';
import {
    Box,
    Container,
    Tabs,
    Tab,
    Paper,
    Typography,
    Toolbar
} from "@mui/material";
import {HomeIcon, RightSideElements, SearchBar} from "./HeaderElements";
import MacroSearchBarHousing from "./MacroSearchBarHousing";
import MacroSearchBarExperiences from "./MacroSearchBarExperiences";


const TabsChoice = ({value, setValue}) => {
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };

    const tabs=['Logements',"Expérience", "Expériences en ligne" ]

    return (
            <Tabs
                value={value}
                textColor={'secondary'}
                color={'secondary'}
                onChange={handleChange}
                indicatorColor={'white'}
                selectionFollowsFocus={true}

            >
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        sx={{borderBottom: value === index ? "2px solid #dcb344" : "" }}
                        label={<Typography sx={{color: 'common.white', textTransform: 'none', fontSize: 17}}>{tab}</Typography>}
                    />
                ))}
            </Tabs>
    );
}

const SearchEngine = ({isSearchEngine, setIsSearchEngine, values, setters}) => {
    const [tabValue, setTabValue] = React.useState(0);
    const [submitted, setSubmitted] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (isSearchEngine && ref.current && !ref.current.contains(e.target)) {
                setIsSearchEngine(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isSearchEngine])

    return (
        <Paper sx={{position: "absolute", width: '100%', height: '140px', zIndex: 200, backgroundColor: 'primary.main'}} ref={ref}>{/*<AppBar position="sticky" >*/}
            <Toolbar>
                <Container maxWidth={'false'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Box sx={{display: 'flex', flexDirection: 'row', verticalAlign: 'middle', alignItems: 'center'}}>
                        <HomeIcon />
                        <Box sx={{display: 'inherit', flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <TabsChoice value={tabValue} setValue={setTabValue} />
                        </Box>
                        <RightSideElements />
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        {
                            tabValue === 0 ? (
                                <MacroSearchBarHousing values={values} setters={setters} submitted={submitted} setSubmitted={setSubmitted} />
                            ) : tabValue === 1 ? (
                               <MacroSearchBarExperiences values={values} setters={setters} />
                            ) : (
                                <></>
                            )
                        }
                    </Box>
                </Container>
            </Toolbar>
        </Paper>
    );
};

export default SearchEngine;