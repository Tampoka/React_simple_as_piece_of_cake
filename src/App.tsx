import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import OnOff2 from "./components/OnOff2/OnOff2";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import StarRating from "./components/StarRating/StarRating";

function App() {
    let[ratingValue,setRatingValue]=useState<RatingValueType>(0)
    return (
        <div className={"App"}>
            <PageTitle title={"This as App component"}/>
            <PageTitle title={"My friends"}/>
            <OnOff/>
            <OnOff/>
            <OnOff2/>
            <OnOff2/>
            <OnOff2/>
            {/*<Accordion titleValue={"What to eat"}/>*/}
            {/*<Accordion titleValue={"What to read"} collapsed={false}/>*/}
            <UncontrolledAccordion titleValue={"Can you see me?"}/>
            {/*<UncontrolledAccordion titleValue={"Click me!!!"}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <StarRating/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;

