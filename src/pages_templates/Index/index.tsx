import React, { useEffect, useCallback, useState, useRef } from 'react'
import { transformGUFO2HTML } from 'gufo2html'
import { DocOptions } from 'gufo2html/dist/types'
import SEO from '@layout/SEO'
import { DocOptionsContext } from '@context/doc_options'
import FileLoader from './components/FileLoader'
import DocPropsForm from './components/DocPropsForm'
import Preview from './components/Preview'
import * as S from './styled'

const IndexTemplate = () => {
  const htmlInputFileRef = useRef<HTMLInputElement>(null)
  const [docOptions, setDocOptions] = useState<DocOptions>({
    baseIRI: '',
    format: 'Turtle',
    documentationProps: {
      title: 'Ontology',
      description: [''],
      theme: {},
      customPartials: {},
    },
  })
  const [ontology, setOntology] = useState('')
  const [documentation, setDocumentation] = useState('')

  useEffect(() => {
    ;(async () => {
      if (ontology) {
        const { html } = await transformGUFO2HTML(ontology, docOptions)

        setDocumentation(html)
      }
    })()
  }, [ontology, docOptions])

  const onFileLoad = useCallback((ontology: string) => {
    setOntology(ontology)
  }, [])

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

  return (
    <DocOptionsContext.Provider value={{ docOptions, updateDocOptions }}>
      <SEO title="gUFO to HTML | OntoUML" />
      {documentation ? (
        <>
          <DocPropsForm
            onDownloadClick={onDownloadClick}
            onFileLoad={onFileLoad}
          />
          <Preview documentation={documentation} />
          <S.HTMLInputFile ref={htmlInputFileRef} />
        </>
      ) : (
        <FileLoader onFileLoad={onFileLoad} />
      )}
    </DocOptionsContext.Provider>
  )
}

export default IndexTemplate
