import Restro from "./Restro";
import Shimmer from "./Shimmer";
//import restaurantsList from '../utils/mockData';
import { useEffect, useState } from "react";

const Body = () => {
//let restaurants = restaurantsList;
//console.log(restaurants,restaurantsList);
    const [restaurantsListData,setRestaurantsList] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);

    const [searchText,setSearchText] = useState('');

    useEffect(()=>{fetchData()},[]);

    const fetchData = async ()=> {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0522115&lng=72.900522&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const response = await data.json();
        console.log(response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        //optional chaining
        setRestaurantsList(response.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(response.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    //conditional rendering
    if(restaurantsListData.length === 0){
        <h1>Loading.....</h1>
        console.log('display Shimmer');
       return <Shimmer/>
    }

    return (<div className="body">
<div className="Filter">
    <div className="search">
        <input type="text" className="search-text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
        <button onClick={()=>{
            const filteredRestaurants = restaurantsListData.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurants(filteredRestaurants);
        }}>Search</button>
    </div>
    <button className="filter-btn" onClick={()=>{
        const filteredRestaurantsList = restaurantsListData.filter((res) => res.info.avgRating > 4);
        setRestaurantsList(filteredRestaurantsList);
    }}>Top Rated Restaurants</button>
</div>
<div className="menu">
    {
        filteredRestaurants.map((restaurant) => <Restro key={restaurant?.info?.id} restaurantData={restaurant}/>)
    }
</div>
    </div>)
}

export default Body;