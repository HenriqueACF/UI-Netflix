import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb';

//components
import MovieRow from './components/MovieRow';

//css
import './App.css';

export default () =>{

  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async ()=>{
      //pegando a lista Total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

    }
    loadAll()
  }, []);

  return(
    <div className="page">
      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow  key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
}