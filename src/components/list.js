import React from 'react'
import { connect } from 'react-redux'

const Lists = ({users}) => {
    let maps = users
    if(maps === undefined) maps = []
    // console.log(maps)
    if(maps.length > 0){
        return (
            <div>
                This is result of user
                <br></br>
                {maps.map((item, idx) => {
                        return (
                            <div key={idx} className='list-card'>
                                <hr/>
                                <div>{item.id}</div>
                                <div>{item.name}</div>
                                <div>{item.username}</div>
                                <div>{item.email}</div>
                            </div>       
                        )
                    })}
            </div>
        )
    }
    else{
        return (
            <div>
                This is result of user
                <br></br>
                <hr />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counts : state ? state.counts : 1,
        users: state ? state.users : []
    }
}
const ConResult = connect(mapStateToProps,null) (Lists)
export default ConResult
    
