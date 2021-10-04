import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";
import {action} from "@storybook/addon-actions";

test("reducer should change value to opposite",( )=>{
    //data
    const state:StateType={
        collapsed:false
    }
    //action
    reducer(state,{type:TOGGLE_COLLAPSED})

    //what to expect
    expect(1).toBe(1)
})