import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input type="text" onChange={props.handleChange} className="prompt"/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
