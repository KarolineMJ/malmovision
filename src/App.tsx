import './App.css'
import { Button, Typography } from '@mui/material'
import Navbar from './navbar'
import Bingo from './Bingo'
import { EurovisionIcon } from './eurovision_logo'

function App() {
  return (
    <div className="App">
      <Navbar />
      <EurovisionIcon
        style={{ width: 220, height: 70, cursor: 'pointer', marginTop: '30px' }}
      />

      <Typography
        sx={{
          marginTop: 0,
          marginBottom: '30px',
          fontSize: '16px',
          textTransform: 'uppercase',
          fontWeight: 800,
        }}
      >
        Bingo 2023
      </Typography>
      <Bingo />
    </div>
  )
}

export default App
