import { CHANGE_CHECKIN_DATE, CHANGE_CHECKOUT_DATE, CHANGE_GUEST, SUBMIT_PRICING_VARIABLES } from "./actiontype";

const initState = {
    location : false,
    checkinDate : '',
    checkOutDate : '',
    noOfGuest : 0,
}

export const pricingReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case SUBMIT_PRICING_VARIABLES:
            return {
                ...state,
                ...payload,
            }
        case CHANGE_CHECKIN_DATE:
            return {
                ...state,
                checkinDate: payload
            }
        case CHANGE_CHECKOUT_DATE:
            return {
                ...state,
                checkOutDate: payload
            }
        case CHANGE_GUEST:
            return {
                ...state,
                noOfGuest: payload
            }
    
        default:
            return state;
    }
}