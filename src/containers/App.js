import React, { Component } from 'react';
import data from '../constants/data';
import styles from '../stylesheets/index.css';
import Place from './Place';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visitedIds: [ ]
    }
    this.crossOut=this.crossOut.bind(this)
  }

  crossOut(id) {
    if (this.state.visitedIds.includes(id)){
      let newestArray = this.state.visitedIds.filter(visitedId => visitedId !== id)
      this.setState({visitedIds: newestArray})
    } else {
      let newArray = this.state.visitedIds.concat(id)
      this.setState({visitedIds: newArray})
    }
  }

  render() {
    let visitedStateIds = this.state.visitedIds
    let placesArray = this.props.data.places.map(place => {
      let className = ''
      if (visitedStateIds.includes(place.id)) {
        className = 'visited'
      }
      let crossOut = () => { this.crossOut(place.id) }
      return(
        <Place
          key={place.id}
          id={place.id}
          name={place.name}
          crossOut={crossOut}
          className={className}
        />
      )
    })

    return (
      <div id="wishlist-div">
        <div className="row">
          <div className="small-12 small-centered columns text-center">
            <h3>Wanderlust Wishlist</h3>
          </div>
          <div id='list' className="medium-6 medium-centered columns text-left">
            <ul>
            {placesArray}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
