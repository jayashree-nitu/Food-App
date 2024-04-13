import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
// Local State Variable - Super powerful variable
const [listOfRestaurants, setListOfRestraunt] = useState(resList);
  
    return (
      <div className="body">
        <div className="filter">
          <button className="filtered-btn"
          onClick={()=>{
            const filteredList = listOfRestaurants.filter(
              (res) =>res.info.avgRating> 4
            );
            setListOfRestraunt(filteredList);
            }}
            >
            Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };
  export default Body;