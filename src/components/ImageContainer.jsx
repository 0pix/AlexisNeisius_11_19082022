import './ImageContainer.css'

const ImageContainer = ({ image, height, children, opacity }) => {
  console.log(opacity)
  return (
    <div style={{ height: height }} className="ImageContainer">
      <div style={{ opacity: opacity }} className="ImageContainer-black"></div>
      <div className="content">{children}</div>
      <img src={image} alt="" />
    </div>
  )
}
export default ImageContainer
