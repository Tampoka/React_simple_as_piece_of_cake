import React, {useState} from "react";
import "./../../App.css"

 function UncontrolledRating() {
    // console.log('UncontrolledRating is rendering')
     let [value,setValue]=useState(0)
     const onRatingChangeHandler=()=>{
        setValue(value+1)
     }
    return (
        <div className={"ratingUncontrolled"}>
            <Star selected={value>0} onRatingChangeHandler={onRatingChangeHandler}/>
            <Star selected={value>1} onRatingChangeHandler={onRatingChangeHandler}/>
            <Star selected={value>2} onRatingChangeHandler={onRatingChangeHandler}/>
            <Star selected={value>3} onRatingChangeHandler={onRatingChangeHandler}/>
            <Star selected={value>4} onRatingChangeHandler={onRatingChangeHandler}/>
        </div>
    );
}

type StarPropsType={
    selected:boolean
    onRatingChangeHandler:()=>void
}
function Star(props: StarPropsType) {
    // console.log('star is rendering')
    // return props.selected ? <span ><b>star </b></span> : <span>star </span>;
    return <span onClick={props.onRatingChangeHandler}>{props.selected?<b>star </b>:"star "}</span>
}

export default UncontrolledRating