import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    imgToggle: true
  }
  
  render() {
    

    const {id, name, hp, sprites} = this.props.poke
    
    let toggleImage = () => {
      console.log('clicked')
      this.setState(prevState => ({
        imgToggle: !prevState.imgToggle
      }))
    }

    return (
      <Card>
        <div onClick={toggleImage}>
          <div className="image">
            <img src={(this.state.imgToggle === true) ? sprites.front : sprites.back} alt="oh no!" /> 
          </div>
          <div className="content">
            <div className="header">{name} </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
