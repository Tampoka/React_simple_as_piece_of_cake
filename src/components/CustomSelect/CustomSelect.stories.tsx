import React from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {CustomSelect, CustomSelectPropsType} from "./CustomSelect";

export default {
    title: 'components/CustomSelect',
    component: CustomSelect,
    argTypes: {},
} as ComponentMeta<typeof CustomSelect>;

const callback = action("Select value change event fired")

const Template: Story<CustomSelectPropsType> = (args) => <CustomSelect {...args} />;


export const SelectWithoutValue = Template.bind({})
SelectWithoutValue.args = {
    selectValue: "Please choose from...",
    onChange: callback,
    items: [{title: "Bob", value: 4}, {title: "John", value: 7}, {title: "Kate", value: 5}]
}


