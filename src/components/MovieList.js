import React ,{useState} from 'react'

import MovieCard from './MovieCard';
import AddModal from './AddModal';

const MovieList = ({movies ,addNewMovie}) => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
         <button onClick={handleShow} className="btn btn-warning btn-search">Add a new movie</button>
         <AddModal handleClose={handleClose} show={show} addNewMovie ={addNewMovie}/>
        <div className="movie-list" >
            {movies.map((el , index) =><MovieCard  movie ={el} key ={index}>
               </MovieCard>

               )} 
        </div>
        </div>
    )
}

export default MovieList
