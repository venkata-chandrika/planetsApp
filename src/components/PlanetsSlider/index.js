// Write your code here
import Slider from 'react-slick'

// import Settings from 'fast-glob/out/settings'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  //   console.log(planetsList)
  return (
    <div className="slider-container" data-testid="planets">
      <h1 className="planets">PLANETS</h1>
      <Slider>
        {planetsList.map(each => (
          <PlanetItem key={each.id} planetsItemDetails={each} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
