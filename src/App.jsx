import { useState } from 'react'
import Calculadora from './components/Calculadora'

// Componente contenedor que maneja la lógica y estados
function App() {
  // Estados
  const [numero1, setNumero1] = useState('')
  const [numero2, setNumero2] = useState('')
  const [resultado, setResultado] = useState(null)

  // Manejadores de eventos
  const handleNumero1Change = (valor) => {
    setNumero1(valor)
  }

  const handleNumero2Change = (valor) => {
    setNumero2(valor)
  }

  const calcularSuma = () => {
    const sum = Number(numero1) + Number(numero2)
    setResultado(sum)
  }

  // Función para limpiar todos los campos
  const limpiarCampos = () => {
    setNumero1('')
    setNumero2('')
    setResultado(null)
  }

  // Renderizado del componente visual
  return (
    <Calculadora
      numero1={numero1}
      numero2={numero2}
      resultado={resultado}
      onNumero1Change={handleNumero1Change}
      onNumero2Change={handleNumero2Change}
      onCalcular={calcularSuma}
      onLimpiar={limpiarCampos}
    />
  )
}

export default App
