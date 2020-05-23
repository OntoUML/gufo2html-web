import React, { useEffect, useRef } from 'react'
import * as S from './styled'

type Props = {
  documentation: string
  opened: boolean
}

const Preview: React.FC<Props> = ({ documentation, opened }) => {
  const contentRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (contentRef && contentRef.current && documentation) {
      if (contentRef.current.contentWindow) {
        const document = contentRef.current.contentWindow.document
        const body = document.body
        body.innerHTML = documentation
        const links = document.getElementsByTagName('a')

        for (let i = 0; i < links.length; i += 1) {
          links[i].addEventListener('click', (e: any) => {
            e.preventDefault()
            const url = e.target.href
            const id = url.substring(url.indexOf('#') + 1, url.length)
            console.log(id)
            const el = document.getElementById(id)

            if (el) {
              el.scrollIntoView()
            } else {
              window.open(url, '_blank')
            }
          })
        }
      }
    }
  }, [contentRef, documentation])

  return <S.PreviewContainer opened={opened} ref={contentRef} />
}

export default Preview
