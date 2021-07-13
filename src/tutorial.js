import React, {useState} from 'react';

export const MyComponent = () => {
    const [count, setCount] = useState(0);
    //useStateは、クラスや関数内で宣言する
    return(
        <div>
            <p>
                <button onClick={()=> setCount(count + 1)}>
                Push me!
                </button>
                You pushed {count} times!
            </p>
            <input
             placeholder={'Your Name'}
             >

            </input>
        </div>
    )
}

