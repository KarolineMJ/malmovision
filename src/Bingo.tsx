import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import CircleCheckedFilled from '@material-ui/icons/CheckCircle'
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked'

import { getRandomItem } from './functions/getRandomNumbers'
import { BingoText } from './data/bingeData'
import { useState } from 'react'

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
  }

  function addItem(index: number) {
    setSelectedNumbers([...selectedNumbers, index])
  }

  function handleOnChange(index: number) {
    const hasSelectedNumber = selectedNumbers.includes(index)

    hasSelectedNumber ? removeItem(index) : addItem(index)

    window.localStorage.setItem(
      SELECTED_NUMBERS,
      JSON.stringify(selectedNumbers),
    )
  }

  return (
    <>
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
