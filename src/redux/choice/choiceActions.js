import axios from "axios"
import {FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, CHANGE_THEME, CHANGE_GROUP_ORDER} from './choiceTypes'

export const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST
    }
}

export const fetchDataSuccess = data => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}

export const fetchDataFailure = err => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: err
    }
}

export const changeTheme = data => {
    return {
        type: CHANGE_THEME,
        payload: data
    }
}

export const changeGroupOrder = data => {
    return {
        type: CHANGE_GROUP_ORDER,
        payload: data
    }
}


// fetching data
export const fetchData = () => {
    return async dispatch => {
        let API = "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers";
        axios.get(API)
            .then(response => {
                const data = response.data
                const tickets = data.tickets
                const users = data.users

                var combinedArray = tickets.map(obj1 => {
                    var matchingObj2 = users.find(obj2 => obj2.id === obj1.userId);
                    
                    // Merge the objects from array1 and array2 based on the common 'id' key
                    return { ...obj1, ...matchingObj2, id: obj1.id };
                });
               

                dispatch(fetchDataSuccess(combinedArray))
            })
            .catch(error => {
                const errMsg = error.message
                dispatch(fetchDataFailure(errMsg))
            })
    }
}
