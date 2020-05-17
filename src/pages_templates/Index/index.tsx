import React, { useEffect, useCallback, useState } from 'react'
import { getPrefixesFromTTL } from '@utils/prefixes'
import { GUFO2HTML } from 'ontouml-js'
import FileLoader from './components/FileLoader'

const IndexTemplate = () => {
  const [ontology, setOntology] = useState('')
  const [documentation, setDocumentation] = useState('')

  useEffect(() => {
    ;(async () => {
      if (ontology) {
        const gufo2html = new GUFO2HTML()
        const prefixes = getPrefixesFromTTL(ontology)

        const htmlResult = await gufo2html.generateHTML(ontology, prefixes, {
          format: 'Turtle',
          baseIRI: prefixes[''] || 'https://ontouml.org',
          documentationProps: {
            title: 'Ontology',
            description: [],
            theme: {},
            customPartials: {},
          },
        })

        setDocumentation(htmlResult)
      }
    })()
  }, [ontology])

  const onFileLoad = useCallback((ontology: string) => {
    setOntology(ontology)
  }, [])

  return documentation ? (
    <div dangerouslySetInnerHTML={{ __html: documentation }} />
  ) : (
    <FileLoader onFileLoad={onFileLoad} />
  )
}

export default IndexTemplate
