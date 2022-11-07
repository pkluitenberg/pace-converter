import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Dropdown(props) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, p: 1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={props.label}
          onChange={handleChange}
        >
          {props.values.map(val => (
            <MenuItem key={val} value={val}>{val}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired
}

export default Dropdown;