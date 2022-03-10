import { useState, Fragment } from 'react'
import {
  checkWinner,
  checkMainWinner,
  checkText,
} from '../helpers/checkMultipleIF'

export default function Home() {
  const [currentIcon, setCurrentIcon] = useState(true)
  const simpleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [mainWinner, setMainWinner] = useState('')
  const tictactoeHandler = (e, i) => {
    if (e.target.innerHTML == 'X' || e.target.innerHTML == 'O') {
      return
    }
    e.target.innerHTML = currentIcon ? 'X' : 'O'
    setCurrentIcon((p) => !p)
    const Xwinner = checkWinner('X', i)
    const Ywinner = checkWinner('O', i)
    const currentCellWinner = Xwinner || Ywinner
    if (currentCellWinner) {
      document.getElementById(`${i}-0`).innerHTML = `${currentCellWinner}`
      document.getElementById(`${i}-0`).style.height = '90%'
    } else {
      const a = []
      for (let q = 1; q < 10; q++) {
        if (checkText(i, q) == 'X' || checkText(i, q) == 'O') {
          a.push(checkText(i, q))
        }
      }
      if (a.length == 9) {
        console.log('draw')
        document.getElementById(`${i}-0`).innerHTML = `Draw`
        setTimeout(() => {
          document.getElementById(`${i}-0`).innerHTML = ''
          for (let w = 1; w < 10; w++) {
            document.getElementById(`${i}-${w}`).innerText = ''
          }
        }, 1000)
      }
    }

    if (checkMainWinner('X')) {
      setMainWinner('X')
      console.log('X wins')
      alert('X Wins')
      document.getElementById('gameScreen').style.pointerEvents = 'none'
    } else if (checkMainWinner('O')) {
      setMainWinner('O')
      console.log('O wins')
      alert('O Wins')
      document.getElementById('gameScreen').style.pointerEvents = 'none'
    }
  }
  return (
    <div className='p-1 h-screen relative flex justify-center items-center'>
      <div
        id='gameScreen'
        className='w-[25rem] h-[25rem] grid grid-cols-3 grid-rows-3 gap-1'
      >
        {simpleArray.map((i) => (
          <div
            key={i}
            id={i}
            className='bg-gray-800 grid grid-cols-3 grid-rows-3 gap-1 p-2 relative'
          >
            {simpleArray.map((j) => (
              <div
                key={j}
                id={`${i}-${j}`}
                className='bg-gray-300 text-3xl flex justify-center items-center'
                onClick={(e) => tictactoeHandler(e, i)}
              ></div>
            ))}
            <p
              id={`${i}-0`}
              className='absolute-center text-[5rem] bg-gray-300 w-[90%]  text-center'
            ></p>
          </div>
        ))}
      </div>
    </div>
  )
}
