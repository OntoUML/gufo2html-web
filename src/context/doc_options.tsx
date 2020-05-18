import React from 'react'
import { DocOptions } from 'gufo2html/dist/types'

type DocOptionsContext = {
  docOptions: DocOptions | null
  updateDocOptions: (_docOptions: DocOptions) => void
}

export const DocOptionsContext = React.createContext<DocOptionsContext>({
  docOptions: null,
  updateDocOptions: (_docOptions: DocOptions): void => {},
})
