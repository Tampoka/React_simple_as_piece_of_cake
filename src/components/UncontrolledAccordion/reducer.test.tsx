import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test("reducer should change value to true",( )=>{
    //data
    const state:StateType={
        collapsed:false
    }
    //action
   const newState=reducer(state,{type:TOGGLE_COLLAPSED})

    //what to expect
    expect(newState.collapsed).toBe(true)
})

test("reducer should change value to false",( )=>{
    //data
    const state:StateType={
        collapsed:true
    }
    //action
    const newState=reducer(state,{type:TOGGLE_COLLAPSED})

    //what to expect
    expect(newState.collapsed).toBe(false)
})

test("reducer should throw error",( )=>{
    //data
    const state:StateType={
        collapsed:true
    }

    //what to expect
    expect(()=>{
        reducer(state,{type:"FakeType"})
    }).toThrowError()
})