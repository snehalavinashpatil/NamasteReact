//import ItemList from "./ItemList";
//import { useState } from "react";
import ItemList from "./ItemList";
 
const ResCategory = ({data,showItems,setShowIndex})=> {

   // const [showItems,setShowItems] = useState(false);
    const handleClick = ()=> {
        setShowIndex();
       console.log('handleClick',showItems);
        };
    //console.log(data);
    return data?.title ?  (
        <>
        <div className="text-center w-6/12 bg-grey shadow-lg p-4 flex justify-between cursor-pointer" onClick={handleClick}>
            <h1 className="font-bold">{data?.title} ({data.itemCards?.length})</h1>
            <span>v</span>
        </div>
        {showItems && <ItemList items={data.itemCards }/>  }
            </>
    ) : ''
}

export default ResCategory;