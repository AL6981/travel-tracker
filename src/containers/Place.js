import React from 'react';

const Place = props => {
  return(
    <div className="medium-4 medium-centered columns text-left">
        <li className={props.className} onClick={props.crossOut}> {props.name}</li>
    </div>
  )
}

export default Place;
