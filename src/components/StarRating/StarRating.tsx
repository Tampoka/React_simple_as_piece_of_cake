import React from "react";

const StarRating=()=>{
    return (
        <div className="starRating">
            {[...Array(5)].map((star,index)=>{
                index+=1
                return (
                    <span>&#9733;</span>
                )
            })}
        </div>
    )
}

export default StarRating