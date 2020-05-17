import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#227edc',
      main: '#1f72be',
      dark: '#175798',
    },
    secondary: {
      light: '#f38b23',
      main: '#f97f04',
      dark: '#bf6102',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    h1: {
      fontWeight: 'bold',
    },
    h2: {
      fontWeight: 'bold',
    },
    h3: {
      fontWeight: 'bold',
    },
    h4: {
      fontWeight: 'bold',
    },
    h5: {
      fontWeight: 'bold',
    },
    subtitle1: {
      fontSize: '1.1rem',
    },
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
  },
})

export default responsiveFontSizes(theme)
