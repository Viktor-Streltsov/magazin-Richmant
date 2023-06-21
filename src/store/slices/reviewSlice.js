import {createSlice} from "@reduxjs/toolkit"

const reviewSlice = createSlice({
    name: 'reviewSlice',
    initialState: {
        review: [],
    },
    reducers: {
        setReview: (state, action) => {
            state.review = action.payload
        },
    }
})

export const {
    setReview

} = reviewSlice.actions

export default reviewSlice.reducer