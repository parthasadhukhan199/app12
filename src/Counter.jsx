import React,{useState} from "react";

function Counter(){

    let[display, setDisplay] = useState(0);

    const inc = () =>
        setDisplay(++display);
    const rst =() => setDisplay(0)

    const dec =() => setDisplay(--display)


    return (
        <div className="con">
            <h3 className="display">display: {display} </h3>

            <button className="btn green" onClick={inc}>incriment</button>
            <button className="btn white"onClick={rst}>reset</button>
            <button className="btn red"onClick={dec}>decriment</button>
        </div>
    );
}

export default Counter