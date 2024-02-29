import {CDN_URL} from '../utils/constants';

const Restro = (restaurantData) => {
    if (!restaurantData || !restaurantData?.restaurantData?.info) {
        return null; // or handle the case where restaurantData or info is undefined
    }
   const {cloudinaryImageId,name,cuisines,avgRating} = restaurantData?.restaurantData?.info;
    return (<div className="restro-card">
        <img className="restro-logo" src={CDN_URL+cloudinaryImageId} alt="image"/>
<h3>{name}</h3>
<h5 className="cuisines">{cuisines.join(',')}</h5>
<h6>{avgRating} stars</h6>
    </div>);
}

export default Restro;