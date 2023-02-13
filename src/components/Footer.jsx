import AppContext from "../context/AppContext";
import { useContext } from "react";

const Footer = () => {

    const {dispatch} = useContext(AppContext)

    const changeText = ()=>{
        dispatch({type: 'changeSize', value: 30})
    }

    const likePage = ()=>{
        dispatch({type: 'incrementLikes'})
    }

    return ( 
        <div className="footer">
            <p>This is the footer. <button onClick={changeText}>Make the text 30px but leave the color the same</button></p>
            <button onClick={likePage}>Like the page</button>
        </div>
     );
}
 
export default Footer;