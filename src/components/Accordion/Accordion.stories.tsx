import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {},
} as ComponentMeta<typeof Accordion>;

const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const AccordionCollapsing = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion titleValue="Menu" onClick={setCollapsed} collapsed={collapsed}/>
}

export const AccordionCollapsedMode = () => <Accordion
    titleValue={"Menu"}
    onClick={onClickCallback} collapsed={true}/>

export const AccordionNotCollapsedMode = () => <Accordion
    titleValue={"Users"}
    onClick={onClickCallback} collapsed={false} items={[{title:"John", value:3},{title:"Bob",value:45},{title:"Kate", value:7}]}/>

