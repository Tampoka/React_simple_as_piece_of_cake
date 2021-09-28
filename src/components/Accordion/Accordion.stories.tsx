import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";


const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

const callbackProps={
    onClick:onClickCallback
}
export const AccordionCollapsedMode = Template.bind({})
AccordionCollapsedMode.args={
    ...onClickCallback,
    titleValue:"Menu",
    collapsed:true,
}

export const AccordionOpenMode = Template.bind({});
AccordionOpenMode.args = {
    ...onClickCallback,
    collapsed: false,
    titleValue:"Users",
};

export const ModeChanging=()=>{
    const [value,setValue]=useState<boolean>(true)
    return <Accordion titleValue={"Users"} onClick={()=>setValue(!value)} collapsed={value}/>
}

