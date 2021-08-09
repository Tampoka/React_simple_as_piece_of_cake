import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import OnOff2 from "./components/OnOff2/OnOff2";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
    return (
        <div>
            <PageTitle title={"This as App component"}/>
            <PageTitle title={"My friends"}/>
            <OnOff isOn={true}/>
            <OnOff isOn={false}/>
            <OnOff2 />
            <OnOff2 />
            <OnOff2 />
            <Rating value={3}/>
            <Accordion titleValue={"What to eat"} collapsed={true}/>
            <Accordion titleValue={"What to read"} collapsed={false}/>
            <UncontrolledAccordion titleValue={"Can you see me?"}/>
            <UncontrolledAccordion titleValue={"Click me!!!"}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
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
