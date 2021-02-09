import React from 'react'

class GifList extends React.Component{

  makeGifs = (gifs) => {
    return gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif" />)
  }

  render(){
    return (
      <ul>
        {this.makeGifs(this.props.gifData)}
      </ul>
    ) 
  }

}

export default GifList