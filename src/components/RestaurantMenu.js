import {useEffect,useState} from 'react';
import Shimmer from './Shimmer';
import {useParams} from 'react-router-dom';
import ResCategory from './ResCategory';

import useRestraurantMenu from '../utils/useRestraurantMenu';
function RestraurantMenu() {
    const { resId } = useParams();
    const [showIndex,setShowIndex] = useState(2);

    const dummy = "dummy data";

    //const [resInfo,setResInfo] = useState(null);
    //useEffect(() => { fetchMenu(); }, []);

    //console.log(resId, MENU_URL + resId);

    const resInfo = useRestraurantMenu(resId);

    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = resInfo.cards[0].card.card.info;
    //const { itemCards } = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    //console.log(resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards, 'resInfo');

 

    const categories = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((item) => item.card.card.type === "CATEGORY_TYPE_RECOMMENDED" )[0].card.card.itemCards;
   // console.log(categories,'categories');
    return (
        <div className="restraurant-menu">
            <h1 className='font-bold text-center text-2xl'>{name}</h1>
            <h3 className='text-center'>Menu</h3>
            <ul className='font-bold text-lg text-center'>
                <li>{cuisines.join(',')}</li>
            </ul>
            <h4 className='text-center'>{costForTwoMessage}</h4>
            <div className='text-center justify-center flex flex-col items-center' key={resId}>
                {/* <ul>
                    {itemCards.map(item => <><li key={item.card.info.id}>{item.card.info.name}</li><li key={item.card.info.id}>{item.card.info.price}</li></>)}
                </ul> */}
                
                {
                   resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.map((category,index)=>( 
                  <ResCategory key={category.card.card.title} data={category.card.card} showItems={index === showIndex ? true : false} setShowIndex={()=>setShowIndex(index)}/>))
                }
            </div>
        </div>
    );
}

export default RestraurantMenu;