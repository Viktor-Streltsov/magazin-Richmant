import {createSlice} from "@reduxjs/toolkit"

const allSlice = createSlice({
    name: 'allSlice',
    initialState: {
        review: [],
        pay: [],
        products: {},
        pays: {},
    },
    reducers: {
        setReview: (state, action) => {
            state.review = action.payload
        },
        setPay: (state, action) => {
            state.pay = action.payload
        },
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setPays: (state, action) => {
            state.pays = action.payload
        },
    }
})

export const {
    setReview, setPay, setProducts, setPays

} = allSlice.actions

export default allSlice.reducer