type Prefixes = {
  [key: string]: string
}

export const getPrefixesFromTTL = (ontology: string): Prefixes => {
  const prefixList = ontology
    .split('\n')
    .filter((l: string) => l.includes('@prefix'))
  const prefixes: Prefixes = {}

  prefixList.forEach((row: string) => {
    const prefixItem = row.replace('@prefix ', '')
    const prefix = prefixItem.substring(0, prefixItem.indexOf(':'))
    const uri = prefixItem.substring(
      prefixItem.indexOf('<') + 1,
      prefixItem.indexOf('>')
    )

    prefixes[prefix] = uri
  })

  return prefixes
}
