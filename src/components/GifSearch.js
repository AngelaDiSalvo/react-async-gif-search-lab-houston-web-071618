import React from 'react'

  class GifSearch extends React.Component {
    constructor() {
      super()
      this.state = {
        input: ""
      }
    }

    handleInputChange = (e) => {
      this.setState({
        input: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault()
      return this.props.submitHandler(this.state.input)
    }

    render() {
      return (
        <div className='GifSearch'>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleSubmit}>Search</button>
        </div>
      )
    }
  }

export default GifSearch;
