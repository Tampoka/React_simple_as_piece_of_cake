import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';
import {OnOff2Uncontrolled} from "./OnOff2Uncontrolled";

export default {
    title: 'OnOff2Uncontrolled',
    component: OnOff2Uncontrolled,
    argTypes: {},
} as ComponentMeta<typeof OnOff2Uncontrolled>;

export const OnOffSwitching = () => {
    const [on, setOn] = useState<boolean>(false)
    return <OnOff2Uncontrolled  onChange={setOn} defaultOn={true}/>
}
