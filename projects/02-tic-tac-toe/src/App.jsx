import './index.css'
import confetti from 'canvas-confetti'
import { useState } from 'react'
import { TURNS } from './constants'
import { checkEndGame, checkWinner } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { Board } from './components/Board'


function App() {

  const [board, setBoard] = useState(() => {
    const boardLocalStorage = window.localStorage.getItem('board')
    return boardLocalStorage ? JSON.parse(boardLocalStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => { 
    const turnLocalStorage = window.localStorage.getItem('turn')
    return turnLocalStorage ?? TURNS.X
   })
  // null no hay ganador, false empate
  const [winner, setWinner] = useState(null) 

  const updateBoard = (index) => {

    if(board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn;
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn)

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    const newWinner = checkWinner(newBoard)
    if(newWinner) {
      setWinner(newWinner)
      confetti()
    } else if(checkEndGame(newBoard)) { 
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  return (
    
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reiniciar juego</button>
      <Board 
        board={board}
        updateBoard={updateBoard}
        turn={turn}
      />
      <WinnerModal 
        winner={winner}
        resetGame={resetGame}/>
    </main>
  )
}

export default App
