type ActionType = {
    type: string
}
export const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"
export const reducer = (state: boolean, action: ActionType) => {
    /*    console.log("reducer started ")
        console.log(state)
        console.log(action)
        console.log("reducer ended")*/
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return !state
        default:
            throw new Error("Bad action type")
    }
    return state
}