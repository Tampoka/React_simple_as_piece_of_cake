import React, {useState} from "react";
import s from "./StarRating.module.css"

const StarRating = () => {
    const [rating, setRating] = useState(0)
    return (
        <div className={s.starRating}>
            {[...Array(5)].map((star, index) => {
                index += 1
                return (
                    <button type="button"
                            key={index}
                            onClick={() => setRating(index)}
                            style={{color: index <= rating ? 'darkred' : 'grey'}}>
                        <span>&#9733;</span>
                    </button>
                )
            })}
        </div>
    )
}

export default StarRating

