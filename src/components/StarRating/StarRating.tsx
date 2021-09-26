import React, {useState} from "react";
import s from "./StarRating.module.css"

export const StarRating = () => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    return (
        <div className={s.starRating}>
            {[...Array(5)].map((star, index) => {
                index += 1
                return (
                    <button
                        type="button"
                        key={index}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                        style={{color: index <= (rating||hover) ? 'darkred' : 'grey'}}
                        // className={index<=(hover||rating)?'on':'off'}
                    >
                        <span>&#9733;</span>
                    </button>
                )
            })}
        </div>
    )
}



