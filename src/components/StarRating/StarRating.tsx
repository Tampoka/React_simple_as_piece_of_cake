import React from "react";

const StarRating=()=>{
    return (
        <div className="starRating">
            {[...Array(5)].map((star)=>{
                return (
                    <span>&#9733;</span>
                )
            })}
        </div>
    )
}

export default StarRating