import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    0.5: 'Je deteste vraiment',
    1: 'Je desteste',
    1.5: "Je n'aime vraiment pas",
    2: "Je n'aime pas",
    2.5: "Assez conviviale",
    3: 'Conviale',
    3.5: "J'aime",
    4: "J'aime vraiment",
    4.5: "J'adore",
    5: "C'est excelent",
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating({value, setValue}) {
    const [hover, setHover] = React.useState(-1);

    return (
        <Box
            sx={{
                // width: 300,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
        </Box>
    );
}
