import { useState } from "react";
import "./counter.css"
const Counter = () => {
    const [Counter, setCounter] = useState(0);

    const handleClick1 = () => {
        setCounter(Counter + 1);
    }
    const handleClick2 = () => {
        setCounter(Counter - 1);
    }
    return(
        <div>
            <div className="counter">
            Counter App
            </div>
            <div className="counting">{Counter}</div>
            <button className="increment btns" onClick={handleClick1}>Increment</button>
            <button className="decrement btns" onClick={handleClick2}>Decrement</button>
        </div>
    );
};
export default Counter;