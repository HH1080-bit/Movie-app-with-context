import Movie from '../Movie/Movie';


const Movies = () => {

    return (
        <>
        <h1 style={{textAlign:"center"}}>Movie List</h1>
        <div style={{display:'flex',flexWrap:'wrap',gap:'20px'}}>
            <Movie/>
        </div>
        </>
    )  


}

export default Movies
