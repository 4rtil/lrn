import {
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    TOGGLE_FAMILY_CHECKBOX,
    FILTER_ROBOTS
} from './constants.js'


const initialStateRobots = {
    isPending: false,
    robots: [],
    filteredRobots: [],
    error: ''
}

export const handleRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, filteredRobots: action.payload, isPending: false })
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        case FILTER_ROBOTS:
            return Object.assign({}, state, {
                filteredRobots: state.robots.filter(robot => {
                    console.info("filteredRobots state", state.familyCheckbox)
                    if (state.familyCheckbox) {
                        return robot.family && robot.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())
                    } else {
                        return robot.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())
                    }

                    // return robot.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())
                })
            })
        default:
            return state;
    }
}

const initialStateToggle = {
    familyCheckbox: false
}

export const toggleFamilyCheckbox = (state = initialStateToggle, action = {}) => {
    switch (action.type) {
        case TOGGLE_FAMILY_CHECKBOX:
            return Object.assign({}, state, { familyCheckbox: state.familyCheckbox ? false : true })
        default:
            return state;
    }
}

