import React, { useEffect, useCallback, useState } from 'react'
import { transformGUFO2HTML } from 'gufo2html'
import SEO from '@layout/SEO'
import FileLoader from './components/FileLoader'

const IndexTemplate = () => {
  const [ontology, setOntology] = useState('')
  const [documentation, setDocumentation] = useState('')

  useEffect(() => {
    ;(async () => {
      if (ontology) {
        const { html } = await transformGUFO2HTML(ontology, {
          format: 'Turtle',
          documentationProps: {
            title: 'Ontology',
            description: [],
            theme: {},
            customPartials: {},
          },
        })

        setDocumentation(html)
      }
    })()
  }, [ontology])

  const onFileLoad = useCallback((ontology: string) => {
    setOntology(ontology)
  }, [])

  return (
    <>
      <SEO title="gUFO to HTML | OntoUML" />
      {documentation ? (
        <div dangerouslySetInnerHTML={{ __html: documentation }} />
      ) : (
        <FileLoader onFileLoad={onFileLoad} />
      )}
    </>
  )
}

export default IndexTemplate
