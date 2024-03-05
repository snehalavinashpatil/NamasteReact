import Restro from "./Restro";
import Shimmer from "./Shimmer";
//import restaurantsList from '../utils/mockData';
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

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
    const onlineStatus = useOnlineStatus();
console.log(onlineStatus,'onlineStatus');
    if(onlineStatus === false){
        return <h1>You are offline.....</h1>
    }

    if(restaurantsListData.length === 0 ){
        <h1>Loading.....</h1>
        console.log('display Shimmer');
       return <Shimmer/>
    }

    return (<div className="body">
<div className="Filter flex">
    <div className="search m-4 p-4">
        <input type="text" className="search-text border-black" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
        <button className="p-3 bg-gray-600 " onClick={()=>{
            const filteredRestaurants = restaurantsListData.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurants(filteredRestaurants);
        }}>Search</button>
    </div>
    <div className="p-5 ">
    <button className="filter-btn bg-orange-200 border-red-700" onClick={()=>{
        const filteredRestaurantsList = restaurantsListData.filter((res) => res.info.avgRating > 4);
        setRestaurantsList(filteredRestaurantsList);
    }}>Top Rated Restaurants</button>
    </div>
</div>
<div className="m-4 p-4 flex-wrap flex gap-20">
    {
        filteredRestaurants.map((restaurant) => <Link to={"/restaurants/"+restaurant.info.id}><Restro className="w-[250px]" key={restaurant?.info?.id} restaurantData={restaurant}/></Link>)
    }
</div>
    </div>)
}

export default Body;