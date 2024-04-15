const RestuarantCard = ({resd}) => {
   console.log(resd); 
    return (
        <div className="res-card" style={{background:"#f0f0f0"}} >
            <img className="res-logo" alt = "res-log" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resd?.info?.cloudinaryImageId}/>
            <h3>{resd.info?.name}</h3>
            <h3>{resd.info?.areaName}</h3>
            <h3>{resd.info?.cuisines.join(' ')}</h3>
            <h3>{resd.info?.avgRatingString}</h3>
           
        </div>
    );
};
export default RestuarantCard;