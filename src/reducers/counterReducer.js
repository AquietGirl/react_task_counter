import {INCREMENT, DECREMENT} from '../actions/actionType'
import {createReducer} from "@reduxjs/toolkit"

const defaultState = 0;
export default createReducer(defaultState, {
  [INCREMENT]: (state, action) => (state + action.payload),
  [DECREMENT]: (state, action) => (state - action.payload)
})
