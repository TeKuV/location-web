import React, {useState} from 'react';
import {Box, Checkbox, FormControlLabel, Typography} from "@mui/material";

function search(datas, label) {
    let returning = null;
    for(let i = 0; i < datas.length; i++) {
       if(datas[i] === label) {
           returning = i
       }
    }
    if(returning != null)
        return returning
    return -1;
}

const CustomCheckBox = ({typo, datas, setDatas}) => {
    const [checked, setChecked] = useState(search(datas, typo.label) !== -1)
    const handleChange = (target, label) => {
        setChecked(target)
        if(target) {
            setDatas([...datas, label])
        } else {
            const index = search(datas, label)
            if(index !== -1) {
                if(index === 0) {
                    const interDatas = datas;
                    interDatas.shift();
                    setDatas(interDatas)
                } else
                    setDatas(datas.splice(index, 1))
            }
        }
    }

    return (
        <FormControlLabel sx={{width: 310,}} control={<Checkbox size={'medium'} sx={{ color: 'common.black' }} checked={checked} onChange={(event) => handleChange(event.target.checked, typo.label)} />} label={
            <>
                <Typography sx={{fontSize: 17 }}>{typo.label}</Typography>
                <Typography sx={{fontSize: 16, }} >{typo.description}</Typography>
            </>
        } />
    )
}

const CheckEls = ({datas, setDatas, typos}) => {

    return (
        <Box sx={{display: 'inline-block', overflowX: 'auto'}}>
            {typos.map((typo, key) => (
                <CustomCheckBox key={key} typo={typo} datas={datas} setDatas={setDatas} />
            ))}
        </Box>
    );
};

export default CheckEls;