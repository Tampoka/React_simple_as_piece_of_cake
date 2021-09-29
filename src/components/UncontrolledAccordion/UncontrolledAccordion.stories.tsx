import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'components/UncontrolledAccordion',
    component: UncontrolledAccordion,
    argTypes: {},
} as ComponentMeta<typeof UncontrolledAccordion>;


export const AccordionCollapsing = () => {
    return <UncontrolledAccordion titleValue="Users" />
}
