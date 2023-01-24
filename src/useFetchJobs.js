import { useReducer } from 'react'

const ACTIONS = {
    MAKE_REAUEST: 'make-reauest',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

function reducer(state, action){
    
}

export default function useFetchJobs(params, page) {
    return {
        jobs: [],
        loading: false,
        error: false
    }
}