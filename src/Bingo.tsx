import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import CircleCheckedFilled from '@material-ui/icons/CheckCircle'
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked'

import { getRandomItem } from './functions/getRandomNumbers'
import { BingoText } from './data/bingeData'

const useStyles = makeStyles(() => ({
  formControlLabel: {
    TextDecoder: 'none',
  },
}))

const Bingo = () => {
  const classes = useStyles()

  const strings = getRandomItem({ arr: BingoText })
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
                  onChange={() => null}
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

                    // position: 'absolute',
                    // top: '-15px',
                    // right: '-15px',
                  }}
                  checkedIcon={<CircleCheckedFilled />}
                />
              }
              label={str}
            />

            //     {str}
            //   </FormLabel>
            // </FormControlLabel>
          )
        })}
      </FormGroup>
    </>
  )
}

export default Bingo
