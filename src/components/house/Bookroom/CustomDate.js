import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function CustomDate({value, setValue, error}) {

    return (
        <div style={{width: '100%'}}>
            <LocalizationProvider dateAdapter={AdapterDateFns} sx={{width: 'inherit'}}>
                <DateTimePicker
                    renderInput={(props) => <TextField sx={{px: 1, width: 'inherit'}} error={error} {...props} />}
                    // label="DateTimePicker"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                />
            </LocalizationProvider>
        </div>
    );
}
