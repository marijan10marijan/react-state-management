import AppContext from "../context/AppContext";
import { useContext } from "react";

const Main = () => {

    const {state} = useContext(AppContext)

    return ( 
        <div className="main">
            <p style={{color: state.color, fontSize: `${state.size}px`}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga ad aperiam sunt delectus maiores nobis perferendis nulla, rerum, minima odit eaque distinctio ullam, expedita provident quam. Praesentium molestias non, architecto deserunt ratione et, accusantium impedit sint consequatur dicta, repellat officia.</p>
        </div>
     );
}
 
export default Main;