import { CHANGE_GROUP_ORDER, CHANGE_THEME, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./choiceTypes"

const initialState = {
    theme: JSON.parse(localStorage.getItem('theme')) || "LIGHT",
    display: JSON.parse(localStorage.getItem('groupOrder')) || {
        grouping: "PRIORITY",
        ordering: "PRIORITY"
    },
    loading: false,
    data: [],
    error: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_DATA_SUCCESS: 
            return {
                ...state,
                loading: false,
                data: action.payload,
                show: [],
                error: ""
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                show: [],
                error: action.payload
            }
        case CHANGE_GROUP_ORDER: 
            return {
                ...state,
                display: action.payload
            }
        case CHANGE_THEME: 

            return {
                ...state,
                theme: action.payload
            }

        default: 
            return state
    }
}

export default reducer