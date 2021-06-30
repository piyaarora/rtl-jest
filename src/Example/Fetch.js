import React, { useState, useReducer } from 'react'
import axios from 'axios'

const initialState = {
    error: null,
    comments: null,
}

function commentsReducer(state, action) {
    switch (action.type) {
        case 'SUCCESS': {
            return {
                error: null,
                comments: action.comments,
            }
        }
        case 'ERROR': {
            return {
                error: action.error,
                comments: null,
            }
        }
        default: {
            return state
        }
    }
}

export default function Fetch({ url }) {
    const [{ error, comments }, dispatch] = useReducer(
        commentsReducer,
        initialState
    )
    const [buttonClicked, setButtonClicked] = useState(false)

    const fetchcomments = async (url) =>
        axios
            .get(url)
            .then((response) => {
                const { data } = response
                const { comments } = data
                dispatch({ type: 'SUCCESS', comments })
                setButtonClicked(true)
            })
            .catch((error) => {
                dispatch({ type: 'ERROR', error })
            })

    const buttonText = buttonClicked ? 'Ok' : 'Load comments'

    return (
        <div>
            <button onClick={() => fetchcomments(url)} disabled={buttonClicked}>
                {buttonText}
            </button>
            {comments && <h1>{comments}</h1>}
            {error && <p role="alert">Oops, failed to fetch!</p>}
        </div>
    )
}