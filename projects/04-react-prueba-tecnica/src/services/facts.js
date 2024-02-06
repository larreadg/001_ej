import { CAT_ENDPOINT_FACT } from '../constants'

export const getFact = async () => {
  const res = await fetch(CAT_ENDPOINT_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}
