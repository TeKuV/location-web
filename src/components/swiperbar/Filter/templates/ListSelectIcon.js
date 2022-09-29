import React, {useState} from 'react';
import {Box, FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, Typography, Checkbox} from "@mui/material";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

function translateToVariable(typo) {
    switch (typo) {
        case "Maison" : {
            return "house"
        }
        case "Appartement" : {
            return "appartments"
        }
        case "Maison d'hôtes" : {
            return "guestHouse"
        }
        case "Hôtel" : {
            return "hostel"
        }
        default : return -1;
    }
}

const IconBox = ({isChecked, typo}) => (
    <Box sx={{display: 'flex', flexDirection: 'column', p: 1.5, borderWidth: "2px", borderStyle: "solid", borderColor: isChecked ? "#025579" : "#737373", width: 160, borderRadius: 5, color: isChecked ? 'primary.main' : 'common.black'}}>
        {typo.icon}
        <Typography sx={{fontSize: 17, mt: 2 }}>{typo.label}</Typography>
    </Box>
)

const CustomCheckBox = ({typo, datas, setDatas}) => {
    const [checked, setChecked] = React.useState((datas[translateToVariable(typo.label)]));
    const handleChange = (target) => {
        setChecked(target)
        const exact = translateToVariable(typo.label);
        switch (exact) {
            case "house" : {
                setDatas({"house": target, "appartments": datas["appartments"], "guestHouse": datas["guestHouse"], "hostel": datas["hostel"]})
                break;
            }
            case "appartments" : {
                setDatas({"house": datas["house"], "appartments": target, "guestHouse": datas["guestHouse"], "hostel": datas["hostel"]})
                break;
            }
            case "guestHouse" : {
                setDatas({"house": datas["house"], "appartments": datas["appartments"], "guestHouse": target, "hostel": datas["hostel"]})
                break;
            }
            case "hostel" : {
                setDatas({"house": datas["house"], "appartments": datas["appartments"], "guestHouse": datas["guestHouse"], "hostel": target})
                break;
            }
            default : break;
        }
    }

    return (
        <Checkbox size={'large'} icon={<IconBox typo={typo} isChecked={false} />} checkedIcon={<IconBox typo={typo} isChecked={true} />} checked={checked} onChange={(event) => handleChange(event.target.checked)} />
    )
}

const ListSelectIcon = ({datas, setDatas, typos}) => {

    return (
        <Box sx={{display: 'inline-block', overflowX: 'auto'}}>
            {typos.map((typo, key) => (
                <CustomCheckBox key={key} typo={typo} datas={datas} setDatas={setDatas} />
            ))}
        </Box>
    );
};

export default ListSelectIcon;