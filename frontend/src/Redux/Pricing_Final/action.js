import { CHANGE_CHECKIN_DATE, CHANGE_CHECKOUT_DATE, CHANGE_GUEST, SUBMIT_PRICING_VARIABLES } from "./actiontype"

export const setPriceVariables = (payload) => {
    return {
        type : SUBMIT_PRICING_VARIABLES,
        payload
    }
}
export const setCheckin = (payload) => {
    return {
        type : CHANGE_CHECKIN_DATE,
        payload
    }
}
export const setCheckout = (payload) => {
    return {
        type : CHANGE_CHECKOUT_DATE,
        payload
    }
}
export const setGuest = (payload) => {
    return {
        type : CHANGE_GUEST,
        payload
    }
}