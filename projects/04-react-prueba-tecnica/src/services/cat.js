import { CATAAS_ENDPOINT } from '../constants'

export const getCatImageURL = async (threeFirstWords) => {
  const res = await fetch(`${CATAAS_ENDPOINT}/cat/says/${threeFirstWords}?json=true`)
  const data = await res.json()
  const { _id: imgId } = data
  const url = `${CATAAS_ENDPOINT}/cat/${imgId}?size=50`
  return url
}
