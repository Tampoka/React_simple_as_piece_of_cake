import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
    argTypes: {
    },
} as ComponentMeta<typeof UncontrolledRating>;

const Template: ComponentStory<typeof UncontrolledRating> = (args) => <UncontrolledRating {...args} />;

const callback=action("rating changed inside component")

export const RatingChanging = () => {
    return <UncontrolledRating defaultValue={4} onChange={callback}/>
}


