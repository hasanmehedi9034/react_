import ThemeContext from "../contexts/ThemeContext";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

export default function () {
    return(
        <>
            <h1>This is Content</h1>
            <Counter>
                {
                    (counter, incrementCount) => (
                        <ThemeContext.Consumer>
                            {
                                ({theme}) => (
                                    <HoverCounter
                                        counter={counter}
                                        incrementCount={incrementCount}
                                        theme={theme}
                                    />
                                )
                            }
                        </ThemeContext.Consumer>
                    )
                }
            </Counter>
        </>
    )
}