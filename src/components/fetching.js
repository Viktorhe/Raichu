import React, {useState} from 'react'
import {fetchThunk} from '../redux/action'
import {connect} from 'react-redux'

const Fetching = ({fetchDispatch}) => {
    return(
        <div>
            <br></br>
            <button onClick={() => fetchDispatch()}>Fetch</button>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return{
        fetchDispatch: () => dispatch(fetchThunk())
    }
}
const c  = connect(null, mapDispatchToProps)(Fetching)
export default c