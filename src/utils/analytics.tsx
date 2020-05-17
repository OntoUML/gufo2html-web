import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

type Params = {
  category: string
  action: 'click' | 'search'
  label?: string
  value?: number
}

export const trackEvent = (params: Params): void => {
  try {
    trackCustomEvent(params)
  } catch (error) {
    // console.log(error)
  }
}
