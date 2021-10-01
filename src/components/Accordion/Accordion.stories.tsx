import React, {useState} from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {},
} as ComponentMeta<typeof Accordion>;

const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

const callbackProps={
    onChange:callback,
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
    items:[{title:"Bob",value:4},{title:"John",value:7},{title:"Kate",value:5}]
};

export const ModeChanging=()=>{
    const [value,setValue]=useState<boolean>(true)
    return <Accordion titleValue={"Users"} onChange={()=>setValue(!value)} collapsed={value} onClick={callback} items={[{title:"Bob",value:4},{title:"John",value:7},{title:"Kate",value:5}]}/>
}

