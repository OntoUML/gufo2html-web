import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle<{ theme: Theme }>`
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: ${({ theme }) => theme.palette.secondary.main};
    height: 3px;
    position: fixed;
    z-index: 1900;
    top: 0;
    left: 0;
    width: 100%;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: ${({ theme }) =>
      `0 0 10px ${theme.palette.secondary.main}, 0 0 5px ${theme.palette.secondary.main}`};
    opacity: 1;
    transform: rotate(3deg) translate(0px, -4px);
  }
`
