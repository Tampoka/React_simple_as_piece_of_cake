import React, {useState} from "react";
import "./../../App.css"

 function UncontrolledRating() {
    console.log('UncontrolledRating is rendering')
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
            {/*<button onClick={()=>setValue(1)}>1</button>*/}
            {/*<Star selected={value>1}/>*/}
            {/*<button onClick={()=>setValue(2)}>2</button>*/}
            {/*<Star selected={value>2}/>*/}
            {/*<button onClick={()=>setValue(3)}>3</button>*/}
            {/*<Star selected={value>3}/>*/}
            {/*<button onClick={()=>setValue(4)}>4</button>*/}
            {/*<Star selected={value>4}/>*/}
            {/*<button onClick={()=>setValue(5)}>5</button>*/}
        </div>
    );
}

type StarPropsType={
    selected:boolean
    onRatingChangeHandler:()=>void
}
function Star(props: StarPropsType) {
    // console.log('star is rendering')
    return props.selected ? <span ><b>star </b></span> : <span onClick={props.onRatingChangeHandler}>star </span>;
}

export default UncontrolledRating