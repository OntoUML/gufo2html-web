import React, { useCallback, useContext, useMemo } from 'react'
import { DocOptions } from 'gufo2html/dist/types'
import { useForm } from 'react-hook-form'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import FileButton from '@components/FileButton'
import { DocOptionsContext } from '@context/doc_options'
import * as S from './styled'

type Props = {
  onDownloadClick: () => void
  onFileLoad: (ontology: string) => void
}

const DocPropsForm: React.FC<Props> = ({ onDownloadClick, onFileLoad }) => {
  const { docOptions, updateDocOptions } = useContext(DocOptionsContext)
  const { register, setValue, getValues } = useForm<DocOptions>({
    defaultValues: docOptions!,
  })

  const onBlur = useCallback(() => {
    const newDocOptions = getValues({ nest: true })

    updateDocOptions(newDocOptions)
  }, [])

  const onChange = useCallback(
    async (name: string, value: string, type?: string) => {
      if (type === 'color') {
        await setValue(name, value)

        const newDocOptions = getValues({ nest: true })
        updateDocOptions(newDocOptions)
      }
    },
    []
  )

  const fields = useMemo(() => {
    return [
      { name: 'baseIRI', label: 'Namespace' },
      { name: 'documentationProps.title', label: 'Title' },
      { name: 'documentationProps.description', label: 'Description' },
      {
        name: 'documentationProps.theme.colors.background',
        label: 'Background Color',
        type: 'color',
      },
      {
        name: 'documentationProps.theme.colors.title',
        label: 'Title Color',
        type: 'color',
      },
      {
        name: 'documentationProps.theme.colors.link',
        label: 'Link Color',
        type: 'color',
      },
      {
        name: 'documentationProps.theme.colors.text',
        label: 'Text Color',
        type: 'color',
      },
      {
        name: 'documentationProps.theme.colors.border',
        label: 'Border Color',
        type: 'color',
      },
    ]
  }, [])

  return (
    <S.FormContainer>
      <Grid container={true} spacing={3}>
        {fields.map(({ name, label, ...props }) => (
          <Grid key={label} item={true} xs={12}>
            <TextField
              name={name}
              inputRef={register}
              label={label}
              fullWidth={true}
              onBlur={onBlur}
              onChange={e => onChange(name, e.target.value, props.type)}
              variant="outlined"
              {...props}
            />
          </Grid>
        ))}
        <Grid item={true} xs={12}>
          <Button
            size="large"
            color="primary"
            variant="contained"
            fullWidth={true}
            onClick={onDownloadClick}
            startIcon={<CloudDownloadIcon />}
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
