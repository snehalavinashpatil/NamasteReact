import {CDN_URL} from '../utils/constants';

const Restro = (restaurantData) => {
    if (!restaurantData || !restaurantData?.restaurantData?.info) {
        return null; // or handle the case where restaurantData or info is undefined
    }
   const {cloudinaryImageId,name,cuisines,avgRating} = restaurantData?.restaurantData?.info;
    return (<div className="restro-card w-[200px] bg-green-300 hover:shadow-xl">
        <img className="restro-logo" src={CDN_URL+cloudinaryImageId} alt="image"/>
<h3 className='font-bold'>{name}</h3>
<h5 className="cuisines">{cuisines.join(',')}</h5>
<h6>{avgRating} stars</h6>
    </div>);
}

//Higher order componet

export const withVegLabal = (Restro) =>{
    return (restaurantData) => {
        return (
            <div>
                <label className='absolute bg-black text-white m-2 p-2 rounded-lg'>Veg</label>
                <Restro {...restaurantData}/>
            </div>
        )
    }
}

export default Restro;