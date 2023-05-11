import { AppBar, Toolbar, CssBaseline, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { EurovisionIcon } from './eurovision_logo'

const useStyles = makeStyles(theme => ({
  logo: {
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '16px',
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    marginLeft: theme.spacing(4),
    '&:hover': {
      cursor: 'pointer',
    },
  },
}))

const Navbar = () => {
  const classes = useStyles()
  return (
    <AppBar position="static" style={{ color: 'black' }}>
      <CssBaseline />
      <Toolbar
        style={{
          justifyContent: 'space-between',
          backgroundColor: '#F2E5D5',
          color: 'black',
        }}
      >
        <EurovisionIcon style={{ width: 120, height: 70, cursor: 'pointer' }} />

        <div>
          <Link to="/bingo" className={classes.link}>
            Bingo
          </Link>
          <Link to="/quiz" className={classes.link}>
            Quiz
          </Link>
          <Link to="/faq" className={classes.link}>
            FAQ
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
