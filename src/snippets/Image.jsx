

const Image = ({ src, className="", alt="", ...props }) => {
  return (
    <img src={src} className={className} alt={alt} {...props} />
  )
}

export default Image
