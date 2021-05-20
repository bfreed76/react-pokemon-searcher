import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  //todo hook up search function!!
  
state = {
  pokemon: [],
  search: ""
}

componentDidMount() {
  this.fetchPoke()
}

fetchPoke = () => {
  fetch('http://localhost:3002/pokemon')  //! get into the array
  .then(res => res.json())        //! always use res.json()
  .then(res =>
    this.setState({pokemon: res}) //! assign objects to array
  )
}

handleChange = (e) => {
  this.setState({
    search: e.target.value
  })
}

handleSubmit = (e) => {
  let newPokeObj = {
    id: "",
    name: e.target[0].value,
    hp: e.target[1].value,
    sprites: {
      front: e.target[2].value,
      back: e.target[3].value
      }
    }
  fetch('http://localhost:3002/pokemon', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPokeObj)
    }
  ) 
  window.location.reload()
}

  render() {
    return (
      <Container >
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
        <br />
        <Search handleChange={this.handleChange}/>
        <br />
        <PokemonCollection allPokemon={this.state.pokemon} search={this.state.search}/>
      </Container>
    )
  }
}

export default PokemonPage
