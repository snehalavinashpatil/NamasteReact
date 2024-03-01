import {useEffect,useState} from 'react';
import Shimmer from './Shimmer';
import {useParams} from 'react-router-dom';
import {MENU_URL} from '../utils/constants'
const RestraurantMenu = () => {
    const {resId} = useParams();

    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{fetchMenu()},[]);

console.log(resId,MENU_URL+resId);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        console.log(json.data);
        setResInfo(json.data);
    }

    if(resInfo === null){
        return <Shimmer/>
    }

    const {name,cuisines,costForTwoMessage} = resInfo.cards[0].card.card.info;
    const {itemCards} = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    console.log(itemCards,resInfo,'resInfo');
    return (
        <div className="restraurant-menu">
            <h1>{name}</h1>
            <h3>Menu</h3>
            <ul>
                <li>{cuisines.join(',')}</li>
            </ul>
            <h4>{costForTwoMessage}</h4>
            <div>
                <ul>
                    {itemCards.map(item => 
                    <><li key={item.card.info.id}>{item.card.info.name}</li><li key={item.card.info.id}>{item.card.info.price}</li></> )}
                </ul>
            </div>
        </div>
    );
}

export default RestraurantMenu;