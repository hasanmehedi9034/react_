import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';



function App() {
    return (
        <Router>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/about" element={<Services/>}/>
        </Router>
    );
}

export default App;
