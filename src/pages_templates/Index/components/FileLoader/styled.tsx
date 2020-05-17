import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Img from 'gatsby-image'

export const Container = styled.div`
  align-items: center;
  background: ${({ theme }) =>
    `linear-gradient(150deg, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`};
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 1rem;
  width: 100vw;
`

export const Logo = styled(Img)`
  width: 300px;
`

export const Title = styled(Typography)`
  font-weight: bold;
`

export const StyledCard = styled(Card)`
  max-width: 500px;
  padding: 2rem;
  width: 100vh;
`
