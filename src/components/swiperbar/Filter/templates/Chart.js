import React from 'react';
import {Box, FormControl, InputAdornment, InputLabel, OutlinedInput, Tooltip} from "@mui/material";
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import CurrencyFrancRoundedIcon from "@mui/icons-material/CurrencyFrancRounded";

const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#025579',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        '&:hover': {
            boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
        },
        '& .airbnb-bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    '& .MuiSlider-track': {
        height: 3,
    },
    '& .MuiSlider-rail': {
        color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
        opacity: theme.palette.mode === 'dark' ? undefined : 1,
        height: 3,
    },
}));

function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
        </SliderThumb>
    );
}

function valuetext(value) {
    return `${value} Fcfa`;
}

const Chart = ({datas, setDatas}) => {
    const [value, setValue] = React.useState(datas);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        // setDatas(newValue)
    };

    const handleChangeMin = (event) => {
        setValue([event.target.value, value[1]])
    }

    const handleChangeMax = (event) => {
        setValue([value[0], event.target.value])
    }


    return (
        <Box sx={{mx: 4}}>
            <AirbnbSlider
                components={{ Thumb: AirbnbThumbComponent }}
                getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={20000}
                max={400000}
            />
            <Box sx={{display: 'flex'}}>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Prix minimum</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={value[0]}
                        onChange={handleChangeMin}
                        startAdornment={<InputAdornment position="start"><CurrencyFrancRoundedIcon fontSize={'small'} /></InputAdornment>}
                        label="Prix minimum"
                    />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Prix maximum</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={value[1]}
                        onChange={handleChangeMax}
                        startAdornment={<InputAdornment position="start"><CurrencyFrancRoundedIcon fontSize={'small'} /></InputAdornment>}
                        label="Prix maximum"
                    />
                </FormControl>
            </Box>
        </Box>
    );
};

export default Chart;