import React from 'react';

class Film extends React.Component{


  render(){
    return (
      <div className="film">

        <li className="film-title">{this.props.title} </li>
        <li className="showtimes">{this.props.children}</li>

      </div>
    )
  };
}

export default Film;
