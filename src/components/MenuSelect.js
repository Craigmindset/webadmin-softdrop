import { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function MenuSelect({optionArray}) {
    const [option, setOption] = useState('');

    const handleChange = (e) => {
        setOption(e.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Time</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={option}
            label="Days"
            onChange={handleChange}
          >
            {
                optionArray?.map((item) => (
                    <MenuItem key={item} value={item}>{item}</MenuItem>
                ))
            }
          </Select>
        </FormControl>
      );
}
