import { TURNS } from '../constants'
import { Square } from './Square'

export function Board ({ board, updateBoard, turn }) {
  return (
    <>
      <section className='game'>
        {
                    board.map((_, index) => {
                      return (
                        <Square
                          key={index}
                          index={index}
                          updateBoard={updateBoard}
                        >
                          {board[index]}
                        </Square>
                      )
                    })
                }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </>
  )
}
