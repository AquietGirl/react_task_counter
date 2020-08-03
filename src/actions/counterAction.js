export function incrementCount() {
    return {
        type: 'INCREMENT'
    }
}

export function decrementCount() {
    return {
        type: 'DECREMENT'
    }
}

export function diffCount(lastValue) {
    return {
        type: 'DIFF',
        payload: lastValue
    }
}