import React, {useState} from 'react'
import ConCommand from './command'
import ConResult from './result'
import Fetching from './fetching'
import List from './list'

// import Command from './command'
// import Result from './result'

const mainSecond = (hooks) =>{
    return (
        <div>Hello {hooks} </div>
    )
}

const Main = () => {
    // eslint-disable-next-line
    const {count, setCount} = useState(0)
    // eslint-disable-next-line
    const {hook, setHook} = useState('Yo, this is hook!')

    return (
        <div>
        {/*
        <Result results ={count} />
            <Command 
            inc={() => setCount(count+1)}
            dec={() => setCount(count-1)}
            />
            {mainSecond(hook)} 
        */}
            {/* <Result />
            <Command /> */}
            {mainSecond(hook)}
            <ConResult />
            <ConCommand />
            <Fetching />
            <List />
        </div>
    )
}

export default Main