import './App.css';
import HoverCounter from './components/HoverCounter';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';

function App() {
    return (
        <div className="App">
            <Counter>
                {
                    (counter, incrementCount) => (
                        <ClickCounter
                            counter={counter}
                            incrementCount={incrementCount}
                        />
                    )
                }
            </Counter>

            {/* <Counter
                render={(counter, incrementCount) => (
                    <HoverCounter 
                        counter={counter} 
                        incrementCount={incrementCount} 
                    />
                )}
            /> */}

            <Counter>
                {
                    (counter, incrementCount) => (
                        <HoverCounter
                            counter={counter}
                            incrementCount={incrementCount}
                        />
                    )
                }
            </Counter>
        </div>
    );
}

export default App;
