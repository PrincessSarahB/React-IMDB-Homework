import React from 'react';
import Film from '../components/Film.js'

class FilmList extends React.Component {


  render(){
    const filmNodes = this.props.data.map(film => {
      return(<Film title={film.title} key={film.id} showtimes={film.showtimes}> </Film>
        )
    })
    return(
      <div className='film-list'>
      {filmNodes}
        <a href="#">See More Opening This Week</a>
      </div>
    )
  };
}



export default FilmList;
