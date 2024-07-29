import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState(0)
  const [valorPri, setValorPri] = useState()
  const [valorSeg, setValorSeg] = useState()

  const somar = () => {
    let soma = Number(valorPri) + Number(valorSeg);
    setResult(soma)
  }
  const subtrair = () => {
    let subtracao = Number(valorPri) - Number(valorSeg);
    setResult(subtracao)
  }
  const multiplicar = () => {
    let multiplicacao = Number(valorPri) * Number(valorSeg);
    setResult(multiplicacao)
  }
  const dividir = () => {
    let divisao = Number(valorPri) / Number(valorSeg);
    setResult(divisao)
  }
  return (
    <>
      <div>
      </div>
      <h1>Calculadora React</h1>
      <input type='number' placeholder='Valor 1' value={valorPri} onChange={(e) => setValorPri(e.target.value)}></input>&nbsp;&nbsp;&nbsp;&nbsp;
      <input type='number' placeholder='Valor 2' value={valorSeg} onChange={(e) => setValorSeg(e.target.value)}></input><br />

      <button onClick={somar}>Somar</button>
      <button onClick={subtrair}>Subtrair</button>
      <button onClick={multiplicar}>Multiplicar</button>
      <button onClick={dividir}>Dividir</button>
      
      <div className='result' id='result'>
        Resultado é {result}
      </div>
    </>
  )
}

export default App
