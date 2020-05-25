import React, { useEffect, useCallback, useState, useRef } from 'react'
import { transformGUFO2HTML } from 'gufo2html'
import NProgress from 'nprogress'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { DocOptions } from 'gufo2html/dist/types'
import SEO from '@layout/SEO'
import { DocOptionsContext } from '@context/doc_options'
import { generateKey } from '@utils/helpers'
import NProgressStyles from '@styles/plugins/nprogress'
import FileLoader from './components/FileLoader'
import DocPropsForm from './components/DocPropsForm'
import Preview from './components/Preview'
import * as S from './styled'

NProgress.configure({ showSpinner: false })

const INITIAL_DOC_PROPS: DocOptions = {
  baseIRI: '',
  format: 'Turtle',
  documentationProps: {
    title: 'Ontology',
    description: [''],
    theme: {
      colors: {
        background: '#ffffff',
        border: '#dddddd',
        title: '#005a9c',
        text: '#212121',
        link: '#005a9c',
      },
    },
    customPartials: {},
  },
}

const IndexTemplate = () => {
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const htmlInputFileRef = useRef<HTMLInputElement>(null)
  const [formKey, setFormKey] = useState(generateKey())
  const [previewOpened, setPreviewOpened] = useState(false)
  const [namespaceLoaded, setNamespaceLoaded] = useState(false)
  const [docOptions, setDocOptions] = useState<DocOptions>(INITIAL_DOC_PROPS)
  const [ontology, setOntology] = useState('')
  const [documentation, setDocumentation] = useState('')

  useEffect(() => {
    ;(async () => {
      if (ontology) {
        NProgress.start()

        const { html, prefixes } = await transformGUFO2HTML(
          ontology,
          docOptions
        )

        if (
          prefixes[''] &&
          prefixes[''] !== docOptions.baseIRI &&
          !namespaceLoaded
        ) {
          setNamespaceLoaded(true)
          setDocOptions({
            ...docOptions,
            baseIRI: prefixes[''],
          })

          setFormKey(generateKey())
        }

        setDocumentation(html)

        NProgress.done()
      }
    })()
  }, [ontology, docOptions])

  const onFileLoad = useCallback(
    (ontology: string, newDocOptions?: DocOptions) => {
      setNamespaceLoaded(false)
      setOntology(ontology)

      if (newDocOptions) {
        updateDocOptions(newDocOptions)
      } else {
        setDocOptions(INITIAL_DOC_PROPS)
      }
    },
    []
  )

  const onDownloadClick = useCallback(() => {
    const element = document.createElement('a')

    if (htmlInputFileRef && htmlInputFileRef.current) {
      const file = new Blob([documentation], { type: 'text/html' })
      element.href = URL.createObjectURL(file)
      element.download = 'doc.html'
      document.body.appendChild(element) // Required for this to work in FireFox
      element.click()
    }
  }, [htmlInputFileRef, documentation])

  const updateDocOptions = useCallback((newDocOptions: DocOptions) => {
    setDocOptions(prev => ({
      ...prev,
      ...newDocOptions,
      documentationProps: {
        ...prev.documentationProps,
        ...newDocOptions.documentationProps,
      },
    }))
  }, [])

  const onTogglePreview = useCallback(() => {
    setPreviewOpened(prev => !prev)
  }, [])

  return (
    <DocOptionsContext.Provider value={{ docOptions, updateDocOptions }}>
      <SEO title="gUFO to HTML" />
      <NProgressStyles />
      {documentation ? (
        <>
          <DocPropsForm
            key={formKey}
            onDownloadClick={onDownloadClick}
            onFileLoad={onFileLoad}
          />
          <Preview opened={previewOpened} documentation={documentation} />
          <S.HTMLInputFile ref={htmlInputFileRef} />
          {mobile && (
            <S.PreviewButton
              variant="contained"
              size="large"
              fullWidth={true}
              onClick={onTogglePreview}
            >
              Toggle Preview
            </S.PreviewButton>
          )}
        </>
      ) : (
        <FileLoader onFileLoad={onFileLoad} />
      )}
    </DocOptionsContext.Provider>
  )
}

export default IndexTemplate
