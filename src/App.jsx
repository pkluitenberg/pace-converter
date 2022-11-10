import * as React from 'react';
import Button from '@mui/material/Button';
import Header from './Components/Header';
import Dropdown from './Components/Dropdown';
import Box from '@mui/material/Box';
import Autorenew from '@mui/icons-material/Autorenew';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import paceConverter from './Utils/paceConverter';

function App() {
    const boxFormat = { maxWidth: 360, p: 1 }

    const minutesValues = Array.from(Array(60).keys())
    const secondsValues = Array.from(Array(60).keys())
    const unitsValues = ['mins/km', 'mins/mi']

    const [seconds, setSeconds] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [units, setUnits] = React.useState('');
    const [output, setOutput] = React.useState('');

    const handleClick = (event) => {
        const convertedSeconds = paceConverter(minutes, seconds, units);
        const displayMinutes = Math.floor(convertedSeconds / 60)
        const displaySeconds = Math.round(convertedSeconds % 60)

        const displayUnits = unitsValues.find(el => el !== units)
        console.log(displayUnits)
        setOutput(`${displayMinutes}:${('0' + displaySeconds).slice(-2)} ${displayUnits}`);
    };

    return (
        <div>
            <Header />
            <Box sx={boxFormat}>
                <Dropdown
                    label='Minutes'
                    values={minutesValues}
                    onChange={event => (setMinutes(event))}
                />
            </Box>
            <Box sx={boxFormat}>
                <Dropdown
                    label='Seconds'
                    values={secondsValues}
                    onChange={event => (setSeconds(event))}
                />
            </Box>
            <Box sx={boxFormat}>
                <Grid container spacing={1}>
                    <Grid item sm={6} >
                        <Dropdown
                            label='From'
                            values={unitsValues}
                            onChange={event => (setUnits(event))}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <Dropdown
                            label='To'
                            values={unitsValues}
                            onChange={event => (console.log(''))}
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