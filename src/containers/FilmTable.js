import React from 'react';
import FilmList from '../components/FilmList.js'
import Title from '../components/Title.js'
import Button from '../components/button.js'

class FilmTable extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: [{
        id: 1, title: "Sausage Party", showtimes: <a href="#">showtimes</a>
      },
    {id: 2, title: "Cafe Society", showtimes: <a href="#">showtimes</a>
},
  {id: 3, title: "Morgan", showtimes: <a href="#">showtimes</a>},
{id: 4, title: 'The 9th Life of Louis Drax', showtimes: <a href="#">showtimes</a>},
{id: 5, title: "Naam Hai Akira", showtimes: <a href="#">showtimes</a>},
{id: 6, title: "Equity", showtimes: <a href="#">showtimes</a>},
{id: 7, title: "Things to Come", showtimes: <a href="#">showtimes</a>}]
    }
  }


  render(){
    return(
      <div className='film-table'>
        <Title />
        <FilmList data={this.state.data}/>
        <Button />

      </div>
    )
  };
}



export default FilmTable;
