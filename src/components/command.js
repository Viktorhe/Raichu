import React from 'react'
import { connect } from 'react-redux'
import {incAction, decAction} from '../redux/action'

const Command = ({increment, decrement, counts}) => {
    // if(counts === undefined)counts = 1
    return (
        <div>
            {/*
            <button onClick={() => dec()}>-</button>
            <button onClick={() => inc()}>=</button> 
            */}
            <button onClick={() => decrement(counts - 1)}>-</button>
            <button onClick={() => increment(counts + 1)}>+</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counts: state ? state.counts : 1
    }
}
const mapDispatchToProps = (dispatch, getState) => ({
    increment: (e) => dispatch(incAction(e)),  
    decrement: (e) => dispatch(decAction(e))
})
const ConCommand = connect(mapStateToProps,mapDispatchToProps)(Command)

export default ConCommand