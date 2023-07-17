import React from 'react';
import styles from '../../../styles/ListOf.module.css'


const ColorComponent = () => {

  const getColorAtPosition = (position: number): string => {
    const colors = ['Rojo', 'Verde', 'Azul']
    const index = position % colors.length
    return colors[index]
  }

  const position = 1520
  const color = getColorAtPosition(position)

  return (
    <div>
      <div className={styles.no_data_window}>
        <p>Como ves, no obtuviste todos los datos.</p>
        <p> No te preocupes,¡en un futuro estarán disponibles!</p>
        <p>Para compensar, he calculado el color que habría en la posición número:</p>
{/*         <input type="number" value={position} />
 */}        <p>{position}</p>
      </div>
      <p className={styles.section}>El color en la posición {position} es </p>
      <p className={styles.solution}>{color}</p>
    </div>
  )
}

export default ColorComponent;