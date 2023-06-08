
import './mylabel.css'

export interface Props{

  /**
   * Mensaje que se muestra en el label
   */
  label?: string;
  /**
   * Tamaño con el que se muestra el label
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  allCaps?: boolean;
  color?: 'primary' |'secondary' | 'tertiary',
  fontColor?: string;
}

export const MyLabel = ({
  label = 'No Label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor
}:Props) => {

  return (
    <span 
      className={`label ${size} ${allCaps?'all-caps':''} text-${color}`}
      style={{
        color: fontColor
      }} 
    >
      {label}
    </span>
  )
}