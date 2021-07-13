import React, {useState} from 'react';

export const MyComponent = () => {
    const [count, setCount] = useState(0);
    return(
        <p>
            <button onClick={()=> setCount(count + 1)}>
                Push me!
            </button>
            You pushed {count} times!
        </p>
    )
}

