import React from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {CustomSelect2, CustomSelect2PropsType} from "./CustomSelect2";

export default {
    title: 'components/CustomSelect2',
    component: CustomSelect2,
    argTypes: {},
} as ComponentMeta<typeof CustomSelect2>;

export const WithValue = () =>
    <>
    <CustomSelect2 onChange={action("Value changed")}
                                                 value={"2"}
                                                 items={[{value: "1", title: "Movie"},
                                                     {value: "2", title: "Book"},
                                                     {value: "3", title: "Walk"},]}/>
    </>
export const WithoutValue = () =>
    <>
    <CustomSelect2 onChange={action("Value changed")}
                                                 items={[{value: "1", title: "Movie"},
                                                     {value: "2", title: "Book"},
                                                     {value: "3", title: "Walk"},]}/>
    </>
