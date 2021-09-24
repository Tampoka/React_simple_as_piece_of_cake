import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {UncontrolledRating} from "./UncontrolledRating";
import {Rating} from "../Rating/Rating";


export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
    argTypes: {
    },
} as ComponentMeta<typeof UncontrolledRating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const RatingChanging = () => {
    return <UncontrolledRating defaultValue={4}/>
}


export const EmptyRating = Template.bind({});
EmptyRating.args = {
    value: 0,
};
export const Rating1 = Template.bind({});
Rating1.args = {
    value: 1,
};
export const Rating2 = Template.bind({});
Rating2.args = {
    value: 2,
};
export const Rating3 = Template.bind({});
Rating3.args = {
    value: 3,
};
export const Rating4 = Template.bind({});
Rating4.args = {
    value: 4,
};
export const Rating5 = Template.bind({});
Rating5.args = {
    value: 5,
};
