

const Button = ({ type='button', onClick, className="", children="Button", ...props}) => {
  return (
    <button
        type={type}
        onClick={onClick}
        className={className}
        {...props}
    >
        {children}
    </button>
  )
}

export default Button
