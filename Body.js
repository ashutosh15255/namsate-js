 import RestuarantCard from "./RestuarantCard";
 import {useState} from "react";
 import { useEffect } from "react";
 import resList from "../utils/mockdata";

 const Body = ()=>{
    const [ListofRestuarant,SetListofRestuarant] = useState();
   
    useEffect(()=>{fetchData(),[]});
    const fetchData = async() =>{
       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=83667&tags=layout_CCS_Sandwiches&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

       const json = await data.json();
       SetListofRestuarant(json?.data?.cards);
       console.log(ListofRestuarant);
    //    console.log(json);

     <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const filteredList = ListofRestuarant.filter(
                    (res) => res?.info?.avgRating > 4
                );
                SetListofRestuarant({filteredList});
                            }}> Top Rated Resturant</button>
        </div>
     <div className="res-container">
     {
        
        ListofRestuarant && ListofRestuarant.slice(3).map((resd) => (
     <RestuarantCard resData={resd?.card?.card?.info} />
    
))}
        </div>
     </div>
 }}
 export default Body;