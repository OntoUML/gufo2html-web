import React from 'react'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

type Props = {
  onLoad: (ontology: string) => void
}

const FileLoader: React.FC<Props> = ({ onLoad }) => {
  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e && e.target && e.target.files) {
      const file = e.target.files[0]
      const reader = new FileReader()

      reader.onload = async (event: ProgressEvent<FileReader>) => {
        if (event && event.target) {
          const ontology = event.target.result as string
          onLoad(ontology as string)
        }
      }

      reader.readAsText(file)
    }
  }

  return (
    <Button
      variant="contained"
      component="label"
      size="large"
      color="secondary"
      fullWidth={true}
      startIcon={<CloudUploadIcon />}
    >
      Upload File
      <input
        type="file"
        accept=".ttl"
        onChange={onFileChange}
        style={{ display: 'none' }}
      />
    </Button>
  )
}

export default FileLoader
