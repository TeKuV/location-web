import React, {useState} from 'react';
import HeaderBar from "./HeaderBar";
import HeaderDialog from "./SearchEngine";
import SearchEngine from "./SearchEngine";
import Authentication from "../authentication";

const Header = ({values, setters}) => {
    const [isSearchEngine, setIsSearchEngine] = useState(false)
    const [connectOpen, setConnectOpen] = useState(false)
    const handleConnectOpen = () => {
        setConnectOpen(true)
    }
    const handleCloseOpen = () => {
        setConnectOpen(false)
    }

    return (
        <>
            {isSearchEngine ? <SearchEngine isSearchEngine={isSearchEngine} setIsSearchEngine={setIsSearchEngine} values={values} setters={setters} /> : null}
            <HeaderBar setIsSearchEngine={setIsSearchEngine} searchValues={values} handleConnectOpen={handleConnectOpen} />
            <Authentication connectOpen={connectOpen} handleCloseOpen={handleCloseOpen} />
        </>
    );
};

export default Header;