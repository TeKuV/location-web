import React, {useState} from 'react';
import {Box, FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, Typography, Checkbox} from "@mui/material";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const IconBox = ({isChecked, typo}) => (
    <Box sx={{display: 'flex', flexDirection: 'column', p: 1.5, borderWidth: "2px", borderStyle: "solid", borderColor: isChecked ? "common.black" : "#cdcdcd", width: "100%", borderRadius: 2, color: 'common.black'}}>
        <Typography sx={{fontSize: 22,}}>{typo.label}</Typography>
        <Typography sx={{fontSize: 16, color: '#868686' }}>{typo.desc}</Typography>
    </Box>
)

const CustomCheckBox = ({typo, handleChange, value}) => {
    return (
        <>
            <Checkbox disableRipple disableFocusRipple disableTouchRipple sx={{width: '100%'}} size={'large'} value={typo.label} icon={<IconBox typo={typo} isChecked={false} />} checkedIcon={<IconBox typo={typo} isChecked={true} />} checked={value === typo.label} onChange={handleChange} />
        </>
    )
}

const ListSelectIcon = ({datas, setDatas, typos}) => {
    const [value, setValue] = React.useState(datas);

    const handleChange = (event) => {
        setValue(event.target.value)
        setDatas(event.target.value);
    };

    return (
        // <Box sx={{display: 'inline-block', overflowX: 'auto',}}>
        <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
            sx={{width: '100%', overflowY: 'auto'}}
        >
            {typos.map((typo, key) => (
                <CustomCheckBox key={key} typo={typo} value={value} handleChange={handleChange} />
            ))}
        </RadioGroup>
        // </Box>
    );
};

export default ListSelectIcon;