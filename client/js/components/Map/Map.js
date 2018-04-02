import React from 'react';

class Map extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    fetch('http://127.0.0.1:3001/api/map', {method: 'GET'})
    .then(resp => console.log(resp)
    )
    .catch(e => console.log(e)
    )
  }

  render() {
    return (
    <h1> Я карта </h1>
    )
  }
}

export default Map;
