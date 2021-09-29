import React, {useState} from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {},
} as ComponentMeta<typeof Accordion>;

const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

const callbackProps={
    onClick:onClickCallback
}
export const AccordionCollapsedMode = Template.bind({})
AccordionCollapsedMode.args={
    ...callbackProps,
    titleValue:"Menu",
    collapsed:true,
}

export const AccordionOpenMode = Template.bind({});
AccordionOpenMode.args = {
    ...callbackProps,
    collapsed: false,
    titleValue:"Users",
};

export const ModeChanging=()=>{
    const [value,setValue]=useState<boolean>(true)
    return <Accordion titleValue={"Users"} onClick={()=>setValue(!value)} collapsed={value}/>
}

