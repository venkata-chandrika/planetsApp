// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetsItemDetails} = props
  const {name, imageUrl, description} = planetsItemDetails
  return (
    <div className="list-item">
      <img src={imageUrl} alt={`planet ${name}`} className="img" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
