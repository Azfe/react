import {useState} from 'react';

const ButtonState = () => {

    //let count = 0;

    const [count, setCount] = useState(0);

    //const stateNumber = arrayState[0];
    //const stateFunction = arrayState[1];

    const handleClick = () => {
        //count++;
        //console.log('Button clicked: ', count);
        setCount(count + 1);
    }

    return (
        <button onClick={ handleClick }>
            Button State: {count}
        </button>
    );
};

export default ButtonState;