import Button from '@mui/material/Button';
import Header from './components/Header';
import Dropdown from './components/Dropdown';
import Box from '@mui/material/Box';

function App() {

    const minutesValues = Array.from(Array(25).keys())
    const secondsValues = Array.from(Array(60).keys())
    const unitsValues = ['mins/km', 'mins/mi']
    return (
        <div>
            <Header />
            <Dropdown
                label='Minutes'
                values={minutesValues}
            />
            <Dropdown
                label='Seconds'
                values={secondsValues}
            />
            <Dropdown
                label='Units'
                values={unitsValues} 
            />
            <Box sx={{p: 1}}><Button variant="contained">Submit</Button></Box>    
        </div>
    )
}

export default App;