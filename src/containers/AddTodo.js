import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

let input
const AddTodo = ({ dispatch }) => {

    return (
        <div>
            <form onSubmit={e => onSubmitAction(e, dispatch)}>
                <input ref={node => input = node} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

const onSubmitAction = (e, dispatch) => {
    e.preventDefault()
    if (!input.value.trim()) {
        return
    }
    dispatch(addTodo(input.value))
    input.value = ''
}

export default connect()(AddTodo)