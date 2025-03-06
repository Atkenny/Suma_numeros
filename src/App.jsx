import { useState } from 'react'
import './App.css'

function App() {
  const [numero1, setNumero1] = useState('')
  const [numero2, setNumero2] = useState('')
  const [resultado, setResultado] = useState(null)

  const calcularSuma = () => {
    const sum = Number(numero1) + Number(numero2)
    setResultado(sum)
  }

  return (
    <div className="calculadora-container">
      <h1>Calculadora de Suma</h1>
      <div className="input-container">
        <input
          type="number"
          value={numero1}
          onChange={(e) => setNumero1(e.target.value)}
          placeholder="Ingrese el primer número"
        />
        <span className="operador">+</span>
        <input
          type="number"
          value={numero2}
          onChange={(e) => setNumero2(e.target.value)}
          placeholder="Ingrese el segundo número"
        />
      </div>
      <button onClick={calcularSuma}>Calcular Suma</button>
      {resultado !== null && (
        <div className="resultado">
          El resultado es: {resultado}
        </div>
      )}
    </div>
  )
}

export default App
