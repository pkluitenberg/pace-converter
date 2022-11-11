import * as React from 'react';
import Button from '@mui/material/Button';
import Header from './components/Header';
import Dropdown from './components/Dropdown';
import Box from '@mui/material/Box';
import Autorenew from '@mui/icons-material/Autorenew';
import ForwardOutlinedIcon from '@mui/icons-material/ForwardOutlined';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import paceConverter from './utils/paceConverter';

function App() {
    const boxFormat = { maxWidth: 360, p: 1 }

    const minutesValues = Array.from(Array(60).keys())
    const secondsValues = Array.from(Array(60).keys())
    const unitsValues = ['mins/km', 'mins/mi']

    const [seconds, setSeconds] = React.useState('');
    const [minutes, setMinutes] = React.useState('');
    const [output, setOutput] = React.useState('');
    const [unitsFrom, setUnitsFrom] = React.useState(unitsValues[0]);
    const [unitsTo, setUnitsTo] = React.useState(unitsValues[1]);

    const handleClick = (event) => {
        const convertedSeconds = paceConverter(minutes, seconds, unitsFrom);
        const displayMinutes = Math.floor(convertedSeconds / 60)
        const displaySeconds = Math.round(convertedSeconds % 60)

        setOutput(`${displayMinutes}:${('0' + displaySeconds).slice(-2)} ${unitsTo}`);
    };

    const handleUnitsFromOnChange = (value) => {
        setUnitsFrom(value);
        setUnitsTo(unitsValues.find(el => el !== value))
    };
    const handleUnitsToOnChange = (value) => {
        setUnitsTo(value);
        setUnitsFrom(unitsValues.find(el => el !== value))
    };


    return (
        <div>
            <Header />
            <Box sx={boxFormat}>
                <Dropdown
                    label='Minutes'
                    values={minutesValues}
                    onChange={event => (setMinutes(event))}
                    value={minutes}
                />
            </Box>
            <Box sx={boxFormat}>
                <Dropdown
                    label='Seconds'
                    values={secondsValues}
                    onChange={event => (setSeconds(event))}
                    value={seconds}
                />
            </Box>
            <Box sx={boxFormat}>
                <Grid container spacing={1}>
                    <Grid item sm={5} >
                        <Dropdown
                            label='From'
                            values={unitsValues}
                            onChange={value => (handleUnitsFromOnChange(value))}
                            value={unitsFrom}
                        />
                    </Grid>
                    <Grid item sm={2} alignItems="center" justifyContent="center" display="flex">
                        <ForwardOutlinedIcon fontSize="large" color="action"></ForwardOutlinedIcon>
                    </Grid>
                    <Grid item sm={5}>
                        <Dropdown
                            label='To'
                            values={unitsValues}
                            onChange={value => (handleUnitsToOnChange(value))}
                            value={unitsTo}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={boxFormat}>
                <Button variant="contained" startIcon={<Autorenew />} onClick={event => (handleClick(event))}>Convert</Button>
            </Box>
            <Box sx={boxFormat}>
                <Paper sx={{ p: 1 }} elevation={1}>
                    <Typography sx={{ p: 1 }} variant="body">
                        = {output}
                    </Typography>
                </Paper>
            </Box>
        </div>
    )
}

export default App;