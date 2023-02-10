import './App.css';
import Bracket from './components/composition/Bracket';
import Emoji from './components/composition/Emoji';
import Text from './components/composition/Text';

function App() {
    // return (
    //     <Emoji>
    //         {
    //             ({ addEmoji }) => (
    //                 <Bracket>
    //                     {
    //                         ({ addBracket }) => (
    //                             <Text 
    //                                 addBracket={addBracket}
    //                                 addEmoji={addEmoji} 
    //                             />
    //                         )
    //                     }
    //                 </Bracket>
    //             )
    //         }
    //     </Emoji>        
    // );

    return (
        <Emoji>
            {
                ({ addEmoji }) => (
                    <Bracket>
                        {
                            ({ addBracket }) => (
                                <Text
                                    addEmoji={addEmoji}
                                    addBracket={addBracket}
                                />
                            )
                        }
                    </Bracket>
                )
            }
        </Emoji>
    )
}

export default App;