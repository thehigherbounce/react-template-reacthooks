import {useState, useEffect, useRef} from 'react';
import Car from '../components/Car';

function Home()
{
    // const [count, setCount] = useState(0);
    // const [calculation, setCalculation] = useState(0);
    // useEffect(() => {
    //     setCalculation(() => count * 2);
    // }, [count]);
    const [inputValue, setInputValue] = useState("");
    
    // const count = useRef(0); // dont cause re-render
    // // useEffect(() => {
    // //     count.current = count.current + 1;
    // // });
    
    
    const previousInputValue = useRef(""); // tracking state changes
    
    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue])
    
    // const inputElement = useRef(); // accessing dom element

    // const focusInput = () => {
    //     inputElement.current.focus();
    // }
    return (
        <> 
            {/* <h1>I've rendered {count.current} times!</h1> */}
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
            <input 
                type="text"
                // ref={inputElement}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            {/* <button onClick={focusInput}>Focus Input</button> */}
            {/* <button onClick={() => setCount((count) => count + 1)}>calculate</button> */}
            {/* <p>Calculation: {calculation}</p> */}
            <Car name="volvo" />
        </>
    );
}
export default Home;