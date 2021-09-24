import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {OnOff2} from "./OnOff2";

export default {
    title: 'OnOff2',
    component: OnOff2,
    argTypes: {},
} as ComponentMeta<typeof OnOff2>;

const Template: ComponentStory<typeof OnOff2> = (args) => <OnOff2 {...args} />;

export const OnOffSwitching = () => {
    const [on, setOn] = useState<boolean>(false)
    return <OnOff2 on={on} onClick={setOn}/>
}
export const OnMode = Template.bind({});
OnMode.args = {
    on: true,
};
export const OffMode = Template.bind({});
OffMode.args = {
    on: false,
};
