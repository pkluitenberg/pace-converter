import * as React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Dropdown(props) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="input-label">{props.label}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={value}
        defaultValue={props.defaultValue?props.defaultValue:''}
        label={props.label}
        onChange={handleChange}
      >
        {props.values.map(obj => (
          <MenuItem key={obj.value ? obj.value : obj} value={obj.value ? obj.value : obj}>{obj.label ? obj.label : obj}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Dropdown;