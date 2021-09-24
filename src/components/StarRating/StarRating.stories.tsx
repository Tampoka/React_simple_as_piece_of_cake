import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {StarRating} from "./StarRating";


export default {
    title: 'StarRating',
    component: StarRating,
    argTypes: {},
} as ComponentMeta<typeof StarRating>;


export const RatingChanging = () => {
    return <StarRating/>
}
