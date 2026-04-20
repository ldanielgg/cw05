import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    return (
        <>
            <div className="component">
                <div className="subTitle">Component 2</div>
                <div className="helloWorld">
                    Count: {count}
                </div>
                <button onClick={increment}>Increment</button>
            </div>
        </>
    )
};

export default Counter;