import React from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {CustomSelect2, CustomSelectPropsType} from "./CustomSelect2";

export default {
    title: 'components/CustomSelect2',
    component: CustomSelect2,
    argTypes: {},
} as ComponentMeta<typeof CustomSelect2>;

const callback = action("Select value change event fired")

const Template: Story<CustomSelectPropsType> = (args) => <CustomSelect2 {...args} />;


export const SelectWithoutValue = Template.bind({})
SelectWithoutValue.args = {
    selectValue: "Please choose from...",
    onChange: callback,
    items: [{title: "Bob", value: 4}, {title: "John", value: 7}, {title: "Kate", value: 5}]
}


