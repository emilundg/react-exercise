const counter = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            console.log(state)
            return {
                count: state.count + 1
            }
        case 'DECREMENT_COUNTER':
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

export default counter