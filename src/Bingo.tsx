import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material'
import { makeStyles } from '@material-ui/core'
import CircleCheckedFilled from '@material-ui/icons/CheckCircle'
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked'

import { getRandomItem } from './functions/getRandomNumbers'
import { BingoText } from './data/bingeData'
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { EurovisionIcon } from './eurovision_logo'

const useStyles = makeStyles(() => ({
  formControlLabel: {
    TextDecoder: 'none',
  },
}))
const SELECTED_NUMBERS = 'SELECTED_NUMBERS'

const Bingo = () => {
  const classes = useStyles()
  const strings = getRandomItem({ arr: BingoText })

  const storedNumbers: number[] = JSON.parse(
    localStorage.getItem(SELECTED_NUMBERS) ?? '[]',
  )

  const [selectedNumbers, setSelectedNumbers] = useState<number[]>(
    storedNumbers || [],
  )

  function removeItem(index: number) {
    setSelectedNumbers(selectedNumbers.filter(number => number !== index))
    window.localStorage.setItem(
      SELECTED_NUMBERS,
      JSON.stringify(selectedNumbers.filter(number => number !== index)),
    )
  }

  function addItem(index: number) {
    setSelectedNumbers([...selectedNumbers, index])
    window.localStorage.setItem(
      SELECTED_NUMBERS,
      JSON.stringify([...selectedNumbers, index]),
    )
  }

  function handleOnChange(index: number) {
    const hasSelectedNumber = selectedNumbers.includes(index)

    hasSelectedNumber ? removeItem(index) : addItem(index)
  }

  const { width, height } = useWindowSize()

  return (
    <>
      {selectedNumbers.length >= 20 && (
        <Confetti width={width} height={height} tweenDuration={200} />
      )}
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
      <FormGroup
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignContent: 'center',
          flexDirection: 'row',
          margin: '20px',
        }}
      >
        {strings?.map((str, index) => {
          return (
            <FormControlLabel
              key={index}
              className={classes.formControlLabel}
              style={{
                display: 'flex',
                width: '25%',
                position: 'relative',
                border: '1px solid',
                marginLeft: 0,
                marginRight: 0,
              }}
              control={
                <Checkbox
                  id={'checkbox' + index}
                  icon={<CircleUnchecked />}
                  checked={selectedNumbers.includes(index)}
                  onChange={_ => {
                    handleOnChange(index)
                  }}
                  sx={{
                    '&.Mui-checked': {
                      color: '#393646',
                      '& + .MuiFormControlLabel-label': {
                        backgroundColor: '#F2E5D5',
                      },
                    },
                    '& + .MuiFormControlLabel-label': {
                      flexGrow: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '4px',
                      backgroundColor: '#F2F2F2b3',
                      height: '100%',
                      display: 'flex',
                      textTransform: 'capitalize',
                      minHeight: '100px',
                      fontSize: '14px',
                    },
                    display: 'none',
                  }}
                  checkedIcon={<CircleCheckedFilled />}
                />
              }
              label={str}
            />
          )
        })}
      </FormGroup>
    </>
  )
}

export default Bingo

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined
    height: number | undefined
  }>({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}
