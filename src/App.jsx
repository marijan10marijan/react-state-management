// COMPONENTS
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Footer from './components/Footer'

// STYLES
import './index.scss'

// HOOKS
// import { useState } from 'react'
import { useReducer } from 'react'

//CONTEXT
import AppContext from './context/AppContext'

const reducer = (state, action)=>{
  switch (action.type){
    case 'changeSize':
      return {...state, size: action.value}
    case 'changeColor':
      return {...state, color: action.value}
    case 'changeSizeAndColor':
      return {...state, size: action.value.size, color: action.value.color}
    case 'incrementLikes':
      return {...state, likes: state.likes + 1}
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, {size:24, color:'red', likes:0})

  // const [size , setSize] = useState(24)
  // const [color , setColor] = useState('red')
  // const [likes , setLikes] = useState(0)

  
  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="grid">
        <Header />
        <Sidebar />
        <Main />
        <Footer />
      </div>
    </AppContext.Provider>
  )
}

export default App
