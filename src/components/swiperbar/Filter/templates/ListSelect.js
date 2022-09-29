import React from 'react';
import {Box, FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, Typography} from "@mui/material";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';


function translateToVariable(typo) {
    switch (typo) {
        case "Chambres" : {
            return "rooms"
        }
        case "Lits" : {
            return "beds"
        }
        case "Salles de bain" : {
            return "bathrooms"
        }
        default : return -1;
    }
}

const CustomCheckBox = ({typo, values ,datas, setDatas}) => {
    const [value, setValue] = React.useState((datas[translateToVariable(typo)]));
    const handleChange = (event) => {
        const value = event.target.value;
        setValue(value)
        const exact = translateToVariable(typo);
        switch (exact) {
            case "rooms" : {
                setDatas({"rooms": value, "beds": datas["beds"], "bathrooms": datas["bathrooms"],})
                break;
            }
            case "beds" : {
                setDatas({"rooms": datas["rooms"], "beds": value, "bathrooms": datas["bathrooms"],})
                break;
            }
            case "bathrooms" : {
                setDatas({"rooms": datas["rooms"], "beds": datas["beds"], "bathrooms": value,})
                break;
            }
            default : break;
        }
    }

    return (
        <FormControl id="demo-controlled-radio-buttons-group" sx={{display: 'flex'}}>
            <FormLabel>
                <Typography sx={{fontSize: 17 }}>{typo}</Typography>
            </FormLabel>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                sx={{display: 'flex', flexDirection: 'row'}}
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel sx={{m : 0.5, mb: 0.5, pr: 1, border: "2px solid black", borderRadius: "100px"}} value={"0"} control={<Radio size={'medium'} sx={{color: 'common.black'}} icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleRoundedIcon />} />} label={
                    <Typography sx={{fontSize: 17 }}>Tout</Typography>
                } />
                {values.map((value, key) => (
                    <FormControlLabel key={key} sx={{m : 0.5, mb: 0.5, pr: 1, border: `2px solid black`, borderRadius: "100px"}} value={value} control={<Radio size={'medium'} sx={{color: 'common.black'}} icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleRoundedIcon />} />} label={
                        <Typography sx={{fontSize: 17 }}>{`${value}`}</Typography>
                    } />
                ))}
            </RadioGroup>
        </FormControl>
    )
}

const ListSelect = ({datas, setDatas, typos}) => {

    return (
        <Box sx={{display: 'inline-block', overflowX: 'auto'}}>
            {typos.titles.map((typo, key) => (
                <CustomCheckBox key={key} typo={typo} values={typos.possiblesValues} datas={datas} setDatas={setDatas} />
            ))}
        </Box>
    );
};

export default ListSelect;