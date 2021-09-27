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

export const AccordionCollapsedMode = Template.bind({})
AccordionCollapsedMode.args={
    titleValue:"Menu",
    collapsed:true,
    onClick:onClickCallback
}

export const AccordionUncollapsedMode = Template.bind({});
AccordionUncollapsedMode.args = {
    collapsed: false,
    titleValue:"Users",
    onClick:onClickCallback
};


