import React from 'react';
import {Provider} from 'react-redux'
import Store from './redux/store'

// import logo from './logo.svg';
import './App.css';
import Main from './components/main'

const App = () => {
  return(
    <Provider store={Store} >
      <div className='App'>
        <Main>
          
        </Main>
      </div>
    </Provider>
  )
}
export default App