import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Filter = ({filterRate,setFilterRate ,search}) => {

   
    const onStarClick = (nextValue) => {
        setFilterRate(nextValue);
      }
     
    return (
        <div className="active-pink-3 active-pink-4 mb-4  ">
          <div className ="searchbox"> 
             <input type="text" className="form-control rounded"
              placeholder ="search for a movie..."
               onChange={(e) =>search(e.target.value)}
             />
          </div>
          <div className ="stars">
             <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={filterRate}
          onStarClick={onStarClick}
          starColor={"yellow"} 
          emptyStarColor={"white"}
        />
        </div>
        </div>
    )
}

export default Filter
