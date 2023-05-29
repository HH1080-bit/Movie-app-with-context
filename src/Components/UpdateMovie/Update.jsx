import React, { useContext,useState } from 'react';
import AllMoviesContext from '../Contexts/MoviesContext';
import { useParams } from 'react-router-dom';


const Update = () => {
 const data = useContext(AllMoviesContext)
 const {id} = useParams()
 console.log(id)
 const [updatedData,setUpdatedData] =  useState({
    original_language:"",
    original_title:"",
    overview:"",
    poster_path:""

    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setUpdatedData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
        console.log(updatedData)
      };
      const handleSubmit = (event) => {
        event.preventDefault();

        data.updating(id,updatedData)

        setUpdatedData({
            original_language:"",
            original_title:"",
            overview:"",
            poster_path:""
        });
      };


   console.log(data)


    return (
        <form onSubmit={handleSubmit}>
        <label>Movie Name</label>
        <input type='text' name='original_title' value={updatedData.original_title} onChange={handleChange} />
        <label>Overview</label>
        <input type='text'  name='overview' value={updatedData.overview} onChange={handleChange} />
        <label>Language</label>
        <input type='text'  name='original_language' value={updatedData.original_language} onChange={handleChange}/>
        <label>Image Link</label>
        <input type='text' name='poster_path' value={updatedData.poster_path} onChange={handleChange} />
        <input type='submit' value="Update Movie"/>
    </form>
    );
}

export default Update;
