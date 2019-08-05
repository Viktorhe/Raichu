import React from 'react'
import { connect } from 'react-redux'

const Result = (props) => {
    return (
        <div>
            This is result of increment and decrement
            <br></br>
            {/* {result} */}
            {props.counts}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counts: state ? state.counts : 1
    }
}
const ConResult = connect(mapStateToProps,null) (Result)
export default ConResult