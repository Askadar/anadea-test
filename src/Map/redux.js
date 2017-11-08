import { taskCreated } from '../commonActions';

export const types = {
    recievedAddress: '@Map:REC_Addr'
}

export const actions = {
    getAddress(geocoder, location) {
        return (dispatch) => {
            geocoder.geocode({location}, (results, status) => {
                dispatch({ type: types.recievedAddress, results, status, location})
            })
        }
    }
}
const initialState = {
    pos: null,
    address: null
}
const Map = (state = initialState, action) => {
    switch (action.type) {
        case taskCreated:
            return initialState;
        case types.recievedAddress:
            const { results, status, location } = action;
            if (status === 'OK')
                return { ...state, address: results[0].formatted_address, pos: location}
        return state;
    default:
        return state
    }
}

export default Map
