import React, {useState} from 'react';
import {ComponentMeta, ComponentStory, Story} from '@storybook/react';
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

export const AccordionCollapsing = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion titleValue="Menu" onClick={setCollapsed} collapsed={collapsed}/>
}
export const AccordionNotCollapsed = Template.bind({});
AccordionNotCollapsed.args = {
    collapsed: false,
};
export const AccordionCollapsedMode = () => <Accordion
    titleValue={"Menu"}
    onClick={onClickCallback} collapsed={true}/>

