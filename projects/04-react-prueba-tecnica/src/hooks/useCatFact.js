import { useEffect, useState } from 'react'
import { getFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()
  const [errorFact, setErrorFact] = useState(null)

  const handleFacts = async () => {
    try {
      const newFact = await getFact()
      setFact(newFact)
    } catch (error) {
      const { message } = error
      setErrorFact(message)
    }
  }

  useEffect(() => {
    handleFacts()
  }, [])

  return { fact, errorFact, handleFacts }
}
