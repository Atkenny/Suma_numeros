// Componente visual de la calculadora
const Calculadora = ({ 
  numero1, 
  numero2, 
  resultado, 
  onNumero1Change, 
  onNumero2Change, 
  onCalcular,
  onLimpiar 
}) => {
  return (
    <div>
      <h1>Calculadora de Suma</h1>
      <div>
        <input
          type="number"
          value={numero1}
          onChange={(e) => onNumero1Change(e.target.value)}
          placeholder="Primer número"
        />
        <span>+</span>
        <input
          type="number"
          value={numero2}
          onChange={(e) => onNumero2Change(e.target.value)}
          placeholder="Segundo número"
        />
      </div>
      <div>
        <button onClick={onCalcular}>Sumar</button>
        <button onClick={onLimpiar}>Limpiar</button>
      </div>
      {resultado !== null && <div>Resultado: {resultado}</div>}
    </div>
  )
}

export default Calculadora 