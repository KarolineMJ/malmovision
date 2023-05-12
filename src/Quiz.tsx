import { Typography } from '@mui/material'
import { EurovisionIcon } from './eurovision_logo'

const Quiz = () => {
  return (
    <>
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
    </>
  )
}

export default Quiz
