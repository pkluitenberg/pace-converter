import * as React from 'react';
import Button from '@mui/material/Button';
import Header from './components/Header';
import Dropdown from './components/Dropdown';
import Box from '@mui/material/Box';
import Autorenew from '@mui/icons-material/Autorenew';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'

function App() {
    const [seconds, setSeconds] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [units, setUnits] = React.useState(0);
    const [output, setOutput] = React.useState('');


    const minutesValues = Array.from(Array(25).keys())
    const secondsValues = Array.from(Array(60).keys())
    const unitsValues = [{ value: false, label: 'mins/km' }, { value: true, label: 'mins/mi' }]

    function paceConverter(minutes, seconds, units) {
        const totalSeconds = minutes*60 + seconds
        const conversionConstant = 0.6213692038495188
        const convertedSeconds = units ? (totalSeconds*conversionConstant) : (totalSeconds*(1/conversionConstant))
        const displayMinutes = Math.floor(convertedSeconds/60)
        const displaySeconds = Math.round(convertedSeconds%60)
        const displayUnits = unitsValues.find(obj => obj.value === !units).label
        setOutput(`${displayMinutes}:${('0'+displaySeconds).slice(-2)} ${displayUnits}`);
      }
    const handleClick = (event) => {
        paceConverter(minutes, seconds, units)
      };

    return (
        <div>
            <Header />
            <Dropdown
                label='Minutes'
                values={minutesValues}
                onChange={event => (setMinutes(event))}
            />
            <Dropdown
                label='Seconds'
                values={secondsValues}
                onChange={event => (setSeconds(event))}
            />
            <Dropdown
                label='Units'
                values={unitsValues}
                onChange={event => (setUnits(event))}
            />
            <Box sx={{ p: 1 }}>
                <Button variant="contained" startIcon={<Autorenew />} onClick={event => (handleClick(event))}>Convert</Button>
            </Box>
            <Paper sx={{ p: 1 }} elevation={1}>
                <Typography sx={{ p: 1 }} variant="body">
                    = {output}
                </Typography>
            </Paper>
        </div>
    )
}

export default App;