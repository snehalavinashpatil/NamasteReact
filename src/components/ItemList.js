import { CDN_URL } from "../utils/constants";

const ItemList = ({items})=> {
    console.log(items,'items',items?.length);
    // return items?.length ? (
    //     <div>
    //     {
    //     items.map((item) => {
    //         <><span>test</span><span key={item.card.info.id}>{item.card.info.name}test</span></>
    //     })
    //     }</div>
    // ) : 'test'
    return items?.length ?  (<div className="w-6/12 flex flex-col bg-slate-100">
           {
        items.map((item) => 
            <>
            <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left"><div className="flex justify-between flex-row">
                <div className="w-9/12"><span className="text-left">{item.card.info.name}</span><span>{item.card.info.price ? item.card.info.price : item.card.info.defaultPrice}</span></div>
                <div className="w-3/12">
                <button className="bg-white shadow-lg rounded-lg absolute text-sm p-2">Add +</button>
                <img src={CDN_URL+item.card.info.imageId} className=" h-36"></img>
                </div>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
            </div>
            </>
        )
        }
    </div>) : ''
}

export default ItemList;