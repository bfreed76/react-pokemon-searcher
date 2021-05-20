import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  filterAllPokemon = (allPokemon, searchTerms) => {
    // console.log(allPokemon, searchTerms)
  }


  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.filterAllPokemon(this.props.allPokemon)}
        {this.props.allPokemon.map(poke => <PokemonCard poke={poke} id={poke.id}/>)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
