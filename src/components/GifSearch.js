import React from 'react'

class GifSearch extends React.Component{

  state = {
    input: ''
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleFetch(this.state.input)
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="query" value={this.state.input} onChange={this.handleChange} />
        <input type="submit" value="Find Gifs" />
      </form>
    )
  }

}

export default GifSearch