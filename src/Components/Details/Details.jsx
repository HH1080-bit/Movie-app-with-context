import React, { useContext } from 'react';
import {useParams} from 'react-router-dom'
import AllMoviesContext from '../Contexts/MoviesContext';



const Details = () => {

    
const allData = useContext(AllMoviesContext)
const {id} = useParams()


const filteredData = allData.data.filter((elem) => +elem.id === +id);
console.log(filteredData)

    return (
        <div>
            {
                filteredData.map(filtredMovie => {
                    return <ul>
                        <li> This is Movie With Id:-{filtredMovie.id}</li>
                        <li>The Movie Name is:-  {filtredMovie.original_title}</li>
                        <li>The Movie langugage is:- {filtredMovie.original_language.toUpperCase()}</li>
                        <li>The Movie Overview is:-   {filtredMovie.overview}</li>
                    </ul>
                })
            }

        </div>
    );
}

export default Details;
