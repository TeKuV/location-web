import React, {useState} from 'react';
import {Box, FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, Typography, Checkbox} from "@mui/material";

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

function translateToVariable(typo) {
    switch (typo) {
        case "Produits et services de base" : {
            return "basicProductsServices"
        }
        case "Caractéristiques" : {
            return "characteritics"
        }
        case "Emplacement" : {
            return "place"
        }
        case "Sécurité" : {
            return "security"
        }
        default : return -1;
    }
}

const CustomCheckBox = ({label, typo, datas, setDatas}) => {
    const [checked, setChecked] = useState(search(datas[translateToVariable(label)], typo) !== -1)
    const handleChange = (target) => {
        setChecked(target)
        if(target) {
            const exact = translateToVariable(label);
            switch (exact) {
                case "basicProductsServices" : {
                    setDatas({"basicProductsServices": [...datas[exact], typo], "characteritics": datas["characteritics"], "place": datas["place"], "security": datas["security"]})
                    break;
                }
                case "characteritics" : {
                    setDatas({"basicProductsServices": datas["basicProductsServices"], "characteritics": [...datas[exact], typo], "place": datas["place"], "security": datas["security"]})
                    break;
                }
                case "place" : {
                    setDatas({"basicProductsServices": datas["basicProductsServices"], "characteritics": datas["characteritics"], "place": [...datas[exact], typo], "security": datas["security"]})
                    break;
                }
                case "security" : {
                    setDatas({"basicProductsServices": datas["basicProductsServices"], "characteritics": datas["characteritics"], "place": datas["place"], "security": [...datas[exact], typo]})
                    break;
                }
                default : break;
            }
        } else {
            const exact = translateToVariable(label);
            const index = search(datas[exact], typo)
            if(index !== -1) {
                if(index === 0) {
                    const interDatas = datas;
                    interDatas[exact].shift();
                    setDatas(interDatas)
                } else {
                    switch (exact) {
                        case "basicProductsServices" : {
                            setDatas({"basicProductsServices": datas[exact].splice(index, 1), "characteritics": datas["characteritics"], "place": datas["place"], "security": datas["security"]})
                            break;
                        }
                        case "characteritics" : {
                            setDatas({"basicProductsServices": datas["basicProductsServices"], "characteritics":  datas[exact].splice(index, 1), "place": datas["place"], "security": datas["security"]})
                            break;
                        }
                        case "place" : {
                            setDatas({"basicProductsServices": datas["basicProductsServices"], "characteritics": datas["characteritics"], "place":  datas[exact].splice(index, 1), "security": datas["security"]})
                            break;
                        }
                        case "security" : {
                            setDatas({"basicProductsServices": datas["basicProductsServices"], "characteritics": datas["characteritics"], "place": datas["place"], "security":  datas[exact].splice(index, 1)})
                            break;
                        }
                        default : break;
                    }
                }
            }
        }
    }

    return (
        <FormControlLabel sx={{width: 310}} control={<Checkbox size={'medium'} sx={{color: 'common.black'}} checked={checked} onChange={(event) => handleChange(event.target.checked)} />} label={
            <Typography sx={{fontSize: 15 }}>{typo}</Typography>
        } />
    )
}

const CustomCheckBoxWrapper = ({typo, datas, setDatas}) => {
    return (
        <FormControl id="demo-controlled-radio-buttons-group" sx={{display: 'flex', color: 'common.black'}}>
            {console.log("Affichage entré : ",datas)}
            <FormLabel sx={{color: 'inherit'}}>
                <Typography sx={{fontSize: 17 }}>{typo.label}</Typography>
            </FormLabel>
            <Box sx={{display: 'inline-block', overflowX: 'auto'}}>
                {typo.options.map((option, key) => (
                    <CustomCheckBox key={key} label={typo.label} typo={option} datas={datas} setDatas={setDatas} />
                ))}
            </Box>
        </FormControl>
    )
}

const ListOptions = ({datas, setDatas, typos}) => {

    return (
        <Box sx={{display: 'inline-block', overflowX: 'auto', mt: 1}}>
            {typos.map((typo, key) => (
                <CustomCheckBoxWrapper key={key} typo={typo} datas={datas} setDatas={setDatas} />
            ))}
        </Box>
    );
};

export default ListOptions;