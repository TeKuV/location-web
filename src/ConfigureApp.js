import React, {useState} from "react"
import {createTheme, CssBaseline, ThemeProvider, Container} from "@mui/material";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Main from "./pages/main";
import House from "./pages/house";
import Message from "./pages/accountOptions/message";
import Favorite from "./pages/accountOptions/favorite";
import Notifications from "./pages/accountOptions/notifications";
import BecomeHost from "./pages/becomeHost";
import {AnimatePresence} from "framer-motion";
import ContactUs from "./pages/contactUs";
import AboutUs from "./pages/aboutUs";
import Bookroom from "./pages/Bookroom";

const theme = createTheme({
    typography: {
        fontFamily: "Raleway,TT Norms Pro, Arial",
    },
    palette: {
        primary: {
            main: "#025579",
        },
        secondary: {
            main: "#dcb344",
        },
        text: {
            primary: '#000000',
            secondary: '#025579'
        }
    },
    components: {
        MuiCssBaselie: {
            styleOverrides: `
        @font-face {
          font-family: 'Libre Bodoni';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Libre Bodoni'), local('Raleway-Regular'), url('http://fonts.cdnfonts.com/css/tt-norms-pro') format('otf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
        },
    },


})

const Root = () => {
    //TopLevelState
    //Header States
    const [where, setWhere] = useState("")
    const [arrival, setArrival] = useState("")
    const [departure, setDeparture] = useState("")
    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [babies, setBabies] = useState(0)
    const [animals, setAnimals] = useState(0)

    //Props for Header
    const headerValues = {where, arrival, departure, adults, children, babies, animals}
    const headerSetters = {setWhere, setArrival, setDeparture, setAdults, setChildren, setBabies, setAnimals}

    return (
        <BrowserRouter>
            {/*<Container size="sm" textAlign="center" my="10rem">*/}
            {/*    <AnimatePresence exitBeforeEnter>*/}
                    <Routes>
                        <Route path={"/"} element={<Main headerValues={headerValues} headerSetters={headerSetters} />} />
                        <Route path={"/house/:houseId"} element={<House headerValues={headerValues} headerSetters={headerSetters} />}>
                            <Route path={"bookroom"} element={<Bookroom headerValues={headerValues} headerSetters={headerSetters} />} />
                        </Route>
                        <Route path={"account"}>
                            <Route path={"message"} element={<Message headerValues={headerValues} headerSetters={headerSetters} />} />
                            <Route path={"favorite"} element={<Favorite headerValues={headerValues} headerSetters={headerSetters} />} />
                            <Route path={"notifications"} element={<Notifications headerValues={headerValues} headerSetters={headerSetters} />} />
                        </Route>
                        <Route path={"/becomehost"} element={<BecomeHost />} />
                        <Route path={"/contactus"} element={<ContactUs headerValues={headerValues} headerSetters={headerSetters} />} />
                        <Route path={"/aboutus"} element={<AboutUs headerValues={headerValues} headerSetters={headerSetters} />} />
                    </Routes>
            {/*    </AnimatePresence>*/}
            {/*</Container>*/}
        </BrowserRouter>
    )
}

function ConfigureApp() {
    return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Root />
    </ThemeProvider>
  );
}

export default ConfigureApp;
