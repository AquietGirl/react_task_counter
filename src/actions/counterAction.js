import { INCREMENT, DECREMENT} from './actionType'
import {createAction} from '@reduxjs/toolkit'

export const addNumber = createAction(INCREMENT, () => ({
    payload: 1
}))

export const subNumber = createAction(DECREMENT, () => ({
    payload: 1
}))

export const diffNumber = createAction(DECREMENT, (diffNumber) => ({
    payload: diffNumber
}))