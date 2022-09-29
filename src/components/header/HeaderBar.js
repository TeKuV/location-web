import React from 'react';
import {
    AppBar,
    Box,
    Container,
    Toolbar,
} from "@mui/material";

//Images imports
import {HomeIcon, RightSideElements, SearchBar} from "./HeaderElements";

const HeaderBar = ({setIsSearchEngine, searchValues, handleConnectOpen}) => {
    return (
        <Box sx={{ flexGrow: 1, color: 'transparent'}}>
            <AppBar position="static" >
                <Toolbar>
                    <Container maxWidth={'false'} sx={{display: 'flex', flexDirection: 'row', verticalAlign: 'middle', alignItems: 'center'}}>
                        <HomeIcon />
                        <SearchBar setIsSearchEngine={setIsSearchEngine} searchValues={searchValues} />
                        <RightSideElements handleConnectOpen={handleConnectOpen} />
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default HeaderBar;