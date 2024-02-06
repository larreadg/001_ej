import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import './App.css'

export function App () {
  const { fact, errorFact, handleFacts } = useCatFact()
  const { imageUrl, errorFact: errorCatImage } = useCatImage({ fact })

  const handleClick = async () => {
    handleFacts()
  }

  return (
    <main className='cat-main'>
      <h1 className='cat-title'>App de gatos</h1>
      <button className='cat-refreshButton' onClick={handleClick}>Refresh cat</button>
      {errorFact && <p className='cat-errorFact'>{errorFact}</p>}
      {errorCatImage && <p className='cat-errorFact'>{errorCatImage}</p>}
      {fact && <p className='cat-fact'>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='Cat' className='cat-img' />}
    </main>
  )
}
