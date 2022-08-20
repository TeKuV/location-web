import React from 'react';
import { DateRangePicker } from "mui-daterange-picker";
import {Menu, Paper} from "@mui/material";

const CustomDateRange = ({open, handleClose, anchorEl, dateRange, setDateRange}) => {
    const [who, setWho] = React.useState()
    const handleChange = (range) => {
        setDateRange(range)
        console.log("DateRange : ", dateRange)
    }

    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            sx={{p: 0, m: 0}}
        >
            <DateRangePicker
                open={open}
                closeOnClickOutside={true}
                toggle={handleClose}
                onChange={(range) => handleChange(range)}
            />
        </Menu>
    );
};

export default CustomDateRange;