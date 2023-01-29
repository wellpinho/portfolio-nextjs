import styles from './input.module.scss'

interface Input {
  type: string
  placeholder: string
  name: string
}
const Input = ({ type, placeholder, name }: Input) => {
  return (
    <input type={type} className={styles.form_input} placeholder={placeholder} name={name} required />
  )
}

export { Input }