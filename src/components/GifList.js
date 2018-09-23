import React from 'react'

  class GifList extends React.Component {
    constructor() {
      super()
      this.state = {

      }
    }

    render() {
      return (
        <div className='GifList'>
          <ul>
            <li><img src={this.props.gifData[0]} /></li>
            <li><img src={this.props.gifData[1]} /></li>
            <li><img src={this.props.gifData[2]} /></li>

          </ul>
        </div>
      )
    }
  }

export default GifList;
