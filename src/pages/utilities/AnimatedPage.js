import React from 'react';
import {motion} from "framer-motion"

const animations = {
    initial: {opacity: 0, x: 100},
    animate: {opacity: 1, x: 100},
    exit: {opacity: 0, x: 100},
}

const AnimatedPage = ({children}) => {
    return (
        <motion.div variant={animations} initial={"initial"} animate={"animate"} exit={"exit"} transition={{duration: 5000}}>
            {children}
        </motion.div>
    );
};

export default AnimatedPage;