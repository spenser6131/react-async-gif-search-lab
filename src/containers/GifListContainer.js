import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{

  state = {
    gifData: []
  }

  handleFetch = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=NZRUWf9eX2ZJcyGgyiB5R70ny9F5rbhl&rating=g&limit=3`)
    .then(res => res.json())
    .then(json => this.setState({
      gifData: json.data.map(gif => ({url: gif.images.original.url}))
    }))
    console.log(this.state)
  }
  
  componentDidMount(){
    this.handleFetch('dolphins')
  }

  render(){
    return (
      <div>
        <GifSearch handleFetch={this.handleFetch} />
        <GifList gifData={this.state.gifData} />
      </div>
    )
  }

}

export default GifListContainer