import AppContext from "../context/AppContext";
import { useContext } from "react";

const Sidebar = () => {

    const {state, dispatch} = useContext(AppContext)

    const changeSize = (e)=>{
        dispatch({type: 'changeSize', value: e.target.value})
    }
    const changeColor = (e)=>{
        dispatch({type: 'changeColor', value: e.target.value})
    }

    const handleClick = ()=>{
        dispatch({type: 'changeSizeAndColor', value: {size:20, color:'blue'}})
    }

    return ( 
        <div className="sidebar">
            <input onChange={changeSize} type="number" value={state.size} placeholder="size"/>
            <input onChange={changeColor} type="text" value={state.color} placeholder="color"/>
            <button onClick={handleClick}>Make the text 20px and blue</button>
        </div>
     );
}
 
export default Sidebar;