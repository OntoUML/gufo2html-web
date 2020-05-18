import React, { useContext, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FileButton from '@components/FileButton'
import { DocOptionsContext } from '@context/doc_options'
import * as S from './styled'

type Props = {
  onDownloadClick: () => void
  onFileLoad: (ontology: string) => void
}

const DocPropsForm: React.FC<Props> = ({ onDownloadClick, onFileLoad }) => {
  const { docOptions, updateDocOptions } = useContext(DocOptionsContext)
  const [title, setTitle] = useState(
    docOptions && docOptions.documentationProps
      ? docOptions.documentationProps.title
      : ''
  )
  const [description, setDescription] = useState(
    docOptions &&
      docOptions.documentationProps &&
      docOptions.documentationProps.description
      ? docOptions.documentationProps.description[0]
      : ''
  )

  return (
    <S.FormContainer>
      <Grid container={true} spacing={4}>
        <Grid item={true} xs={12}>
          <TextField
            label="Title"
            value={title}
            fullWidth={true}
            onChange={e => setTitle(e.target.value)}
            onBlur={() => updateDocOptions({ documentationProps: { title } })}
            variant="outlined"
          />
        </Grid>
        <Grid item={true} xs={12}>
          <TextField
            label="Description"
            value={description}
            fullWidth={true}
            onChange={e => setDescription(e.target.value)}
            onBlur={() =>
              updateDocOptions({
                documentationProps: { description: [description] },
              })
            }
            variant="outlined"
          />
        </Grid>
        <Grid item={true} xs={12}>
          <Button
            size="large"
            color="primary"
            variant="contained"
            fullWidth={true}
            onClick={onDownloadClick}
          >
            Download HTML file
          </Button>
        </Grid>
        <Grid item={true} xs={12}>
          <FileButton label="Upload New File" onLoad={onFileLoad} />
        </Grid>
      </Grid>
    </S.FormContainer>
  )
}

export default DocPropsForm
