import AppContext from "../context/AppContext";
import { useContext } from "react";

const Header = () => {

    const {state} = useContext(AppContext)

    return ( 
        <div className="header">
            <h1>Welcome to Our App</h1>
            <p>The current size is {state.size}px and the current color is {state.color}</p>
            <p>This page has been liked {state.likes} times.</p>
        </div>
     );
}
 
export default Header;