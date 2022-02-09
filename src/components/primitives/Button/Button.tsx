import styles from './Button.module.scss';

const Button = ({ className, ...props}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} className={`${styles.btn} ${className}`}></button>
)

export default Button;
