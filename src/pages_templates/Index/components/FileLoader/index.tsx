import React, { useCallback } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { DocOptions } from 'gufo2html/dist/types'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FileButton from '@components/FileButton'
import example from '../../example'
import * as S from './styled'

type Props = {
  onFileLoad: (ontology: string, docOptions?: DocOptions) => void
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

  const onExampleClick = useCallback(() => {
    onFileLoad(example, {
      documentationProps: {
        title: 'AlpineBits',
        description: ['Here is some description'],
      },
    })
  }, [])

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
            <Grid item={true} xs={12}>
              <Button fullWidth={true} onClick={onExampleClick}>
                or click here to see an example
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </S.StyledCard>
    </S.Container>
  )
}

export default FileReader
