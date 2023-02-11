import logo from './logo.svg';
import './App.css';
import MyComponentClass from './components/MyComponentClass';
import MyComponent from './components/MyComponent';
import { useCallback, useState } from 'react';
import ShowCount from './components/ShowCount';
import Button from './components/Button';
import Title from './components/Title';

function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementByOne = useCallback(() => {
        setCount1((count1) => count1 + 1);
    }, []);

    const incrementByFive = useCallback(() => {
        setCount2((count2) => count2 + 5);
    }, []);

    return (
        <>  
            <Title/>

            <ShowCount count={count1} title='Counter 1'/>

            <Button handleClick={incrementByOne}>
                Increment by one
            </Button>

            <hr/>

            <ShowCount count={count2} title='Counter 2'/>

            <Button handleClick={incrementByFive}>
                Increment by five
            </Button>

        </>
    );
}

export default App;
