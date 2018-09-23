import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

  class GifListContainer extends React.Component {
    constructor() {
      super()
      this.state = {
        threeGifs: []
      }
    }

    handleSubmit = (input) => {
      let url = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g`
      fetch(url)
        .then(r => r.json())
        .then(this.storeTheFirstThree)
    }

    storeTheFirstThree = (data) => {
      const urlArray = data.data.map(data => {
        return data.images.original.url
      })
      const threeOnily = [urlArray[0], urlArray[1], urlArray[2]]
      this.setState({
        threeGifs: threeOnily
      })
    }

    render() {
      return (
        <div className='GifListContainer'>
          <GifList gifData={this.state.threeGifs} />
          <GifSearch submitHandler={this.handleSubmit} />
        </div>
      )
    }
  }

export default GifListContainer;
