import { Route, Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios'

import { useState,useEffect } from 'react';
import Movies from './Components/Movies/Movies';
import Header from './Components/Header/Header';
import AddMovie from './Components/AddMovie/AddMovie';
import Details from './Components/Details/Details';
import AllMoviesContext from './Components/Contexts/MoviesContext';
import Update from './Components/UpdateMovie/Update';



function App() {
  const baseUrl = "http://localhost:3000/results"


const [data,setData] = useState([])

useEffect(() => {
   axios.get(baseUrl).then(response => {
        setData(response.data)
    }     
    )
  }, []);
      function addMovie(newMovie) {
        axios
          .post(baseUrl, {
            "id": newMovie.id,
            "original_language": newMovie.original_language,
            "original_title":newMovie.original_title,
            "overview":newMovie.overview,
            "poster_path":newMovie.poster_path
          })
          .then((response) => {
            setData([...data, response.data]);
          });
      }
      function updateMovie(id,updatedData) {
        axios
          .put(`${baseUrl}/${id}`, {
            "original_language": updatedData.original_language,
            "original_title":updatedData.original_title,
            "overview":updatedData.overview,
            "poster_path":updatedData.poster_path
          })
          .then((response) => {
            const updatedMovie = response.data;
            setData((prevData) => {
              const newData = prevData.map((movie) => {
                if (movie.id === id) {
                  return updatedMovie;
                }
                return movie;
              });
              return newData;
            });
          });
      }
const handlingDelete = (id) => {
  axios
    .delete(`${baseUrl}/${id}`)
    .then(() => {
      setData(data.filter((post) => post.id !== id));
    })     
}


const allData = {
  data:data,
  deleting: handlingDelete,
  adding: addMovie,
  updating:updateMovie
}
  
  return (
    <AllMoviesContext.Provider value={allData}>
      <Header/>
      <Routes>
        <Route path='/' Component={Movies} />
        <Route path='/add' Component={AddMovie}/>
        <Route path='/:id' Component={Details}/>
        <Route path='/:id/update' Component={Update}/>
      </Routes>
    </AllMoviesContext.Provider>
  );
}

export default App;
