import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Accordion from "./Accordion";
export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const AccordionCollapsing = () => {
    return <Accordion on={on} onClick={setOn}/>
}
export const AccordionNotCollapsed = Template.bind({});
Accordion.args = {
    on: true,
};
export const AccordionCollapsed = Template.bind({});
AccordionCollapsed.args = {
    on: false,
};
