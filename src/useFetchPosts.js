import { useReducer, useEffect } from 'react';
import axios from 'axios';

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/posts'

function reducer(state, action){
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, posts: []}
        case ACTIONS.GET_DATA:
            console.log(action.payload)
            return { ...state, loading: false, posts: action.payload.jobs}
        case ACTIONS.ERROR:
            return { ...state, loading: false, posts: action.payload.error, posts: []}
        default:
            return state
    }
}

export default function useFetchJobs(params, page) {
    const [state, dispatch] = useReducer(reducer, {posts: [], loading: true})

    useEffect(()=> {
        const cancelToken = axios.CancelToken.source()
        dispatch({ type: ACTIONS.MAKE_REQUEST })
        axios.get(BASE_URL, {
            params: { markdown: true, page: page, ...params }
        }).then(res =>{
            dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } })
        }).catch(e => {
            if (axios.isCancel(e)) return
            dispatch({ type: ACTIONS.ERROR, payload: { error: e } })
        })

        return () => {
            cancelToken.cancel()
        }
    }, [params, page])

    return state
}