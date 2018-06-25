import React from 'react';

class Film extends React.Component{


  render(){
    return (
      <div className="film">

        <li className="film-title">{this.props.title} {this.props.showtimes}</li>

      </div>
    )
  };
}

export default Film;
