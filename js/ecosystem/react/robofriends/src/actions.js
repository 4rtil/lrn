import {
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    TOGGLE_FAMILY_CHECKBOX,
    FILTER_ROBOTS
} from './constants.js'

export const toggleFamilyCheckbox = (active) => {
    console.info("toggleFamilyCheckbox action", active);
    return {
        type: TOGGLE_FAMILY_CHECKBOX,
        payload: active
    }
}


export const handleRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING })
    fetch('http://localhost:8000/')
        .then(response => { return response.json() })
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        // .catch(error => { return console.log(error) })
        // .then(users => { setRobots(users) })
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
}

export const filterRobots = (query) => {
    // console.log("action filterRobots triggered");
    return {
        type: FILTER_ROBOTS,
        payload: query
    }
}