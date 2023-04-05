import React, {useState} from 'react'
import '../styles/Button.css'


function Counter(props) {

    const [number, setNumber] = useState(0);

    //number es el valor de mi estado
    //SetNumber es lo que hace que se cambie
    //useState(es el valor inicial)

    const counter = () => {
        setNumber ( number + 1);
    }

    return (
    <>
        <button className={`basic-btn ${props.clase}`} onClick={counter}>{props.text}  {number}</button>
    </>
    )
}

export default Counter;

Counter.defaultProps = {
    text: '🤍'
}