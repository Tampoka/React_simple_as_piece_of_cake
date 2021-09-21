import React from "react";
import "./../../App.css"

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {
    // console.log('Rating is rendering')
    return (
        <div className={"rating"}>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    // console.log('star is rendering')
    return <span>
        {props.selected ? <b>star </b> : "star "}
    </span>
}