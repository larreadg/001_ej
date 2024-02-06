import { useEffect, useState } from 'react'
import { getCatImageURL } from '../services/cat'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  const [errorFact, setErrorFact] = useState(null)

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    getCatImageURL(threeFirstWords).then(setImageUrl).catch(error => {
      const { message } = error
      setErrorFact(message)
    })
  }, [fact])

  return { imageUrl, errorFact }
}
