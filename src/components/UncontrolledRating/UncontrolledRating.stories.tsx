import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {UncontrolledRating} from "./UncontrolledRating";


export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
    argTypes: {
    },
} as ComponentMeta<typeof UncontrolledRating>;

export const RatingChanging = () => {
    return <UncontrolledRating />
}