import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import FileButton from '@components/FileButton'
import * as S from './styled'

type Props = {
  onFileLoad: (ontology: string) => void
}

const FileReader: React.FC<Props> = ({ onFileLoad }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ufo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <S.Container>
      <S.StyledCard>
        <CardContent>
          <Grid container={true} spacing={4}>
            <Grid item={true} xs={12} container={true} justify="center">
              <S.Logo fluid={data.placeholderImage.childImageSharp.fluid} />
            </Grid>
            <Grid item={true} xs={12}>
              <Typography
                color="primary"
                variant="h4"
                component="h1"
                align="center"
                gutterBottom={true}
              >
                {' '}
                gUFO to HTML
              </Typography>
              <Typography variant="subtitle1" align="center">
                Upload a .ttl file to get started
              </Typography>
            </Grid>
            <Grid item={true} xs={12}>
              <FileButton onLoad={onFileLoad} />
            </Grid>
          </Grid>
        </CardContent>
      </S.StyledCard>
    </S.Container>
  )
}

export default FileReader
